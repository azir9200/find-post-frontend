"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { PenTool, Home, BookOpen, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", icon: <Home size={16} /> },
    { href: "/post", label: "All Post", icon: <PenTool size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cyan-300 border-b border-cyan-600">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-cyan-600"
        >
          <BookOpen size={24} className="text-black" />
          Dev<span className="text-cyan-800">Blog</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                size="sm"
                className={`flex items-center gap-2 ${
                  pathname === link.href
                    ? "bg-cyan-600 text-white "
                    : "text-cyan-600/80"
                }`}
              >
                {link.icon} {link.label}
              </Button>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-cyan-600 p-2 rounded-md hover:bg-cyan-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cyan-50 px-6 py-4 flex flex-col gap-3 border-t border-cyan-200">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <Button
                variant={pathname === link.href ? "default" : "ghost"}
                size="sm"
                className={`flex items-center gap-2 w-full justify-start ${
                  pathname === link.href
                    ? "bg-cyan-600 text-white"
                    : "text-cyan-600/80"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.icon} {link.label}
              </Button>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};
