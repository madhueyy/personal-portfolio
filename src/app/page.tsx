"use client";

import { motion, useInView, useScroll, useTransform } from "motion/react";
import Navbar from "./components/navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ParallaxLayer from "./components/parallax-layer";
import { useRef } from "react";
import { User, Layers, CodeXml, Github, Linkedin, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectCard from "./components/project-card";
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
} from "../lib/constants";

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);

  const aboutInView = useInView(aboutRef, { once: false });
  const skillsInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const contactInView = useInView(contactRef, { once: false });

  return (
    <div className="bg-gradient-to-b from-background to-background/80 relative overflow-hidden">
      <Navbar />

      {/* Hero */}
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
          <motion.div
            className="inline-block animate-float"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge
              variant="outline"
              className="rounded-full px-4 py-1 text-sm border-violet-600/30 bg-violet-600/5"
            >
              Software Engineering Student
              <span className="mx-2">•</span>
              Final Year
            </Badge>
          </motion.div>

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
                className="rounded-full text-white bg-violet-600 hover:bg-violet-700"
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
        className="py-20 px-4 sm:px-6 relative max-w-7xl mx-auto"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center"
          ref={aboutRef}
        >
          <motion.div
            className="md:w-2/5"
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={slideLeft}
          >
            <div className="bg-card border border-gray-200 p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>

                <div className="font-mono text-md text-gray-600">
                  <div className="text-violet-600">const developer = {"{"}</div>
                  <div className="ml-4">
                    name: <span className="text-yellow-600">"Madhu"</span>,
                  </div>
                  <div className="ml-4">
                    passion:{" "}
                    <span className="text-yellow-600">"Creating magic"</span>,
                  </div>
                  <div className="ml-4">
                    skills: [
                    <span className="text-yellow-600">
                      "React", "Design", "Innovation"
                    </span>
                    ],
                  </div>
                  <div className="ml-4">
                    mission:{" "}
                    <span className="text-yellow-600">"Bridge art & code"</span>
                  </div>
                  <div className="text-violet-600">{"}"}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-3/5 space-y-6"
            initial="initial"
            animate={aboutInView ? "animate" : "initial"}
            variants={slideRight}
          >
            <div className="inline-flex items-center gap-2">
              <User className="text-violet-600" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold">
              Passionate about creating intuitive and engaging user experiences
            </h3>

            <p className="text-muted-foreground">
              I'm a frontend software engineer with a strong interest in UI/UX
              design. I believe that great products come from the perfect
              balance of functionality, usability, and aesthetics. My background
              in both development and design allows me to bridge the gap between
              these disciplines.
            </p>

            <p className="text-muted-foreground">
              Currently seeking internship opportunities where I can apply my
              skills in frontend development while contributing to the user
              experience design process. I'm particularly interested in roles
              that allow me to work at the intersection of code and design.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 bg-white relative overflow-hidden"
      >
        <ParallaxLayer
          speed={0.1}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 right-0 w-50 h-50 bg-violet-600/20 rounded-full blur-none"></div>
          <div className="absolute bottom-0 left-0 w-66 h-66 bg-yellow-500/20 rounded-full blur-none"></div>
        </ParallaxLayer>

        <div className="flex flex-col max-w-7xl mx-auto gap-y-12 relative z-10">
          <div className="inline-flex justify-center items-center gap-2">
            <Layers className="text-violet-600" />
            <h2 className="text-2xl font-bold">Skills & Technologies</h2>
          </div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={skillsInView ? "animate" : "initial"}
            ref={skillsRef}
          >
            {skillsAndTechnologies.map((skill, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="py-6 space-y-2 border-1 border-white/50 bg-white/10 backdrop-blur-xl hover:bg-white/50 transition-all duration-300 h-full shadow-xl shadow-black/5">
                  <CardHeader className="text-center">
                    <motion.div
                      className={`w-12 h-12 ${
                        bgColorMap[skill.color as keyof typeof bgColorMap]
                      } rounded-lg flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <skill.icon
                        className={`h-6 w-6 ${
                          colorMap[skill.color as keyof typeof colorMap]
                        }`}
                      />
                    </motion.div>

                    <CardTitle className="text-lg">{skill.title}</CardTitle>
                  </CardHeader>

                  <CardContent>
                    <motion.div
                      className="grid grid-cols-1 sm:grid-cols-2 gap-2"
                      variants={staggerContainer}
                      initial="initial"
                      animate={skillsInView ? "animate" : "initial"}
                    >
                      {skill.skills.map((item, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          variants={{
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                          }}
                          transition={{ delay: skillIndex * 0.1 }}
                        >
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
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 relative">
        <ParallaxLayer
          speed={0.05}
          direction="vertical"
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-40 left-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 right-20 w-64 h-64 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          <div className="flex flex-col items-center gap-6 justify-center text-center space-y-4">
            <div className="inline-flex justify-center items-center gap-2">
              <CodeXml className="text-violet-600" />
              <h2 className="text-2xl font-bold">Projects</h2>
            </div>

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
      >
        <ParallaxLayer
          speed={0.1}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full filter blur-3xl"></div>
        </ParallaxLayer>

        <div className="max-w-7xl mx-auto relative z-10" ref={contactRef}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="initial"
              animate={contactInView ? "animate" : "initial"}
              variants={slideRight}
            >
              <div className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5 text-violet-600" />
                <h2 className="text-2xl font-bold">Contact Me</h2>
              </div>

              <div>
                <p className="text-muted-foreground">
                  I'm currently looking for software engineering internship
                  opportunities. If you think I'd be a good fit for your team,
                  or if you have any questions, feel free to reach out!
                </p>
              </div>

              <a
                href="mailto:madhu.shrestha2003@outlook.com"
                className="flex items-center gap-3 group"
                data-cursor-text="Email"
              >
                <div className="bg-violet-600/10 p-3 rounded-full group-hover:bg-violet-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-violet-600" />
                </div>
                <span>madhu.shrestha2003@outlook.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/madhu-shrestha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                data-cursor-text="LinkedIn"
              >
                <div className="bg-violet-600/10 p-3 rounded-full group-hover:bg-violet-600/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-violet-600" />
                </div>
                <span>linkedin.com/in/madhu-shrestha</span>
              </a>

              <a
                href="https://github.com/madhueyy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                data-cursor-text="GitHub"
              >
                <div className="bg-violet-600/10 p-3 rounded-full group-hover:bg-violet-600/20 transition-colors">
                  <Github className="w-5 h-5 text-violet-600" />
                </div>
                <span>github.com/madhueyy</span>
              </a>
            </motion.div>

            <motion.div
              initial="initial"
              animate={contactInView ? "animate" : "initial"}
              variants={slideLeft}
            >
              <Card className="overflow-hidden border-gray-200 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-300 via-violet-600 to-violet-300"></div>
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your Name"
                        className="w-full p-3 rounded-md border border-gray-300 bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full p-3 rounded-md border border-gray-300 bg-background"
                      />
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        placeholder="Your message..."
                        rows={4}
                        className="w-full p-3 rounded-md border border-gray-300 bg-background resize-none"
                      />
                    </div>

                    <Button
                      size="lg"
                      className="w-full cursor-pointer text-white bg-violet-600 hover:bg-violet-700"
                      data-cursor-text="Send"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Your Name</span>
            <span className="text-muted-foreground">© 2025</span>
          </div>

          <div className="flex gap-4">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-cursor-text="GitHub"
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
            >
              <a
                href="mailto:madhu.shrestha2003@outlook.com"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
