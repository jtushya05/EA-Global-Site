"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainNav } from "./NavigationMenu";
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Briefcase className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold text-primary">EA Global</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <MainNav isScrolled={isScrolled} />
            <Link 
              href="/about" 
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              About
            </Link>
            <Link 
              href="/testimonials" 
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              Testimonials
            </Link>
            <Link 
              href="/blog" 
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              Blog
            </Link>
            <Link 
              href="/#contact" 
              className={`text-sm font-medium hover:text-primary transition-colors ${
                pathname === '/' && !isScrolled ? 'text-white' : 'text-gray-900'
              }`}
            >
              Contact
            </Link>
            <Link href="/book">
              <Button>Get Started</Button>
            </Link>
          </nav>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              {/* Mobile menu content */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}