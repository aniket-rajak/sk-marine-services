"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Ship } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollPosition();
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-navy-900/95 backdrop-blur-lg shadow-lg shadow-navy-900/20"
          : "bg-transparent"
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Ship className="h-8 w-8 text-gold-500 group-hover:text-gold-400 transition-colors" />
            <span className="font-bold text-lg md:text-xl text-white hidden sm:block">
              {siteConfig.shortName}
            </span>
          </Link>

          <div className="hidden max-[1128px]:hidden min-[1129px]:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                  pathname === link.href
                    ? "text-gold-500 bg-gold-500/10"
                    : "text-navy-200 hover:text-white hover:bg-navy-800/50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden max-[1128px]:hidden min-[1129px]:flex items-center gap-3">
            <a href={`tel:${siteConfig.phone}`}>
              <Button variant="secondary" size="sm" icon={<Phone className="h-4 w-4" />}>
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="primary" size="sm">
                Get Quote
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="max-[1128px]:block min-[1129px]:hidden p-2 rounded-lg text-navy-200 hover:text-white hover:bg-navy-800/50 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="max-[1128px]:block min-[1129px]:hidden bg-navy-900/98 backdrop-blur-lg border-t border-navy-700 overflow-hidden"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium rounded-lg transition-all",
                    pathname === link.href
                      ? "text-gold-500 bg-gold-500/10"
                      : "text-navy-200 hover:text-white hover:bg-navy-800/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-navy-700">
                <a href={`tel:${siteConfig.phone}`} className="w-full">
                  <Button variant="secondary" size="md" className="w-full" icon={<Phone className="h-4 w-4" />}>
                    Call Now
                  </Button>
                </a>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="w-full">
                  <Button variant="primary" size="md" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
