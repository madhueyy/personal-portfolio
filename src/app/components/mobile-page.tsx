"use client";

import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Navbar from "./navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ParallaxLayer from "./parallax-layer";
import { useEffect, useRef } from "react";
import { User, Layers, CodeXml, Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCard from "./project-card";
import {
  staggerContainer,
  scaleIn,
  slideLeft,
  slideRight,
  colorMap,
  bgColorMap,
  bgColorMap2,
  borderColorMap,
  skillsAndTechnologies,
  projects,
} from "../../lib/constants";
import { FigmaCursor } from "./figma-cursor";
import DotGrid from "./dot-grid";

export default function MobileHome() {
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const contactInView = useInView(contactRef, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        width: "100%",
        transition: { duration: 0.3, ease: [0.2, 1, 0.2, 1], delay: 0.7 },
      });
      await controls.start({
        height: "100%",
        transition: { duration: 0.7, ease: [0.2, 1, 0.2, 1] },
      });
    };
    sequence();
  }, [controls]);

  return (
    <div className="bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <FigmaCursor />
      <Navbar />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <DotGrid />
        </motion.div>
      </div>

      {/* Hero */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
      >
        <ParallaxLayer speed={0.2} className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-172 h-172 bg-white rounded-full mix-blend-multiply filter blur-3xl "></div>
        </ParallaxLayer>

        <div className="flex flex-col max-w-7xl z-10 space-y-4 md:space-y-8 text-center">
          <motion.div
            className="hidden md:inline-block animate-float"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 text-sm border-orange-500 bg-orange-100"
            >
              Software Engineering Student
              <span className="mx-2">•</span>
              Frontend & UI/UX Design
            </Badge>
          </motion.div>

          <div className="relative inline-block">
            <motion.div
              className="hidden md:inline-block absolute -inset-4 border-2 border-violet-600 bg-violet-600/10 rounded-sm"
              initial={{
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                opacity: 0,
              }}
              animate={controls}
            >
              {[
                { position: "-top-1 -left-1", delay: 0.1 },
                { position: "-top-1 -right-1", delay: 0.1 },
                { position: "-bottom-1 -right-1", delay: 0.2 },
                { position: "-bottom-1 -left-1", delay: 0.3 },
              ].map((corner, index) => (
                <motion.div
                  key={index}
                  className={`absolute ${corner.position} w-2 h-2 border-2 border-violet-600 bg-white rounded-none`}
                />
              ))}
            </motion.div>
            <motion.h1
              className="text-4xl md:text-7xl font-bold text-violet-600 md:text-gray-900 px-4 md:py-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Madhu Shrestha
            </motion.h1>
          </div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Aspiring frontend developer passionate about crafting intuitive,
            engaging, and responsive digital experiences.
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
                className="rounded-full cursor-pointer text-white bg-violet-600 backdrop-blur-xl border border-white/20 hover:bg-violet-700 shadow-xl shadow-violet-600/20"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-gray-200 hover:bg-gray-100"
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

      {/* About me */}
      <section
        id="about"
        className="bg-white py-20 px-6 md:px-4 relative w-full mx-auto"
      >
        <div
          className="flex flex-col md:flex-row gap-12 max-w-7xl mx-auto items-center"
          ref={aboutRef}
        >
          <div className="md:w-2/5">
            <div className="bg-card border border-gray-200 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="font-geistmono text-md text-gray-500">
                  <div className="text-violet-600">const developer = {"{"}</div>
                  <div className="ml-4">
                    name: <span className="text-amber-500">"Madhu"</span>,
                  </div>
                  <div className="ml-4">
                    status:{" "}
                    <span className="text-amber-500">
                      "Final Year Software Engineering Student"
                    </span>
                    ,
                  </div>
                  <div className="ml-4">
                    interests: [
                    <span className="text-amber-500">
                      "React", "UI/UX Design", "Innovation"
                    </span>
                    ],
                  </div>
                  <div className="ml-4">
                    goal:{" "}
                    <span className="text-amber-500">
                      "Build intuitive digital experiences"
                    </span>
                  </div>
                  <div className="text-violet-600">{"}"}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-3/5 space-y-6">
            <div className="inline-flex items-center gap-2">
              <User className="text-violet-600" size={28} />
              <h2 className="text-3xl font-bold">About Me</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Designing with empathy, building with purpose
            </h3>

            <p className="text-muted-foreground">
              I'm a final-year software engineering student with a strong focus
              on frontend development and a deep interest in UI/UX design. I
              enjoy translating complex ideas into simple, beautiful, and usable
              interfaces.
            </p>

            <p className="text-muted-foreground">
              I’m actively seeking internship opportunities where I can
              contribute to frontend projects while deepening my understanding
              of user-centered design. I’m especially drawn to roles that
              combine creativity with code and allow me to grow as both a
              developer and designer.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-6 md:px-4 relative overflow-hidden"
      >
        <div className="flex flex-col max-w-7xl mx-auto gap-y-12 relative z-10">
          <div className="inline-flex justify-center items-center gap-2">
            <Layers className="text-violet-600" size={26} />
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsAndTechnologies.map((skill, index) => (
              <div key={index}>
                <Card className="py-6 space-y-2 border-1 border-gray-100 bg-white/70 backdrop-blur-[2px] hover:bg-white transition-all duration-300 h-full shadow-xl shadow-black/5">
                  <CardHeader className="text-center">
                    <div
                      className={`w-12 h-12 ${
                        bgColorMap[skill.color as keyof typeof bgColorMap]
                      } rounded-lg flex items-center justify-center mx-auto mb-4`}
                    >
                      <skill.icon
                        className={`h-6 w-6 ${
                          colorMap[skill.color as keyof typeof colorMap]
                        }`}
                      />
                    </div>

                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {skill.skills.map((item, skillIndex) => (
                        <div key={skillIndex}>
                          <Badge
                            variant="secondary"
                            className={`rounded-full ${
                              bgColorMap2[
                                skill.color as keyof typeof bgColorMap2
                              ]
                            } ${
                              borderColorMap[
                                skill.color as keyof typeof borderColorMap
                              ]
                            }`}
                          >
                            {item}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 md:px-4 bg-white relative">
        <ParallaxLayer
          speed={0.05}
          direction="vertical"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="inline-flex justify-center items-center gap-2">
              <CodeXml className="text-violet-600" size={30} />
              <h2 className="text-3xl font-bold">Projects</h2>
            </div>
            <p className="text-xl text-zinc-500 mb-8 max-w-2xl mx-auto">
              Here are some projects I've worked on that showcase my skills in
              frontend development and UI/UX design.
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  tags={project.tags}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 bg-muted/30 relative overflow-hidden"
        ref={contactRef}
      >
        <div className="flex flex-col max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 items-center text-center">
          <h2 className="flex flex-row gap-x-2 items-center text-3xl font-bold mb-6">
            <Mail className="text-violet-600" size={28} />
            Contact Me
          </h2>

          <p className="text-md md:text-xl text-zinc-500 mb-8 max-w-2xl mx-auto">
            Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div>
              <Button
                size="lg"
                className="rounded-full cursor-pointer text-white bg-violet-600 backdrop-blur-xl border border-white/20 hover:bg-violet-700 shadow-xl shadow-violet-600/20"
              >
                <a
                  href="https://linkedin.com/in/madhu-shrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex flex-row items-center"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <div>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full cursor-pointer bg-white border-gray-200 hover:bg-gray-100 shadow-xl shadow-black/10"
              >
                <a
                  href="mailto:madhu.shrestha666@gmail.com"
                  aria-label="Email"
                  className="flex flex-row items-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 bg-white backdrop-blur-2xl">
        <div className="max-w-7xl text-gray-500 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>Madhu Shrestha © 2025</p>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-cursor-text="GitHub"
              className="hover:text-violet-600"
            >
              <a
                href="https://github.com/madhueyy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              data-cursor-text="LinkedIn"
              className="hover:text-violet-600"
            >
              <a
                href="https://linkedin.com/in/madhu-shrestha"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              data-cursor-text="Email"
              className="hover:text-violet-600"
            >
              <a href="mailto:madhu.shrestha666@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
