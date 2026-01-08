"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Menu, X, Star, LayoutDashboard } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-cream shadow-md border-b border-deep-teal/10" 
          : "bg-cream/90 backdrop-blur-sm"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 relative">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2 group z-10">
                <div className="relative w-10 h-10 flex-shrink-0">
                  <img
                    src="/seal.png"
                    alt="Nu Al Andalusia Seal"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback to star icon if seal not found
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<svg class="w-10 h-10 text-rich-gold group-hover:text-deep-teal transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
                      }
                    }}
                  />
                </div>
                <span className="font-heading text-xl font-bold text-navy-blue group-hover:text-deep-teal transition-colors duration-300">
                  Nu Al Andalusia
                </span>
              </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-navy-blue hover:text-deep-teal font-medium text-base transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-deep-teal transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Volunteer Login/Dashboard - Right side */}
          <div className="hidden lg:block z-10">
            {session ? (
              <Link
                href="/volunteer/dashboard"
                className="px-5 py-2 rounded-lg bg-deep-teal text-white font-semibold text-sm transition-all duration-300 hover:bg-teal-700 hover:shadow-md flex items-center space-x-2"
              >
                <LayoutDashboard className="w-4 h-4" />
                <span>Dashboard</span>
              </Link>
            ) : (
              <Link
                href="/volunteer/login"
                className="px-5 py-2 rounded-lg border-2 border-deep-teal text-deep-teal font-semibold text-sm transition-all duration-300 hover:bg-deep-teal hover:text-white hover:shadow-md"
              >
                Volunteer Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-navy-blue hover:text-deep-teal transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Menu drawer */}
            <div className="lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 bg-cream">
              <div className="container-custom py-6">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-navy-blue hover:text-deep-teal font-semibold text-lg transition-colors duration-300 py-2 border-b border-deep-teal/10 hover:border-deep-teal/30"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {session ? (
                    <Link
                      href="/volunteer/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-5 py-2.5 rounded-lg bg-deep-teal text-white font-semibold text-center transition-all duration-300 hover:bg-teal-700 hover:shadow-md mt-2 flex items-center justify-center space-x-2"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      <span>Dashboard</span>
                    </Link>
                  ) : (
                    <Link
                      href="/volunteer/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="px-5 py-2.5 rounded-lg border-2 border-deep-teal text-deep-teal font-semibold text-center transition-all duration-300 hover:bg-deep-teal hover:text-white hover:shadow-md mt-2"
                    >
                      Volunteer Login
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

