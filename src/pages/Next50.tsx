import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  GraduationCap,
  BookOpen,
  Brain,
  BarChart3,
  Send,
  CheckCircle,
  FileText,
  ClipboardCheck,
  Users,
  Trophy,
  Sparkles,
  ArrowRight,
  Star,
  Atom,
  FlaskConical,
  Dna,
  Calculator,
  ChevronDown,
  Zap,
  Shield,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────── */
const selectionSteps = [
  {
    phase: "Phase 1",
    title: "Application",
    desc: "Submit your details, income proof, and academic information through our online form.",
    icon: FileText,
    gradient: "from-sky-500 to-blue-600",
    bg: "bg-sky-500/10",
    text: "text-sky-500",
  },
  {
    phase: "Phase 2",
    title: "Screening Test",
    desc: "A 2-hour MCQ exam covering Physics, Chemistry, and Maths / Biology.",
    icon: ClipboardCheck,
    gradient: "from-violet-500 to-purple-600",
    bg: "bg-violet-500/10",
    text: "text-violet-500",
  },
  {
    phase: "Phase 3",
    title: "Interview",
    desc: "A 15-minute interaction to assess your motivation and background.",
    icon: Users,
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    text: "text-amber-500",
  },
  {
    phase: "Phase 4",
    title: "Final 50",
    desc: "Public announcement of selected students followed by full onboarding.",
    icon: Trophy,
    gradient: "from-emerald-500 to-green-600",
    bg: "bg-emerald-500/10",
    text: "text-emerald-500",
  },
];

const benefits = [
  {
    icon: GraduationCap,
    title: "Live Coaching",
    desc: "Daily & weekly NEET / JEE classes by experienced faculty.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: BookOpen,
    title: "Study Materials",
    desc: "Notes, PDFs, PYQs, and full-length mock tests — all included.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Brain,
    title: "Mentorship",
    desc: "1 personal mentor per 10 students for individual guidance.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    desc: "Monthly tests and detailed performance analytics.",
    gradient: "from-emerald-500 to-green-600",
  },
];

const stats = [
  { value: "50", label: "Seats Available", suffix: "" },
  { value: "100", label: "Free of Cost", suffix: "%" },
  { value: "2", label: "Exam Tracks", suffix: "" },
  { value: "1:10", label: "Mentor Ratio", suffix: "" },
];

/* ─── Reusable animated section title ──────────────── */
function SectionLabel({ eyebrow, heading }: { eyebrow: string; heading: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref} className="text-center mb-16 md:mb-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-xs font-sans-body font-bold tracking-[0.3em] uppercase text-accent mb-4"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight"
      >
        {heading}
      </motion.h2>
    </div>
  );
}

/* ─── Stat Item ──────────────────────────────────────── */
function StatItem({ stat, index }: { stat: any, index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="text-center px-4"
    >
      <p className="text-3xl md:text-4xl font-serif font-bold text-accent-foreground">
        {stat.value}<span className="text-2xl">{stat.suffix}</span>
      </p>
      <p className="text-xs font-sans-body font-bold uppercase tracking-widest text-accent-foreground/70 mt-1">
        {stat.label}
      </p>
    </motion.div>
  );
}

/* ─── Main Component ────────────────────────────────── */
const Next50 = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Parallax for hero */
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* Web3Forms submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "9f28a4c2-5366-4a54-88b4-82c74128d40e");
    formData.append("subject", "New Ilmeza Next 50 Application");
    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        toast({ title: "Application submitted successfully", description: "We will review your application and get back to you soon!" });
        (e.target as HTMLFormElement).reset();
      } else {
        toast({ title: "Submission Error", description: data.message || "Something went wrong. Please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Connection Error", description: "Check your internet connection and try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="pt-20">

      {/* ══════════════════════════════════════════════════
          1. HERO — PARALLAX + PARTICLE GRID
      ══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden">

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(42 65% 55%) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />

        {/* Glowing orbs — parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 left-16 w-80 h-80 bg-accent/25 rounded-full blur-[100px]" />
          <div className="absolute bottom-24 right-16 w-[28rem] h-[28rem] bg-indigo-500/15 rounded-full blur-[130px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[200px]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 container mx-auto px-4 text-center max-w-5xl">

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center mb-10"
          >
            {[
              { label: "Merit-Based", icon: Star },
              { label: "Need-Based", icon: Zap },
              { label: "Fully Free", icon: Sparkles },
            ].map(({ label, icon: Icon }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 py-1.5 px-5 rounded-full bg-accent/10 border border-accent/25 text-accent text-xs font-bold tracking-[0.15em] uppercase backdrop-blur-sm"
              >
                <Icon className="w-3 h-3" /> {label}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-serif font-bold text-primary-foreground leading-[1.05] tracking-tight">
              Ilmeza{" "}
              <span className="text-gradient-gold italic">Next 50</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-8 text-xl md:text-2xl text-primary-foreground/65 font-sans-body leading-relaxed max-w-2xl mx-auto font-light"
          >
            Free NEET & JEE coaching for India's most deserving students —
            selected on <em className="text-primary-foreground/90 not-italic font-medium">merit and mindset</em>, not background.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 text-sm md:text-base text-accent font-sans-body font-semibold tracking-[0.2em] uppercase"
          >
            50 Students · Next Generation · Zero Limits
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-14 flex flex-col sm:flex-row gap-5 justify-center"
          >
            <a href="#apply">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-lg font-bold px-12 py-8 rounded-full shadow-2xl shadow-accent/25 transition-all duration-300 hover:scale-105 active:scale-[0.97] group">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#about">
              <Button
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-white/10 bg-white/5 font-sans-body text-lg px-12 py-8 rounded-full backdrop-blur-sm transition-all duration-300 hover:border-primary-foreground/40"
              >
                Learn More
              </Button>
            </a>
          </motion.div>

          {/* Student Login CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-6 flex justify-center"
          >
            <Link
              to="/next-50/dashboard"
              className="inline-flex items-center gap-2 text-primary-foreground/40 hover:text-accent text-sm font-sans-body transition-colors duration-300 group"
            >
              <Shield className="w-4 h-4" />
              Already Selected? Access Student Dashboard
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2 text-primary-foreground/30"
          >
            <span className="text-xs tracking-widest uppercase font-sans-body">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════ */}
      <section className="bg-accent py-10 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(0,0,0,0.1) 80px, rgba(0,0,0,0.1) 81px)" }} />
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-black/10">
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ABOUT THE PROGRAM
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-28 md:py-36 relative">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <SectionLabel
            eyebrow="About the Program"
            heading={<>What is Ilmeza <span className="italic text-accent">Next 50</span>?</>}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "What It Is",
                body: "A fully-funded coaching initiative that handpicks 50 exceptional students from underserved backgrounds and provides free, end-to-end NEET & JEE preparation.",
                icon: Sparkles,
                accent: "from-amber-400 to-orange-500",
              },
              {
                title: "Who It's For",
                body: "Students with the academic drive and determination to succeed but constrained by finances — regardless of caste, religion, or geography.",
                icon: Users,
                accent: "from-blue-400 to-indigo-500",
              },
              {
                title: "Why It Exists",
                body: "Because talent is universal, but opportunity is not. Next 50 exists to bridge that gap — ensuring no dream dies because of financial constraints.",
                icon: Trophy,
                accent: "from-emerald-400 to-green-500",
              },
            ].map((item, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={item.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="group glass-card p-10 rounded-[2rem] hover:shadow-2xl hover:shadow-accent/8 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-7 shadow-lg text-white group-hover:scale-110 transition-transform duration-500`}>
                    <item.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light flex-1">{item.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. SELECTION PROCESS — CONNECTED STEPPER
      ══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-primary relative overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, hsl(42 65% 55%) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-sans-body font-bold tracking-[0.3em] uppercase text-accent/80 mb-4"
            >
              How It Works
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground"
            >
              Selection Process
            </motion.h2>
          </div>

          {/* Stepper */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-[3.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent/60 to-accent/20" />

            {selectionSteps.map((step, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-40px" });
              return (
                <motion.div
                  key={step.phase}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className={`relative w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-2xl mb-6 z-10 flex-shrink-0`}>
                    <step.icon className="w-7 h-7" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                  </div>
                  <div className={`inline-block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${step.bg} ${step.text} mb-3`}>
                    {step.phase}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary-foreground mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/55 font-light text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. WHAT STUDENTS GET
      ══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <SectionLabel eyebrow="Program Benefits" heading="What Students Get" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {benefits.map((item, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={item.title}
                  ref={ref}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="group relative glass-card p-8 rounded-[2rem] text-center overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-accent/8 transition-all duration-500"
                >
                  {/* Hover glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-7 text-white shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                    <item.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. COURSE OVERVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 bg-cream/60 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl relative z-10">
          <SectionLabel eyebrow="Curriculum" heading="Course Overview" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "NEET Track",
                subtitle: "Medical Entrance Preparation",
                icon: Dna,
                headerGrad: "from-emerald-500 to-teal-600",
                subjects: [
                  { icon: Atom, label: "Physics", detail: "Mechanics to Modern Physics" },
                  { icon: FlaskConical, label: "Chemistry", detail: "Physical, Organic & Inorganic" },
                  { icon: Dna, label: "Biology", detail: "Botany, Zoology & Physiology" },
                ],
                footer: "NCERT-based + PYQs + Full-length Mocks",
                footerColor: "text-emerald-600",
                checkColor: "text-emerald-500",
              },
              {
                title: "JEE Track",
                subtitle: "Engineering Entrance Preparation",
                icon: Calculator,
                headerGrad: "from-blue-500 to-indigo-600",
                subjects: [
                  { icon: Atom, label: "Physics", detail: "Mechanics, Electrodynamics & Optics" },
                  { icon: FlaskConical, label: "Chemistry", detail: "Physical, Organic & Inorganic" },
                  { icon: Calculator, label: "Mathematics", detail: "Calculus, Algebra & Coordinate Geometry" },
                ],
                footer: "Concept + Problem-solving + Mock Tests",
                footerColor: "text-blue-600",
                checkColor: "text-blue-500",
              },
            ].map((track, ti) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });
              return (
                <motion.div
                  key={track.title}
                  ref={ref}
                  initial={{ opacity: 0, x: ti === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.65, delay: ti * 0.15 }}
                  className="glass-card rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
                >
                  {/* Header */}
                  <div className={`bg-gradient-to-br ${track.headerGrad} p-8 flex items-center gap-4`}>
                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                      <track.icon className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white">{track.title}</h3>
                      <p className="text-white/70 text-sm font-light">{track.subtitle}</p>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-8 space-y-5">
                    {track.subjects.map((sub) => (
                      <div key={sub.label} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:text-accent transition-colors duration-300 text-muted-foreground">
                          <sub.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-sm">{sub.label}</p>
                          <p className="text-muted-foreground text-sm font-light">{sub.detail}</p>
                        </div>
                      </div>
                    ))}
                    <div className={`pt-4 mt-2 border-t border-border/30 flex items-center gap-2 text-sm font-medium ${track.footerColor}`}>
                      <CheckCircle className={`w-4 h-4 ${track.checkColor}`} />
                      {track.footer}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. APPLICATION FORM
      ══════════════════════════════════════════════════ */}
      <section id="apply" className="py-28 md:py-36 relative">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl relative z-10">
          <SectionLabel
            eyebrow="Start Your Journey"
            heading={<>Apply for <span className="italic text-accent">Next 50</span></>}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground font-light -mt-10 mb-16 max-w-xl mx-auto"
          >
            Fill in the details below. All required fields are marked with *.
            Selected candidates will be contacted via email or phone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="p-8 md:p-14 glass-card rounded-[2.5rem] shadow-2xl shadow-primary/5"
          >
            <form onSubmit={handleSubmit} className="space-y-10">

              {/* Step 1 — Basic Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <span className="w-9 h-9 rounded-xl bg-accent text-accent-foreground text-sm font-bold font-sans-body flex items-center justify-center shadow">1</span>
                  <h3 className="text-xl font-serif font-bold text-foreground">Basic Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "full_name", label: "Full Name *", placeholder: "Enter your full name", type: "text" },
                    { name: "phone", label: "Phone Number *", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                    { name: "email", label: "Email *", placeholder: "you@example.com", type: "email" },
                    { name: "father_name", label: "Father's Name *", placeholder: "Father's full name", type: "text" },
                  ].map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">{field.label}</label>
                      <Input name={field.name} type={field.type} placeholder={field.placeholder} required className="bg-white/50 border-border/50 h-14 rounded-xl focus-visible:ring-accent" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2 — Category & Income */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <span className="w-9 h-9 rounded-xl bg-accent text-accent-foreground text-sm font-bold font-sans-body flex items-center justify-center shadow">2</span>
                  <h3 className="text-xl font-serif font-bold text-foreground">Category & Income</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Category *</label>
                    <select name="category" required defaultValue="" className="flex h-14 w-full rounded-xl border border-border/50 bg-white/50 px-4 text-sm font-sans-body text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      <option value="" disabled>Select category</option>
                      {["General", "OBC", "SC", "ST"].map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Annual Family Income *</label>
                    <select name="family_income" required defaultValue="" className="flex h-14 w-full rounded-xl border border-border/50 bg-white/50 px-4 text-sm font-sans-body text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      <option value="" disabled>Select income range</option>
                      {["Less than ₹1 lakh", "₹1 lakh – ₹2.5 lakh", "₹2.5 lakh – ₹5 lakh", "More than ₹5 lakh"].map(v => <option key={v} value={v}>{v}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3 — Academic Target */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <span className="w-9 h-9 rounded-xl bg-accent text-accent-foreground text-sm font-bold font-sans-body flex items-center justify-center shadow">3</span>
                  <h3 className="text-xl font-serif font-bold text-foreground">Academic Target</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Target Year *</label>
                    <select name="target_year" required defaultValue="" className="flex h-14 w-full rounded-xl border border-border/50 bg-white/50 px-4 text-sm font-sans-body text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      <option value="" disabled>Select year</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">Exam *</label>
                    <select name="exam" required defaultValue="" className="flex h-14 w-full rounded-xl border border-border/50 bg-white/50 px-4 text-sm font-sans-body text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">
                      <option value="" disabled>Select exam</option>
                      <option value="JEE">JEE</option>
                      <option value="NEET">NEET</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-16 rounded-xl font-bold text-lg shadow-xl shadow-accent/15 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? "Submitting…" : "Submit Application"}
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          7. FINAL CTA
      ══════════════════════════════════════════════════ */}
      <section className="py-28 md:py-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, hsl(42 65% 55%) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-accent/15 border border-accent/25 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-10 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" /> Limited Seats — Applications Open
            </span>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-8 leading-[1.1]">
              Only <span className="text-gradient-gold italic">50</span> Students<br className="hidden md:block" /> Will Be Selected.
            </h2>

            <p className="text-xl text-primary-foreground/60 mb-14 font-light max-w-2xl mx-auto leading-relaxed">
              Don't let this opportunity pass. If you have the drive, we have the resources.
              Apply today and change your tomorrow.
            </p>

            <a href="#apply">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-xl font-bold px-16 py-9 rounded-full shadow-2xl shadow-accent/30 transition-all duration-300 hover:scale-105 active:scale-[0.97] group">
                Apply Now
                <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Next50;
