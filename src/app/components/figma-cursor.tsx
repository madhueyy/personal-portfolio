"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FigmaCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideCursor = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-normal"
      style={{
        x: mousePosition.x,
        y: mousePosition.y,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
    >
      {/* Cursor arrow */}
      <div className="relative">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -translate-x-1 -translate-y-1"
        >
          <path
            d="M5.5 3.5L20.5 11.5L12 12.5L7.5 20L5.5 3.5Z"
            fill="#7c3aed"
            stroke="white"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* Cursor label */}
        <motion.div
          className="absolute top-4 left-3 bg-violet-600 text-white px-4 py-1 rounded-sm text-xs font-medium shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.2 }}
        >
          <div className="flex items-center gap-2">
            <span>You</span>
            {/* <div className="flex gap-0.5">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div> */}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
