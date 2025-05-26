"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Navbar from "./components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ParallaxLayer from "./components/parallax-layer";
import { useRef } from "react";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <Navbar />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
      >
        <motion.div className="absolute inset-0 z-0" style={{ y }}>
          <ParallaxLayer
            speed={0.2}
            className="absolute top-20 left-20 w-72 h-72"
          >
            <div className="w-full h-full bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer
            speed={-0.3}
            className="absolute bottom-20 right-20 w-72 h-72"
          >
            <div className="w-full h-full bg-yellow-300/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </ParallaxLayer>
          <ParallaxLayer
            speed={0.1}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96"
          >
            <div className="w-full h-full bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </ParallaxLayer>
        </motion.div>

        <div className="max-w-5xl z-10 space-y-8 text-center">
          <div className="inline-block animate-float">
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge
                variant="outline"
                className="rounded-full px-4 py-1 text-sm border-violet-500/30 bg-violet-500/5"
              >
                Software Engineering Student
                <span className="mx-2">•</span>
                Final Year
              </Badge>
            </motion.div>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block">Hi, I'm </span>
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Madhu Shrestha
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            I build exceptional digital experiences with a focus on both
            functionality and aesthetics.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="rounded-full text-white bg-violet-600"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-gray-200"
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-muted-foreground"
            >
              <path
                d="M12 5V19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 relative"></section>
    </div>
  );
}
