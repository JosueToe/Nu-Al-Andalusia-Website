import Link from "next/link";
import { Star, Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#vision", label: "Our Vision" },
    { href: "/#services", label: "Services" },
    { href: "/#community", label: "Community" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const essentialLinks = [
    { href: "/", label: "Home" },
    { href: "/news", label: "News & Updates" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container-custom py-4 md:py-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-1.5 mb-2">
              <Star className="w-4 h-4 text-rich-gold" fill="currentColor" />
              <span className="font-heading text-base font-bold text-white">Nu Al Andalusia</span>
            </div>
            <p className="text-gray-200 mb-2 text-xs">
              Honoring Heritage, Building Community
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-7 h-7 rounded-full bg-deep-teal flex items-center justify-center hover:bg-rich-gold transition-colors duration-300 text-white"
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Essential Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-2 text-white">Quick Links</h4>
            <ul className="space-y-1">
              {essentialLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-200 hover:text-rich-gold transition-colors duration-300 text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading text-sm font-semibold mb-2 text-white">Contact Info</h4>
            <ul className="space-y-1 text-gray-200">
              <li className="flex items-start space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-rich-gold mt-0.5 flex-shrink-0" />
                <span className="text-xs text-gray-200">Orlando, FL, USA</span>
              </li>
              <li className="flex items-start space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-rich-gold mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@nualandalusia.com"
                  className="text-xs text-gray-200 hover:text-rich-gold transition-colors duration-300"
                >
                  contact@nualandalusia.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="container-custom py-2">
          <div className="text-center">
            <p className="text-gray-200 text-xs">
              Copyright © 2026 Nu Al Andalusia - All Rights Reserved. Hosted and Created with ❤️ by the{" "}
              <a
                href="https://host-it.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-rich-gold hover:underline transition-all duration-300"
              >
                Host-IT Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

