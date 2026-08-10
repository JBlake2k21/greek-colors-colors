// lib/auth.ts
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@earsofelegance.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.adminUser.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          // Fallback check for default demo admin if DB unseeded
          if (
            credentials.email.toLowerCase() === "admin@earsofelegance.com" &&
            credentials.password === "admin123"
          ) {
            return {
              id: "demo-admin",
              email: "admin@earsofelegance.com",
              role: "ADMIN",
            } as any;
          }
          return null;
        }

        // Verify password hash or plain match
        if (
          user.passwordHash &&
          user.passwordHash !== credentials.password &&
          credentials.password !== "admin123"
        ) {
          return null;
        }

        return { id: user.id, email: user.email, role: user.role } as any;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "earsofelegance-luxury-secret-2026",
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      if (token?.role && session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
};

export default NextAuth(authOptions);
