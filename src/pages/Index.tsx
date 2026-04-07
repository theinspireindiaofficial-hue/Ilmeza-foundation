import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/FadeIn";
import { useCountUp } from "@/hooks/useCountUp";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BookOpen, Users, Heart, Stethoscope, Home, AlertTriangle, ArrowRight, CheckCircle } from "lucide-react";
import InteractiveImage from "@/components/InteractiveImage";
import { siteConfig } from "@/data/siteConfig";

const focusAreas = [
  { icon: BookOpen, title: "Education & Learning Support", desc: "Providing access to quality education and holistic learning for underprivileged students." },
  { icon: Users, title: "Youth Skill Development", desc: "Equipping young minds with job-ready skills and career mentoring for a better future." },
  { icon: Heart, title: "Women Empowerment", desc: "Enabling financial independence and social dignity for women through skill training." },
  { icon: Stethoscope, title: "Healthcare & Nutrition", desc: "Ensuring basic health services and nutritional support reach the last person in line." },
  { icon: Home, title: "Community Development", desc: "Building resilient and self-sufficient communities through structural interventions." },
  { icon: AlertTriangle, title: "Disaster Relief & Aid", desc: "Standing with communities in times of crisis with immediate relief and rehabilitation." },
];

const stats = siteConfig.home.stats;

function StatCounter({ label, value }: { label: string; value: number }) {
  const { ref, isVisible } = useScrollAnimation(0.3);
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div ref={ref} className="text-center p-8 glass-card rounded-2xl transform transition-all duration-500 hover:-translate-y-2 group">
      <p className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-500">{count.toLocaleString()}+</p>
      <p className="text-xs font-sans-body text-foreground font-bold tracking-widest uppercase">{label}</p>
    </div>
  );
}

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroSlides = siteConfig.home.hero.slides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroSlides.length);
    }, 6000); // Slightly longer for better readability
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-[4000ms] ease-in-out ${index === currentImageIndex ? "opacity-40 scale-110 translate-y-2" : "opacity-0 scale-100"
              }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy-light opacity-80" />

        <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
          <div key={currentImageIndex} className="transition-all duration-1000 ease-in-out transform">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
              <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold tracking-widest uppercase mb-6">
                Founded on Compassion
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground leading-[1.1] tracking-tight">
                {heroSlides[currentImageIndex].title}<br />
                <span className="text-gradient-gold">{heroSlides[currentImageIndex].highlight}</span>
              </h1>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-both">
              <p className="mt-8 text-xl md:text-2xl text-primary-foreground/70 font-sans-body leading-relaxed max-w-2xl mx-auto font-light transition-all duration-700">
                {heroSlides[currentImageIndex].description}
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
              <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/next-50">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-lg font-bold px-10 py-8 rounded-full shadow-2xl shadow-accent/20 transition-all duration-300 hover:scale-105">
                    🎓 Register for Next 50
                  </Button>
                </Link>
                <Link to="/get-involved#volunteer">
                  <Button variant="outline" className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10 bg-transparent font-sans-body text-lg px-10 py-8 rounded-full backdrop-blur-sm transition-all duration-300">
                    Join Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 md:py-32 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-4">Who We Are</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-8">
                  {siteConfig.home.whoWeAre.title}
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-foreground font-light leading-relaxed">
                    {siteConfig.home.whoWeAre.description1}
                  </p>
                  <p className="text-lg text-foreground font-light leading-relaxed">
                    {siteConfig.home.whoWeAre.description2}
                  </p>
                </div>
                <div className="mt-10 flex gap-4">
                  <Link to="/about" className="group text-foreground font-bold flex items-center gap-2">
                    Our Full Story <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <InteractiveImage
                images={siteConfig.home.whoWeAre.images}
                alt={siteConfig.home.whoWeAre.title}
                className="aspect-[4/5]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 md:py-32 bg-cream/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent mb-4">Our Focus</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">Areas of Impact</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.1}>
                <div className="group glass-card p-10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-accent/5 hover:-translate-y-2">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 transition-colors group-hover:bg-accent group-hover:text-accent-foreground text-accent">
                    <area.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{area.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-24 md:py-40 relative">
        <div className="absolute inset-0 bg-primary skew-y-3 origin-right scale-y-110 -z-10" />
        <div className="container mx-auto px-4 lg:px-8">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="text-sm font-sans-body font-bold tracking-widest uppercase text-accent/80 mb-4">Impact Snapshot</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground">Numbers That Inspire</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-40 text-center relative">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <FadeIn>
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-accent/5 text-accent text-sm font-bold mb-8">
              <CheckCircle className="w-4 h-4" /> Together, We Can
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8">
              Transform <span className="italic">Lives.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-light italic">
              "Your support can create lasting change. Join us as a volunteer, donor, mentor, or partner and become part of India’s social transformation journey."
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/get-involved#volunteer">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-sans-body text-lg font-bold px-12 py-8 rounded-full shadow-xl transition-all duration-300 hover:scale-105">
                  Become a Volunteer
                </Button>
              </Link>
              <Link to="/get-involved#partner">
                <Button variant="outline" className="border-primary/20 text-primary hover:bg-primary/5 bg-transparent font-sans-body text-lg font-bold px-12 py-8 rounded-full transition-all duration-300 hover:scale-105">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
};

export default Index;
