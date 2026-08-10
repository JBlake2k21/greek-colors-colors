// components/DesignerBioPopover.tsx
"use client";

import React, { useState, useRef } from "react";
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
import { X } from "lucide-react";

interface DesignerBioPopoverProps {
  onHoverChange?: (isHovered: boolean, pointerPos?: { x: number; y: number }) => void;
}

const paragraphs = [
  "Rosyln Kiser Miller is the visionary Founder, Master Jeweler, and Creative Director of Greek Colors Colors, where exceptional craftsmanship meets timeless sophistication. Guided by an unwavering commitment to quality and artistic excellence, she has dedicated her work to creating fine jewelry that celebrates life's most treasured moments and becomes part of a family's legacy.",
  "With a passion for elegant design and meticulous attention to detail, Rosyln personally oversees the creative direction behind every collection. From concept and gemstone selection to the final finishing touches, each piece reflects her belief that fine jewelry should inspire confidence, celebrate individuality, and endure for generations.",
  "Her design philosophy is rooted in the idea that luxury is defined not only by precious materials but by intentional craftsmanship, meaningful storytelling, and enduring beauty.",
  "As a proud member of Sigma Gamma Rho Sorority, Inc., Rosyln embraces the principles of Sisterhood, Scholarship, and Service—values that influence both her leadership and her approach to business.",
  "Under her creative leadership, Greek Colors Colors has become more than a jewelry brand—it is a celebration of artistry, legacy, and personal expression.",
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
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#001B55]/90 border border-[#CCA147]/60 shadow-2xl hover:border-[#E7CA83] transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#CCA147]"
      >
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#CCA147] shadow-gold flex-shrink-0">
          <Image
            src="/roslyn-miller.jpg"
            alt="Rosyln Kiser Miller"
            fill
            className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="text-left">
          <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.2em] text-[#CCA147] block font-bold group-hover:text-[#E7CA83] transition-colors">
            Rosyln Kiser Miller
          </span>
          <span className="text-[9px] sm:text-[10px] font-sans text-[#FCFFFE]/80 uppercase tracking-widest block transition-colors">
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
                className="z-50 max-w-[420px] w-[92vw] max-h-[85vh] overflow-y-auto rounded-[18px] bg-[#001B55]/95 backdrop-blur-[18px] p-6 sm:p-8 border border-[#CCA147]/50 border-t-2 border-t-[#CCA147] shadow-[0_30px_80px_rgba(0,0,0,0.85)] text-[#FCFFFE]"
              >
                {/* Close X Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close biography"
                  className="absolute top-4 right-4 p-1.5 rounded-full text-[#FCFFFE]/70 hover:text-[#FCFFFE] hover:bg-[#002677] transition-colors focus:outline-none focus:ring-1 focus:ring-[#CCA147]"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Top Row */}
                <div className="flex items-center gap-4 pb-4">
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.96 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: luxuryEase }}
                    className="relative w-[72px] h-[72px] rounded-full overflow-hidden border-2 border-[#CCA147] shadow-[0_0_15px_rgba(204,161,71,0.4)] flex-shrink-0"
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
                      <h3 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#FCFFFE]">
                        Rosyln Kiser Miller
                      </h3>
                      <span
                        title="Member of Sigma Gamma Rho Sorority, Inc."
                        className="inline-flex items-center justify-center px-1.5 py-0.5 rounded text-[10px] font-serif font-bold text-[#E7CA83] bg-[#002677] border border-[#CCA147]/60 shadow-sm"
                      >
                        ΣΓΡ
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.18em] text-[#CCA147] mt-1 font-semibold">
                      Founder • Master Jeweler • Creative Director
                    </p>
                  </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-[#CCA147] via-[#E7CA83] to-transparent my-4" />

                <div className="space-y-3 font-sans text-xs sm:text-[13px] leading-relaxed text-[#FCFFFE]/90">
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
                  className="my-5 border-l-2 border-[#CCA147] pl-3 py-1 bg-gradient-to-r from-[#CCA147]/20 to-transparent rounded-r-md"
                >
                  <p className="italic font-serif text-xs sm:text-[13px] text-[#E7CA83] leading-relaxed">
                    &ldquo;The most beautiful jewelry is not measured solely by
                    its brilliance, but by the memories it preserves and the
                    legacy it carries forward.&rdquo;
                  </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-3 border-t border-[#CCA147]/25">
                  <Link
                    href="/products"
                    onClick={() => setIsOpen(false)}
                    className="px-5 py-2.5 rounded-sm border border-[#CCA147]/50 bg-[#002677] text-[#FCFFFE] font-serif text-[11px] font-medium uppercase tracking-[0.2em] text-center hover:border-[#CCA147] hover:bg-[#003399] transition-all duration-300"
                  >
                    View Collections
                  </Link>
                  <button
                    type="button"
                    onClick={scrollToAbout}
                    className="px-6 py-2.5 rounded-sm bg-[#CCA147] text-[#001B55] font-serif text-[11px] font-bold uppercase tracking-[0.2em] text-center shadow-gold hover:bg-[#E7CA83] transition-all duration-300"
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
