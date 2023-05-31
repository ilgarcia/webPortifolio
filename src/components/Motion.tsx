"use client";

import { useRef } from "react";
import { motion as m, Variants, useInView } from "framer-motion";

export function SocialMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref}>
      <m.div
        className="hidden lg:block fixed bottom-0 right-10 left-auto text-theme-orange w-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 300 },
          visible: {
            opacity: !isInView ? 1 : 0,
            y: !isInView ? 0 : 300,
            transition: { duration: 1, delay: 0.2 },
          },
        }}
      >
        {children}
      </m.div>
    </section>
  );
}

const navVariants: Variants = {
  visible: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
};

export function NavMotion({ children }: { children: React.ReactNode }) {
  return (
    <m.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className="flex items-center justify-between max-w-7xl h-full mx-auto px-8"
    >
      {children}
    </m.nav>
  );
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export function NavItemMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <m.div variants={itemVariants} className={className}>
      {children}
    </m.div>
  );
}

