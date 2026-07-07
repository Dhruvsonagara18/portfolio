import React, { useState, useEffect } from "react";
import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#experience", label: "Experience" },
  
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-strong py-3 backdrop-blur-lg"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
        >
          DS<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {NavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button size="sm">
            Contact Me
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in border-t border-border">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-3">
            {NavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-lg text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            ))}

            <Button size="md" className="w-full">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};  