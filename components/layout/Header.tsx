"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainNav } from "./NavigationMenu";
import { usePathname } from 'next/navigation';

const mobileNavItems = [
  {
    label: "Career Counselling",
    submenu: [
      { href: "/career-counselling/class-8-9", label: "Class 8-9: Stream & Subject Selection" },
      { href: "/career-counselling/class-10-12", label: "Class 10-12: Career Selection" },
      { href: "/career-counselling/college-graduates", label: "College & Graduates" },
    ],
  },
  {
    label: "College Selection",
    submenu: [
      { href: "/college-selection/overseas", label: "Overseas Education" },
      { href: "/college-selection/india", label: "India" },
    ],
  },
  {
    label: "For Institutions",
    submenu: [
      { href: "/institutions/career-guidance", label: "In-Schools Career Guidance" },
      { href: "/institutions/book-expert", label: "Book an Expert" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setExpandedItems([]);
  }, [pathname]);

  const toggleSubmenu = (label: string) => {
    setExpandedItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/edupower-counselling-logo.png" 
              alt="EA Global Logo" 
              className="w-8 h-8 object-contain"
            />
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
            <Link href={`/book?originPage=${encodeURIComponent("header_GetStarted")}&serviceType=${encodeURIComponent("General Career Consultation")}`}>
              <Button>Get Started</Button>
            </Link>
          </nav>

          <button
            className={`md:hidden ${isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 absolute top-16 left-0 right-0 bg-white shadow-lg">
            <nav className="container mx-auto px-4">
              <div className="space-y-4">
                {mobileNavItems.map((item) => (
                  <div key={item.label} className="space-y-2">
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="flex items-center justify-between w-full text-left text-gray-900 font-medium"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedItems.includes(item.label) ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {expandedItems.includes(item.label) && (
                      <div className="pl-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-gray-600 hover:text-primary transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="space-y-2 pt-2 border-t">
                  <Link
                    href="/about"
                    className="block text-gray-900 font-medium hover:text-primary transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/testimonials"
                    className="block text-gray-900 font-medium hover:text-primary transition-colors"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-gray-900 font-medium hover:text-primary transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="/#contact"
                    className="block text-gray-900 font-medium hover:text-primary transition-colors"
                  >
                    Contact
                  </Link>
                  <Link href={`/book?originPage=${encodeURIComponent("mobile_menu_GetStarted")}&serviceType=${encodeURIComponent("General Career Consultation")}`} className="block pt-2">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}