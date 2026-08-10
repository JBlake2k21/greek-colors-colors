// components/DesignerBioPopover.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  useFloating,
  offset,
  flip,
  shift,
  FloatingPortal,
  FloatingFocusManager,
  useRole,
  useDismiss,
  useInteractions,
} from "@floating-ui/react";
import { X, Sparkles } from "lucide-react";

interface DesignerBioPopoverProps {
  onHoverChange?: (isHovered: boolean, pointerPos?: { x: number; y: number }) => void;
}

const paragraphs = [
  "Rosyln Kiser Miller is the visionary Founder, Master Jeweler, and Creative Director of Ears of Elegance, where exceptional craftsmanship meets timeless sophistication. Guided by an unwavering commitment to quality and artistic excellence, she has dedicated her work to creating fine jewelry that celebrates life's most treasured moments and becomes part of a family's legacy.",
  "With a passion for elegant design and meticulous attention to detail, Rosyln personally oversees the creative direction behind every collection. From concept and gemstone selection to the final finishing touches, each piece reflects her belief that fine jewelry should inspire confidence, celebrate individuality, and endure for generations.",
  "Her design philosophy is rooted in the idea that luxury is defined not only by precious materials but by intentional craftsmanship, meaningful storytelling, and enduring beauty.",
  "As a proud member of Sigma Gamma Rho Sorority, Inc., Rosyln embraces the principles of Sisterhood, Scholarship, and Service—values that influence both her leadership and her approach to business.",
  "Under her creative leadership, Greek Colors has become more than a jewelry brand—it is a celebration of artistry, legacy, and personal expression.",
];

export default function DesignerBioPopover({
  onHoverChange,
}: DesignerBioPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const {
    refs,
    floatingStyles,
    context,
    placement,
  } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "top-end",
    middleware: [
      offset(20),
      flip({ fallbackAxisSideDirection: "start" }),
      shift({ padding: 16 }),
    ],
  });

  const role = useRole(context, { role: "dialog" });
  const dismiss = useDismiss(context, {
    escapeKey: true,
    outsidePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    role,
    dismiss,
  ]);

  const clearHoverTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    clearHoverTimeout();
    setIsOpen(true);
    if (onHoverChange) {
      const rect = e.currentTarget.getBoundingClientRect();
      onHoverChange(true, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (onHoverChange) {
      const rect = e.currentTarget.getBoundingClientRect();
      onHoverChange(true, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleMouseLeave = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      if (onHoverChange) {
        onHoverChange(false);
      }
    }, 250);
  };

  const handleCardMouseEnter = () => {
    clearHoverTimeout();
  };

  const handleCardMouseLeave = () => {
    clearHoverTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      if (onHoverChange) {
        onHoverChange(false);
      }
    }, 250);
  };

  const handleBadgeClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "about";
    }
  };

  // Easing curve specified by user: ease-out cubic-bezier(.22,.61,.36,1)
  const luxuryEase = [0.22, 0.61, 0.36, 1];

  return (
    <>
      {/* Interactive Trigger Badge */}
      <div
        ref={refs.setReference}
        {...getReferenceProps({
          onMouseEnter: handleMouseEnter,
          onMouseMove: handleMouseMove,
          onMouseLeave: handleMouseLeave,
          onClick: handleBadgeClick,
          onKeyDown: handleKeyDown,
        })}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls="designer-bio-dialog"
        aria-label="Rosyln Kiser Miller, Master Jeweler and Creative Director. Click or press enter to read biography."
        className="flex items-center gap-3 px-4 py-2.5 rounded-full glass-luxury border border-[#D4AF37]/40 shadow-2xl hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/70"
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF37] shadow-gold flex-shrink-0">
          <Image
            src="/roslyn-miller.jpg"
            alt="Rosyln Kiser Miller"
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="text-left">
          <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] text-[#E5C158] block font-bold group-hover:text-[#FFF5D6] transition-colors">
            Rosyln Kiser Miller
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans text-[#FAF9F6]/70 uppercase tracking-widest block group-hover:text-[#FAF9F6]/90 transition-colors">
            Master Jeweler & Creative Director
          </span>
        </div>
      </div>

      {/* Luxury Editorial Biography Card Popover */}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <FloatingFocusManager context={context} modal={false}>
              <motion.div
                ref={refs.setFloating}
                style={floatingStyles}
                {...getFloatingProps({
                  onMouseEnter: handleCardMouseEnter,
                  onMouseLeave: handleCardMouseLeave,
                })}
                id="designer-bio-dialog"
                role="dialog"
                aria-modal="false"
                aria-label="Rosyln Kiser Miller Biography"
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 15, scale: 0.97, filter: "blur(6px)" }
                }
                animate={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
                }
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 10, scale: 0.98, filter: "blur(4px)" }
                }
                transition={{
                  duration: 0.35,
                  ease: luxuryEase,
                }}
                className="z-50 max-w-[420px] w-[92vw] max-h-[85vh] overflow-y-auto rounded-[18px] bg-[#090909]/95 backdrop-blur-[18px] p-6 sm:p-8 border border-[rgba(212,175,55,0.25)] border-t-2 border-t-[#D4AF37] shadow-[0_30px_80px_rgba(0,0,0,0.85)] text-[#FAF9F6]"
              >
                {/* Close X Button for Mobile & Keyboard Accessibility */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close biography"
                  className="absolute top-4 right-4 p-1.5 rounded-full text-[#FAF9F6]/60 hover:text-[#FAF9F6] hover:bg-[#1A1A1A] transition-colors focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Top Row: Circular Portrait, Name, Title & Sigma Gamma Rho Accent */}
                <div className="flex items-center gap-4 pb-4">
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.96 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: luxuryEase }}
                    className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.35)] flex-shrink-0"
                  >
                    <Image
                      src="/roslyn-miller.jpg"
                      alt="Rosyln Kiser Miller Portrait"
                      fill
                      className="object-cover object-top"
                    />
                  </motion.div>

                  <div className="flex-1 pr-6">
                    <div className="flex items-center gap-2">
                      <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#FAF9F6]">
                        Rosyln Kiser Miller
                      </h3>
                      {/* Sigma Gamma Rho tasteful gold monogram badge */}
                      <span
                        title="Member of Sigma Gamma Rho Sorority, Inc."
                        className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-serif font-bold text-[#E5C158] bg-[#1A1305] border border-[#D4AF37]/50 shadow-sm"
                      >
                        ΣΓΡ
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#D4AF37] mt-1 font-medium">
                      Founder • Master Jeweler • Creative Director
                    </p>
                  </div>
                </div>

                {/* Subtle Gold Divider Beneath Heading */}
                <div className="h-[1px] w-full bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/40 to-transparent my-4" />

                {/* Body Biography Paragraphs with Staggered Animations */}
                <div className="space-y-3 font-sans text-xs sm:text-[13px] leading-relaxed text-[#FAF9F6]/85">
                  {paragraphs.map((text, idx) => (
                    <motion.p
                      key={idx}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 8 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.35,
                        delay: shouldReduceMotion ? 0 : 0.08 + 0.04 * idx,
                        ease: luxuryEase,
                      }}
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>

                {/* Bottom Quote with Gold Accent Line */}
                <motion.div
                  initial={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 0, y: 8 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : 0.28,
                    ease: luxuryEase,
                  }}
                  className="my-5 border-l-2 border-[#D4AF37] pl-3 py-1 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-r-md"
                >
                  <p className="italic font-serif text-xs sm:text-[13px] text-[#FAF9F6]/90 leading-relaxed">
                    &ldquo;The most beautiful jewelry is not measured solely by
                    its brilliance, but by the memories it preserves and the
                    legacy it carries forward.&rdquo;
                  </p>
                </motion.div>

                {/* Bottom Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-3 border-t border-[rgba(212,175,55,0.15)]">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 rounded-sm border border-[#D4AF37]/40 bg-[#121212] text-[#FAF9F6] font-serif text-[11px] font-medium uppercase tracking-[0.2em] text-center hover:border-[#D4AF37] hover:bg-[#1D0B2E] transition-all duration-300"
                  >
                    View Collections
                  </Link>
                  <button
                    type="button"
                    onClick={scrollToAbout}
                    className="px-6 py-2.5 rounded-sm bg-gold-gradient text-black font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-center shadow-gold hover:opacity-95 hover:shadow-[0_0_20px_rgba(212,175,55,0.7)] transition-all duration-300"
                  >
                    Meet the Designer →
                  </button>
                </div>
              </motion.div>
            </FloatingFocusManager>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </>
  );
}
