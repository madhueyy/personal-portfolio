"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DotGrid = () => {
  const baseSpacing = 40;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (dimensions.width === 0 || dimensions.height === 0) return null;

  const spacing = dimensions.width < 768 ? baseSpacing * 1.8 : baseSpacing;

  const cols = Math.ceil(dimensions.width / spacing);
  const rows = Math.ceil(dimensions.height / spacing);

  const dots = [];
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const delay = (x + y) * 0.02;
      dots.push(
        <motion.circle
          key={`${x}-${y}`}
          cx={x * spacing + spacing / 2}
          cy={y * spacing + spacing / 2}
          r={1.5}
          fill="rgb(127 34 254)"
          animate={{ r: [1.5, 2.5, 1.5] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            delay,
            ease: "easeInOut",
          }}
        />
      );
    }
  }

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full">{dots}</svg>
    </div>
  );
};

export default DotGrid;
