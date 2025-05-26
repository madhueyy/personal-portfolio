"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLayerProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "vertical" | "horizontal";
}

export default function ParallaxLayer({
  children,
  speed = 0.5,
  className = "",
  direction = "vertical",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);
  const x = useTransform(scrollYProgress, [0, 1], [0, 100 * speed]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={direction === "vertical" ? { y } : { x }}
    >
      {children}
    </motion.div>
  );
}
