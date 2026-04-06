import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-lg shadow-lg">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <span className={cn(
            "font-bold text-2xl tracking-tight",
            scrolled ? "text-slate-900" : "text-white"
          )}>
            BuildMaster
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-orange-500",
                scrolled ? "text-slate-600" : "text-white/90",
                location.pathname === link.href && (scrolled ? "text-orange-600" : "text-orange-400")
              )}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+1234567890"
            className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full font-medium hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20"
          >
            <Phone size={16} />
            <span>Call Now</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            scrolled ? "text-slate-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-slate-50",
                    location.pathname === link.href ? "text-orange-600" : "text-slate-600"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+1234567890"
                className="flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-xl font-bold mt-4 shadow-lg active:scale-95 transition-transform"
              >
                <Phone size={20} />
                <span>Call +1 234 567 890</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
