import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { Sprout, Users, HeartPulse, Shield, ArrowRight, Check } from "lucide-react";

export default function TreeVolutionShowcase() {
  const outcomes = [
    { label: "10,000 Trees", icon: Sprout, desc: "Restoring native species in critical ecological zones." },
    { label: "Stronger Communities", icon: Users, desc: "Empowering locals as paid tree guardians." },
    { label: "Youth-Led Action", icon: Sprout, desc: "Engaging students as local environmental leaders." },
    { label: "Long-Term Impact", icon: HeartPulse, desc: "Sustained ecological carbon-capture and soil health." },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-emerald-700/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-36 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn direction="right">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                <Shield className="w-3.5 h-3.5 text-accent" /> Flagship Initiative
              </span>
              <p className="text-sm font-sans-body font-bold tracking-wider uppercase text-accent mb-2">
                Powering Tree-volution
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary leading-tight">
                Turning Ideas <br />
                <span className="text-emerald-700 italic">Into Impact</span>
              </h2>
            </FadeIn>

            <FadeIn direction="right" delay={0.15}>
              <p className="text-lg md:text-xl font-medium text-foreground/80 leading-relaxed font-sans-body">
                Tree-volution is a nationwide environmental movement initiated by <span className="font-bold text-primary">Inspire India Talks</span> and proudly powered by <span className="font-bold text-emerald-800">Ilmeza Foundation</span>.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed font-light font-sans-body">
                Ilmeza Foundation serves as the institutional backbone of Tree-volution, providing governance, financial transparency, operational support, and community partnerships that transform every <span className="font-bold text-emerald-800">₹99</span> contribution into a living, growing tree.
              </p>
            </FadeIn>

            {/* Core Outcomes List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {outcomes.map((item, idx) => (
                <FadeIn key={item.label} direction="up" delay={idx * 0.1}>
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 shrink-0 shadow-sm border border-emerald-100 group-hover:bg-emerald-700 group-hover:text-white transition-all duration-300">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-foreground text-lg group-hover:text-emerald-700 transition-colors duration-300">
                        {item.label}
                      </h4>
                      <p className="text-sm text-muted-foreground font-light font-sans-body mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CTA Buttons */}
            <FadeIn direction="right" delay={0.4}>
              <div className="pt-6 flex flex-col sm:flex-row gap-5">
                <Link to="/tree-volution">
                  <Button className="bg-emerald-700 text-white hover:bg-emerald-800 font-sans-body text-base font-bold px-8 py-7 rounded-full shadow-lg shadow-emerald-700/10 transition-all duration-300 hover:scale-105 group w-full sm:w-auto">
                    Visit Tree-volution
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" className="border-emerald-700/20 text-emerald-850 hover:bg-emerald-50 bg-transparent font-sans-body text-base px-8 py-7 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                    Learn About Ilmeza Foundation
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Visual Component */}
          <div className="lg:col-span-5 relative">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                {/* Background gold decorative frame */}
                <div className="absolute -inset-4 rounded-3xl border border-accent/20 translate-x-2 translate-y-2 -z-10 hidden sm:block" />

                {/* Main Premium Card */}
                <div className="overflow-hidden rounded-[2rem] shadow-2xl relative bg-white border border-emerald-100">
                  <img
                    src="https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070"
                    alt="Lush green canopy representing Tree-volution"
                    className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                  />
                  
                  {/* Backdrop Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* ₹99 Badge in Top-Right */}
                  <div className="absolute top-6 right-6 py-2 px-5 rounded-full bg-accent text-accent-foreground font-sans-body font-bold text-sm shadow-xl flex items-center gap-2 border border-accent/30 animate-bounce">
                    <span className="w-2 h-2 rounded-full bg-emerald-800 animate-ping" />
                    ₹99 = 1 Tree
                  </div>

                  {/* Impact details positioned over bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-accent mb-2">
                      Ilmeza Governance Backbone
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">
                      100% Transparent Ecological Progress
                    </h3>
                    <p className="text-sm font-sans-body text-white/80 font-light leading-relaxed">
                      Every contribution maps to a specific GPS coordinate and a local guardian, ensuring real, verifiable, and sustainable growth.
                    </p>
                  </div>
                </div>

                {/* Overlapping Floating Metric Card */}
                <div className="absolute -bottom-8 -left-8 glass-card p-6 rounded-2xl shadow-xl border-white/60 max-w-[240px] hidden sm:block transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-700 text-white flex items-center justify-center shadow-md">
                      <Sprout className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-sans-body text-muted-foreground font-bold tracking-widest uppercase">Target Goal</p>
                      <p className="text-lg font-serif font-bold text-foreground">10,000 Saplings</p>
                    </div>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
