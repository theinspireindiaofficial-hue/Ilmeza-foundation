import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  LogOut,
  Video,
  ExternalLink,
  Play,
  BookOpen,
  FileText,
  Download,
  Bell,
  ChevronRight,
  Shield,
  X,
  Atom,
  FlaskConical,
  Calculator,
  Dna,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  Bookmark,
  BookmarkPlus,
  Flame,
  LayoutDashboard,
  GraduationCap,
  User,
  ClipboardEdit
} from "lucide-react";
import {
  DASHBOARD_PASSWORD,
  LIVE_CLASS,
  RECORDED_LECTURES,
  STUDY_MATERIALS,
  ANNOUNCEMENTS,
  ASSESSMENTS,
  type Lecture,
  type StudyMaterial,
  type Assessment
} from "@/data/dashboardData";
import { siteConfig } from "@/data/siteConfig";

/* ─── Local Storage Hook for Gamification ───────────── */
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn(error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.warn(error);
    }
  };
  return [storedValue, setValue] as const;
}

/* ─── Spotlight Card (Spatial UI) ───────────────────── */
function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`spotlight-card ${className}`}
      style={{
        "--x": `${position.x}px`,
        "--y": `${position.y}px`,
      } as React.CSSProperties}
    >
      <div className="inner-glow" />
      {/* Dynamic spotlight layer injected via CSS ::before */}
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ─── Constants & Maps ────────────────────────────── */
const iconMap: Record<string, React.ElementType> = {
  Atom, FlaskConical, Calculator, Dna,
};

const typeBadgeColors: Record<string, string> = {
  PDF: "bg-rose-500/10 text-rose-400 border-rose-500/20",
  Notes: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  PYQ: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Formula Sheet": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  DPP: "bg-violet-500/10 text-violet-400 border-violet-500/20",
};

const subjectColors: Record<string, string> = {
  Physics: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Chemistry: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Maths: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Biology: "bg-rose-500/10 text-rose-400 border-rose-500/20",
};

/* ─── Premium Deep Royal Background ───────────────────── */
function RoyalBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base Dark */}
      <div className="absolute inset-0 bg-[#030712]" />
      
      {/* Slow Moving Abstract Orbs */}
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-amber-500/5 rounded-full blur-[120px]"
      />
      
      <motion.div
        animate={{ x: [0, -150, 50, 0], y: [0, 50, -150, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-blue-900/10 rounded-full blur-[100px]"
      />

      <motion.div
        animate={{ x: [0, 50, -100, 0], y: [0, 150, -50, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-yellow-600/5 rounded-full blur-[120px]"
      />

      {/* Floating Golden Sparks */}
      <div className="absolute inset-0">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: "110vh",
              x: `${Math.random() * 100}vw`,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{
              y: "-10vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 15,
              ease: "linear"
            }}
            className="absolute w-1 h-1 bg-amber-200 rounded-full shadow-[0_0_12px_rgba(253,230,138,0.8)]"
          />
        ))}
      </div>

      {/* Noise Texture layer on top of background but beneath UI */}
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   ACCESS GATE
   ═══════════════════════════════════════════════════ */
function AccessGate({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecking, setIsChecking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    setError(false);
    setTimeout(() => {
      if (password === DASHBOARD_PASSWORD && name.trim().length > 0) {
        sessionStorage.setItem("n50_auth", "true");
        sessionStorage.setItem("n50_name", name.trim());
        onSuccess();
      } else {
        setError(true);
        if (password !== DASHBOARD_PASSWORD) setPassword("");
        inputRef.current?.focus();
      }
      setIsChecking(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center px-4 relative overflow-hidden">
      <RoyalBackground />

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
        className="relative z-10 w-full max-w-[420px]"
      >
        <div className="text-center mb-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 150, delay: 0.2 }}
            className="group relative inline-flex items-center justify-center w-24 h-24 mb-6"
          >
            {/* Animated rings around shield */}
            <div className="absolute inset-0 rounded-3xl border border-amber-500/20 group-hover:scale-110 transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 rounded-3xl border border-amber-500/10 scale-110 group-hover:scale-125 transition-transform duration-700 ease-out delay-75" />
            
            <div className="relative w-full h-full rounded-[20px] bg-white border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.15)] overflow-hidden p-2">
              <img src={siteConfig.brand.logoPath} alt="Ilmeza Logo" className="w-[85%] h-[85%] object-contain" />
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-3"
          >
            Ilmeza <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 bg-clip-text text-transparent italic drop-shadow-sm">Next 50</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-amber-500/60 font-sans text-xs tracking-[0.3em] uppercase font-bold"
          >
            Exclusive Access Portal
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="relative rounded-[32px] p-[1px] overflow-hidden"
        >
          {/* Gold edge highlight */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-500/30 via-white/5 to-transparent rounded-[32px]" />
          
          <div className="relative bg-[#0A0F1C]/80 backdrop-blur-3xl rounded-[31px] p-8 md:p-10 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40 group-focus-within:text-amber-400 transition-colors duration-300" />
                <input
                  ref={inputRef}
                  type="text"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setError(false); }}
                  placeholder="Enter your name"
                  className="w-full h-14 pl-12 pr-4 bg-black/40 border border-white/5 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 focus:bg-black/60 transition-all duration-300 font-sans text-[15px] shadow-inner"
                />
              </div>

              <div className="space-y-2 relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-amber-500/40 group-focus-within:text-amber-400 transition-colors duration-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  placeholder="Enter secure workspace key"
                  className="w-full h-14 pl-12 pr-12 bg-black/40 border border-white/5 rounded-2xl text-white placeholder:text-white/20 focus:outline-none focus:border-amber-500/40 focus:bg-black/60 transition-all duration-300 font-sans text-[15px] shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -5, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, scale: 0.95, height: 0 }}
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20"
                  >
                    <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm font-sans font-medium text-center">Please enter a valid password.</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={isChecking || !password}
                className="group relative w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-bold font-sans text-[15px] tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 overflow-hidden shadow-[0_0_30px_rgba(245,158,11,0.2)] hover:shadow-[0_0_40px_rgba(245,158,11,0.4)]"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                
                <span className="relative z-10 flex items-center gap-2">
                  {isChecking ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />
                  ) : (
                    <>Unlock Vault <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </span>
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   VIDEO PLAYER MODAL
   ═══════════════════════════════════════════════════ */
function VideoModal({ lecture, onClose, markWatched }: { lecture: Lecture; onClose: () => void; markWatched: (id: string) => void }) {
  useEffect(() => {
    markWatched(lecture.id); // Mark watched upon opening
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [lecture.id, markWatched, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
      animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8 bg-black/60"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative z-10 w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="glass-panel p-2 md:p-4 border border-white/10 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] mb-4 border border-white/[0.05]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <Video className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-white font-serif font-bold text-lg md:text-xl truncate">{lecture.title}</h3>
                <p className="text-white/40 text-xs font-sans tracking-wide">{lecture.duration} · High Definition</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-white/60 hover:text-white transition-all hover:rotate-90"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/5" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${lecture.youtubeId}?autoplay=1&modestbranding=1&rel=0`}
              title={lecture.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN DASHBOARD ENGINE
   ═══════════════════════════════════════════════════ */
function Dashboard({ onLogout }: { onLogout: () => void }) {
  const [watchedLectures, setWatchedLectures] = useLocalStorage<string[]>("n50_watched", []);
  const [savedMaterials, setSavedMaterials] = useLocalStorage<string[]>("n50_saved", []);
  const [activeSubject, setActiveSubject] = useState(0);
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);

  const toggleMaterial = (id: string, e: React.MouseEvent) => {
    e.preventDefault(); // Stop link behavior
    setSavedMaterials(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const markWatched = (id: string) => {
    setWatchedLectures(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  // Calculate generic progress based on total lectures available
  const totalLectures = RECORDED_LECTURES.reduce((acc, subj) => acc + subj.lectures.length, 0);
  const progressPercent = totalLectures === 0 ? 0 : Math.round((watchedLectures.length / totalLectures) * 100);

  const dateStr = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" });
  const studentName = sessionStorage.getItem("n50_name") || "Scholar";

  return (
    <div className="min-h-screen dashboard-gradient relative">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay fixed" />
      
      {/* Spatial Orbs */}
      <div className="fixed top-0 left-1/4 w-[1000px] h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none transform -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none transform translate-y-1/3" />

      {/* ── Top Floating Navigation ── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 pointer-events-none">
        <div className="glass-panel p-3 flex items-center justify-between pointer-events-auto rounded-[28px]">
          <div className="flex items-center gap-3 pl-2">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-inner p-1 overflow-hidden">
              <img src={siteConfig.brand.logoPath} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-white text-[15px] leading-tight">
                Ilmeza <span className="text-gradient-gold italic">Next 50</span>
              </span>
              <span className="text-white/40 text-[10px] font-sans uppercase tracking-widest leading-tight">Student Portal</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-4 px-4 py-2 border-r border-white/10 mr-1">
              <span className="text-white/50 text-xs font-sans tracking-wide">{dateStr}</span>
              <div className="flex items-center gap-2 text-xs font-sans font-medium">
                <Flame className="w-4 h-4 text-amber-500" />
                <span className="text-amber-500 line-clamp-1">{watchedLectures.length} Lessons done</span>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 text-white/70 hover:text-white text-xs font-sans font-medium transition-all duration-300"
            >
              <LogOut className="w-3.5 h-3.5" />
              Exit Workspace
            </button>
          </div>
        </div>
      </nav>

      {/* ── Dashboard Bento Grid ── */}
      <div className="relative z-10 pt-36 pb-20 px-4 md:px-8 max-w-[1400px] mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6"
        >
          {/* 1. Hero Welcome Card (Spans 8 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-8">
            <SpotlightCard className="h-full p-8 md:p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold font-sans tracking-widest uppercase mb-6 self-start">
                <LayoutDashboard className="w-3.5 h-3.5" /> Welcome, {studentName}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-[1.1]">
                Focus on your <br/>
                <span className="text-gradient-gold italic">next milestone.</span>
              </h1>
              <p className="text-white/40 font-sans md:text-lg max-w-xl">
                The Next50 program is designed for extreme focus. Build your streak, complete your lectures, and review your notes. 
              </p>
            </SpotlightCard>
          </motion.div>

          {/* 2. Gamification / Progress Card (Spans 4 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-4">
            <SpotlightCard className="h-full p-8 bg-gradient-to-br from-white/[0.04] to-white/[0.01]">
              <h3 className="text-white font-serif font-bold text-xl mb-6">Your Progress</h3>
              
              <div className="flex items-center gap-6 mb-8 mt-2">
                <div className="relative w-24 h-24">
                  {/* Progress Ring */}
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" className="stroke-white/10" strokeWidth="8" fill="none" />
                    <circle 
                      cx="50" cy="50" r="40" 
                      className="stroke-accent transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
                      strokeWidth="8" fill="none" 
                      strokeDasharray="251.2" 
                      strokeDashoffset={251.2 - (251.2 * progressPercent) / 100} 
                      strokeLinecap="round" 
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-2xl font-bold font-sans text-white leading-none">{progressPercent}%</span>
                  </div>
                </div>
                <div>
                  <p className="text-white font-sans font-medium text-lg">{watchedLectures.length} / {totalLectures}</p>
                  <p className="text-white/40 text-xs font-sans mt-1 leading-snug">Total masterclasses<br/>completed natively</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <Bookmark className="w-5 h-5 text-blue-400 mb-2" />
                  <p className="text-2xl font-bold text-white font-sans">{savedMaterials.length}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Saved files</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.05]">
                  <GraduationCap className="w-5 h-5 text-emerald-400 mb-2" />
                  <p className="text-2xl font-bold text-white font-sans text-emerald-400">Top 10%</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">Cohort tier</p>
                </div>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 3. Live Class Mega Card (Spans 12 cols completely) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-12">
            <div className="relative p-8 md:p-10 rounded-[32px] overflow-hidden border border-white/[0.08] bg-[#0c1322]">
              {/* Inner animated mesh for live card */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-blue-500/5 to-transparent animate-shimmer" />
              <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    {LIVE_CLASS.isLive ? (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30">
                        <span className="relative flex h-2.5 w-2.5 ml-1">
                          <span className="animate-pulse-live absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                        </span>
                        <span className="text-emerald-400 text-[11px] font-bold uppercase tracking-[0.2em] font-sans">Live right now</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] font-sans">
                        Upcoming Schedule
                      </span>
                    )}
                    <span className="text-white/40 text-xs font-sans px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md">
                      {LIVE_CLASS.schedule}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-3 tracking-tight">
                    {LIVE_CLASS.title}
                  </h2>
                  <p className="text-white/50 font-sans text-sm md:text-base">
                    Lead by <span className="text-white/90 font-medium">{LIVE_CLASS.instructor}</span>
                  </p>
                </div>
                
                <a
                  href={LIVE_CLASS.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white text-black font-bold font-sans text-[15px] tracking-wide shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:shadow-[0_0_50px_-5px_rgba(255,255,255,0.6)] hover:scale-[1.02] transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10 flex items-center gap-3 group-hover:text-black">
                    <Video className="w-5 h-5" />
                    Enter Live Studio
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* 4. Discipline Notice (Spans 12 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-12">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-4 rounded-[20px] bg-red-500/5 border border-red-500/10">
              <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-red-400" />
              </div>
              <p className="text-red-400/80 text-sm font-sans flex-1">
                <strong className="text-red-400">Strictly Confidential</strong> — This material is proprietary. Do not screen record or share access keys externally. Any violations will result in permanent expulsion from the Next50 program.
              </p>
            </div>
          </motion.div>

          {/* 5. Masterclasses Library (Spans 8 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-8 flex flex-col">
            <SpotlightCard className="p-6 md:p-8 flex-1">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-1">Masterclass Library</h2>
                  <p className="text-white/30 text-xs font-sans">High-definition recorded lectures</p>
                </div>
              </div>

              {/* Advanced Subject Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 p-1 bg-white/[0.02] rounded-2xl border border-white/5 w-fit">
                {RECORDED_LECTURES.map((subj, i) => {
                  const Icon = iconMap[subj.icon] || Atom;
                  const isActive = activeSubject === i;
                  return (
                    <button
                      key={subj.subject}
                      onClick={() => setActiveSubject(i)}
                      className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-sans font-medium transition-all duration-300 ${isActive ? "text-white" : "text-white/40 hover:text-white/70"}`}
                    >
                      {isActive && (
                        <motion.div layoutId="activeTab" className="absolute inset-0 bg-white/10 rounded-xl border border-white/10 shadow-sm" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                      )}
                      <span className="relative z-10 flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        {subj.subject}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Lecture Grid with gamification */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSubject}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {RECORDED_LECTURES[activeSubject].lectures.map((lecture) => {
                    const isWatched = watchedLectures.includes(lecture.id);
                    return (
                      <motion.button
                        key={lecture.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedLecture(lecture)}
                        className="group text-left p-2 bg-black/20 hover:bg-white/[0.04] border border-white/5 hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-300 relative"
                      >
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5 mb-3">
                          <img
                            src={`https://img.youtube.com/vi/${lecture.youtubeId}/maxresdefault.jpg`}
                            onError={(e) => { e.currentTarget.src = `https://img.youtube.com/vi/${lecture.youtubeId}/hqdefault.jpg`; }}
                            alt={lecture.title}
                            className={`w-full h-full object-cover transition-all duration-700 ${isWatched ? "opacity-40 grayscale-[50%]" : "opacity-80 group-hover:scale-105 group-hover:opacity-100"}`}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 shadow-xl border border-white/30">
                              <Play className="w-5 h-5 text-white ml-1" fill="white" />
                            </div>
                          </div>
                          {/* Duration Badge */}
                          <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-white text-[10px] font-sans font-medium border border-white/10">
                            {lecture.duration}
                          </div>
                          {/* Gamification Badge */}
                          {isWatched && (
                            <div className="absolute top-2 left-2 px-2 py-1 rounded-md bg-emerald-500/90 backdrop-blur-sm text-white text-[10px] font-sans font-bold flex items-center gap-1 shadow-lg">
                              <CheckCircle2 className="w-3 h-3" /> Watched
                            </div>
                          )}
                        </div>
                        <div className="px-2 pb-1">
                          <h4 className={`text-sm font-sans font-medium leading-snug mb-2 line-clamp-2 transition-colors ${isWatched ? "text-white/40" : "text-white/90 group-hover:text-white"}`}>
                            {lecture.title}
                          </h4>
                          <span className="text-white/30 text-[10px] font-sans uppercase tracking-widest">{lecture.date}</span>
                        </div>
                      </motion.button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {RECORDED_LECTURES[activeSubject].lectures.length === 0 && (
                <div className="py-20 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-3xl bg-white/5 flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-white/20" />
                  </div>
                  <p className="text-white/40 font-sans text-sm">Library is being updated for this subject.</p>
                </div>
              )}
            </SpotlightCard>
          </motion.div>

          {/* 6. Announcements (Spans 4 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-4 flex flex-col">
            <SpotlightCard className="p-6 md:p-8 flex-1 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                  <Bell className="w-4 h-4 text-amber-400" />
                </div>
                <h2 className="text-xl font-serif font-bold text-white">Notice Board</h2>
              </div>

              <div className="space-y-4">
                {ANNOUNCEMENTS.map((msg, i) => (
                  <div key={i} className="group relative pl-4 border-l border-white/10 hover:border-amber-500/50 transition-colors py-1 cursor-default">
                    <div className="absolute top-2.5 -left-[3px] w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-amber-400 transition-colors" />
                    <p className="text-white/60 group-hover:text-white/90 text-sm font-sans leading-relaxed transition-colors">{msg}</p>
                  </div>
                ))}
                {ANNOUNCEMENTS.length === 0 && (
                  <p className="text-white/30 text-xs text-center py-10">No new notices.</p>
                )}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 7. Assessments (Spans 12 cols) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-12">
            <SpotlightCard className="p-6 md:p-8 border border-amber-500/10">
               <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <ClipboardEdit className="w-4 h-4 text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-1">Active Tests & Assignments</h2>
                  <p className="text-white/30 text-xs font-sans">Mandatory assessments for performance tracking.</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ASSESSMENTS.map((test) => (
                  <a
                    key={test.id}
                    href={test.testLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col p-5 rounded-[20px] bg-red-500/5 hover:bg-red-500/10 border border-red-500/10 hover:border-red-500/20 transition-all duration-300"
                  >
                    <div className="mb-2">
                       <span className="inline-block px-2 py-1 rounded text-[10px] font-bold font-sans uppercase bg-red-500/20 text-red-400 mb-3 border border-red-500/20">
                         {test.duration}
                       </span>
                    </div>
                    <h4 className="text-[16px] font-sans font-medium text-white/90 group-hover:text-white leading-snug mb-2 flex-1">
                      {test.title}
                    </h4>
                    <p className="text-red-400/60 text-xs font-sans">Due: {test.date}</p>
                    {/* Hover redirect */}
                    <div className="absolute right-5 bottom-5 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>

          {/* 8. Study Resources (Spans 12 cols, Bento list) */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="md:col-span-4 lg:col-span-12">
            <SpotlightCard className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-2xl font-serif font-bold text-white mb-1">Study Resources</h2>
                  <p className="text-white/30 text-xs font-sans">Premium class notes and assignments synced with live classes.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {STUDY_MATERIALS.map((mat) => {
                  const isSaved = savedMaterials.includes(mat.id);
                  return (
                    <a
                      key={mat.id}
                      href={mat.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex flex-col p-5 rounded-[20px] bg-black/30 hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-300"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                          <FileText className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
                        </div>
                        <button 
                          onClick={(e) => toggleMaterial(mat.id, e)}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSaved ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-white/20 hover:bg-white/10 hover:text-white/60'}`}
                        >
                          {isSaved ? <Bookmark className="w-4 h-4" fill="currentColor" /> : <BookmarkPlus className="w-4 h-4" />}
                        </button>
                      </div>
                      <h4 className="text-[15px] font-sans font-medium text-white/80 group-hover:text-white leading-tight mb-4 flex-1">
                        {mat.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-auto">
                        <span className={`px-2 py-1 rounded-md text-[10px] font-bold font-sans uppercase border ${typeBadgeColors[mat.type] || "bg-white/5 text-white/40"}`}>
                          {mat.type}
                        </span>
                        <span className={`px-2 py-1 rounded-md text-[10px] font-medium font-sans border ${subjectColors[mat.subject] || "bg-white/5 text-white/40"}`}>
                          {mat.subject}
                        </span>
                      </div>
                      
                      {/* Hover Download Indication */}
                      <div className="absolute right-5 bottom-5 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                        <Download className="w-4 h-4" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </SpotlightCard>
          </motion.div>

        </motion.div>
        
        {/* Footer info */}
        <div className="text-center pt-12 pb-4">
          <p className="text-white/10 text-xs font-sans font-medium tracking-wide uppercase">
            Ilmeza Foundation © 2026
          </p>
        </div>
      </div>

      {/* Video Modal Render */}
      <AnimatePresence>
        {selectedLecture && (
          <VideoModal
            lecture={selectedLecture}
            onClose={() => setSelectedLecture(null)}
            markWatched={markWatched}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN COMPONENT LOGIC
   ═══════════════════════════════════════════════════ */
export default function Next50Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("n50_auth") === "true") setAuthenticated(true);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("n50_auth");
    setAuthenticated(false);
    navigate("/next-50/dashboard");
  };

  return (
    <AnimatePresence mode="wait">
      {authenticated ? (
        <motion.div key="dashboard" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
          <Dashboard onLogout={handleLogout} />
        </motion.div>
      ) : (
        <motion.div key="gate" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
          <AccessGate onSuccess={() => setAuthenticated(true)} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
