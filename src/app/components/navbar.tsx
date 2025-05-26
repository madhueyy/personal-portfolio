"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          <Button
            variant="link"
            className="text-xl font-bold p-0"
            onClick={() => scrollToSection("hero")}
          >
            MS
          </Button>

          <div className="hidden md:flex items-center gap-6">
            <Button variant="link" onClick={() => scrollToSection("about")}>
              About
            </Button>
            <Button variant="link" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="link" onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button variant="link" onClick={() => scrollToSection("contact")}>
              Contact
            </Button>
            <Button
              variant="default"
              className="rounded-full"
              onClick={() => scrollToSection("contact")}
            >
              Hire Me
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>

      {/* Mobile navbar */}
      <div
        className={`fixed inset-0 z-50 bg-background flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Button
            variant="link"
            className="text-xl font-bold p-0"
            onClick={() => {
              scrollToSection("hero");
              toggleMenu();
            }}
          >
            MS
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="flex flex-col gap-2 p-4">
          <Button
            variant="ghost"
            className="justify-start text-lg py-6"
            onClick={() => {
              scrollToSection("about");
              toggleMenu();
            }}
          >
            About
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg py-6"
            onClick={() => {
              scrollToSection("skills");
              toggleMenu();
            }}
          >
            Skills
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg py-6"
            onClick={() => {
              scrollToSection("projects");
              toggleMenu();
            }}
          >
            Projects
          </Button>
          <Button
            variant="ghost"
            className="justify-start text-lg py-6"
            onClick={() => {
              scrollToSection("contact");
              toggleMenu();
            }}
          >
            Contact
          </Button>

          <Button
            variant="default"
            className="mt-4"
            onClick={() => {
              scrollToSection("contact");
              toggleMenu();
            }}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
