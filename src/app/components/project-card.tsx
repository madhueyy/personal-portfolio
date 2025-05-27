"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  githubUrl: string;
  liveUrl: string;
}

const slideUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ProjectCard({
  title,
  description,
  images,
  tags,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  const projectCardRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectCardInView = useInView(projectCardRef, { once: false });

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial="initial"
      animate={projectCardInView ? "animate" : "initial"}
      variants={slideUp}
    >
      <Card
        className="overflow-hidden border-gray-400/10 transition-all duration-300 hover:shadow-xl group h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-cursor-text="View"
        ref={projectCardRef}
      >
        <div className="relative overflow-hidden w-full aspect-video">
          <Image
            src={images[currentImageIndex]}
            alt={`${title} - Image ${currentImageIndex + 1}`}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-100" : "scale-100"
            }`}
          />

          {/* Image left and right arrows */}
          {images.length > 1 && (
            <>
              <Button
                size="sm"
                className="w-8 h-8 cursor-pointer rounded-full absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-black/30 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
              >
                <ChevronLeft />
              </Button>

              <Button
                size="sm"
                className="w-8 h-8 cursor-pointer rounded-full absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/20 backdrop-blur-sm border border-white/20 hover:bg-black/30 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
              >
                <ChevronRight />
              </Button>

              {/* Image indicators */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-20">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <CardContent className="px-6 pt-6 pb-2 space-y-4 relative">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 h-0.5 bg-violet-600"
          />

          <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-muted-foreground mt-2">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="rounded-full bg-gray-100 px-2 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex space-x-4 mr-auto">
            <Button
              size="sm"
              variant="outline"
              className="text-white rounded-full bg-violet-600 hover:bg-violet-700"
              asChild
              data-cursor-text="Code"
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="rounded-full border-gray-200 hover:bg-gray-100"
              asChild
              data-cursor-text="Demo"
            >
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
