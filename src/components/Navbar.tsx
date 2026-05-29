import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/health-care", label: "Health Care" },
  { to: "/tree-volution", label: "Tree-volution" },
  { to: "/next-100", label: "Next 100" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${open ? "bg-background" : "bg-transparent py-4"
      }`}>
      <nav className={`container mx-auto px-4 lg:px-8 transition-all duration-500 ${!open ? "glass-card h-20 rounded-2xl" : "h-20"
        } flex items-center justify-between`}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white p-1.5 rounded-xl shadow-sm border border-emerald-50/50 group-hover:border-accent/30 transition-all duration-500">
            <img src={siteConfig.brand.logoPath} alt={siteConfig.brand.name} className="h-10 w-auto transition-transform duration-550 group-hover:scale-105" />
          </div>
          <span className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tighter group-hover:text-gold transition-colors duration-500 flex flex-col md:flex-row md:items-baseline md:gap-2 leading-none">
            <span>Ilmeza</span>
            <span className="text-accent italic text-xl md:text-2xl brightness-90">Foundation</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative py-2 text-[14px] font-semibold tracking-wide font-sans-body transition-all duration-300 group ${
                  isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent transform origin-left transition-transform duration-300 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
          <Link to="/donate">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-sm font-bold px-8 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 active:scale-95">
              Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border/50 animate-in slide-in-from-top-2">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 transition-colors ${location.pathname === link.to ? "text-accent" : "text-foreground/70"
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)}>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body font-semibold rounded-md mt-2">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
