import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Heart, ArrowRight, Instagram, Linkedin, Twitter, Globe, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative bg-[#030712] text-white border-t border-accent/20 overflow-hidden">
      {/* Absolute Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      
      {/* Background Ambience Orbs */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8">
          
          {/* Section 1: Brand & Mission */}
          <div className="space-y-8">
            <div className="space-y-4">
              <img 
                src={siteConfig.brand.logoPath} 
                alt={siteConfig.brand.name} 
                className="h-16 w-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" 
              />
              <p className="text-sm text-white/50 leading-relaxed font-sans max-w-xs">
                {siteConfig.home.hero.description}
              </p>
            </div>
            <div className="pt-6 border-t border-white/5">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-2">Our Mission</p>
              <p className="text-xs text-white/40 leading-relaxed italic">
                "Dismantling the cycle of poverty through the delivery of premium, high-tier education to underserved brilliance."
              </p>
            </div>
          </div>

          {/* Section 2: Quick Navigation */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent/80 border-b border-accent/20 pb-4 inline-block">
              Foundation Map
            </h4>
            <nav className="flex flex-col gap-4">
              {[
                { to: "/", label: "Home Base" },
                { to: "/about", label: "Heritage & Vision" },
                { to: "/programs", label: "Our Programs" },
                { to: "/tree-volution", label: "Tree-volution Initiative" },
                { to: "/next-100", label: "Next 100 Initiative" },
                { to: "/impact", label: "Philanthropic Impact" },
                { to: "/blog", label: "Public Journal" },
              ].map((link) => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  className="text-sm text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-[1.5px] bg-accent/30 group-hover:w-3 group-hover:bg-accent transition-all" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Global Connect */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent/80 border-b border-accent/20 pb-4 inline-block">
              Global Connect
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <MapPin size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Headquarters</p>
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors leading-relaxed">
                    {siteConfig.brand.contact.address}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Mail size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Support Desk</p>
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                    {siteConfig.brand.contact.email}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent/50 transition-colors">
                  <Phone size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Direct Line</p>
                  <span className="text-xs text-white/60 group-hover:text-white transition-colors">
                    {siteConfig.brand.contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Philanthropic Core */}
          <div className="space-y-8">
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-accent/80 border-b border-accent/20 pb-4 inline-block">
              Philanthropic Core
            </h4>
            
            {/* QR Card Upgrade */}
            <div className="relative group p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-accent/40 transition-all duration-500 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-inner-glow overflow-hidden shrink-0 rotate-[-2deg] group-hover:rotate-0 transition-transform">
                  <img
                    src={siteConfig.brand.donate.qrPath}
                    alt="Donate QR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-[10px] font-bold text-white uppercase tracking-widest">Active Portal</p>
                  </div>
                  <Link to="/donate" className="text-xs font-bold text-accent flex items-center gap-2 group/btn">
                    Scan to Donate <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Pulse */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: siteConfig.brand.socials.instagram },
                { icon: Linkedin, href: siteConfig.brand.socials.linkedin },
                { icon: Twitter, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <p className="text-[10px] text-white/30 font-sans tracking-wide">
              © {new Date().getFullYear()} {siteConfig.brand.name}. All global rights reserved.
            </p>
            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-500/5 border border-emerald-500/10">
              <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Global Status: Online</span>
            </div>
          </div>
          
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <Link to="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-accent transition-colors">Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
