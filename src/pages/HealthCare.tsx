import { siteConfig } from "@/data/siteConfig";
import FadeIn from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Stethoscope, Users, CheckCircle2, ArrowRight, Activity, ShieldCheck, Microscope } from "lucide-react";

const HealthCare = () => {
    const { healthCare } = siteConfig;

    return (
        <div className="min-h-screen pt-24 pb-20 overflow-hidden bg-white">
            {/* ─── Hero Section ────────────────────────────────────────── */}
            <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#fdfaf5] -z-10" />
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -z-10 skew-x-12 translate-x-20" />
                
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center relative">
                        <FadeIn>
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
                                <Activity className="w-4 h-4" />
                                <span>Health Initiative</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif-display font-bold text-primary mb-8 leading-[0.9] tracking-tighter">
                                {healthCare.title}
                            </h1>
                            <p className="text-xl md:text-2xl font-sans-body text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light italic">
                                "{healthCare.subtitle}"
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <Link to="/get-involved">
                                    <Button className="bg-primary text-white hover:bg-primary/90 px-10 py-7 rounded-full text-lg font-bold shadow-2xl shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
                                        Join Our Cause
                                    </Button>
                                </Link>
                                <Link to="/donate">
                                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 px-10 py-7 rounded-full text-lg font-bold transition-all duration-300">
                                        Support Initiative
                                    </Button>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/4 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-[100px]" />
            </section>

            {/* ─── Mission & Vision ────────────────────────────────────── */}
            <section className="py-24 -mt-20">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-center bg-white glass-panel p-8 md:p-16 border-accent/10">
                        <div className="lg:col-span-7">
                            <FadeIn direction="left">
                                <h2 className="text-4xl md:text-5xl font-serif-display font-bold text-primary mb-8 tracking-tight">
                                    Our Commitment to <span className="text-accent italic">Every Woman</span>
                                </h2>
                                <p className="text-xl text-foreground/70 leading-relaxed font-light mb-10">
                                    {healthCare.mission}
                                </p>
                                <div className="grid sm:grid-cols-2 gap-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <ShieldCheck className="w-6 h-6 text-accent" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif-display text-xl font-bold text-primary mb-1">Preventive Care</h4>
                                            <p className="text-sm text-foreground/60">Early screening protocols.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <Microscope className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-serif-display text-xl font-bold text-primary mb-1">Expert Diagnosis</h4>
                                            <p className="text-sm text-foreground/60">Collaboration with medical pros.</p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                        <div className="lg:col-span-5">
                            <FadeIn direction="right" delay={0.2}>
                                <div className="relative group">
                                    <div className="absolute -inset-2 bg-accent/20 rounded-[2.5rem] blur-xl group-hover:bg-accent/30 transition-all duration-500" />
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-3xl border-4 border-white">
                                        <img 
                                            src="/images/hero_healthcare.png" 
                                            alt="Healthcare Initiative" 
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-8 left-8 right-8">
                                            <p className="text-white font-serif-display text-2xl font-bold leading-tight">
                                                Building a Strong Nation through Healthy Families
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Importance Stats ───────────────────────────────────── */}
            <section className="py-24 bg-primary relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-noise" />
                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <FadeIn direction="left">
                            <h2 className="text-4xl md:text-6xl font-serif-display font-bold text-white mb-8 leading-tight">
                                {healthCare.importance.title}
                            </h2>
                            <p className="text-xl text-white/70 leading-relaxed mb-10 font-light max-w-xl">
                                {healthCare.importance.description}
                            </p>
                            <div className="inline-block bg-accent/20 border-l-4 border-accent p-8 rounded-r-2xl text-white italic text-xl font-medium shadow-2xl">
                                "{healthCare.importance.highlight}"
                            </div>
                        </FadeIn>
                        
                        <FadeIn direction="right" delay={0.3}>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {[
                                    { icon: Heart, title: "Awareness", desc: "Breaking Myths & Stigma", color: "accent" },
                                    { icon: Stethoscope, title: "Screening", desc: "Early Detection Camps", color: "white" },
                                    { icon: Users, title: "Community", desc: "Grassroots Reach", color: "white" },
                                    { icon: Activity, title: "Impact", desc: "Saving Lives Daily", color: "accent" }
                                ].map((stat, i) => (
                                    <div key={i} className={`p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] transition-all duration-300 group`}>
                                        <stat.icon className={`w-12 h-12 mb-6 ${stat.color === 'accent' ? 'text-accent' : 'text-white'} group-hover:scale-110 transition-transform`} />
                                        <h4 className="text-2xl font-serif-display font-bold text-white mb-2">{stat.title}</h4>
                                        <p className="text-white/50 font-sans-body text-sm uppercase tracking-widest">{stat.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── Focus Areas ───────────────────────────────────────── */}
            <section className="py-32 bg-[#fafafa]">
                <div className="container mx-auto px-4 lg:px-8">
                    <FadeIn className="text-center mb-24">
                        <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Medical Priorities</span>
                        <h2 className="text-5xl md:text-7xl font-serif-display font-bold text-primary tracking-tighter">Our Focus Areas</h2>
                    </FadeIn>

                    <div className="space-y-40">
                        {healthCare.focusAreas.map((area, index) => (
                            <div key={area.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}>
                                <div className="lg:w-1/2">
                                    <FadeIn direction={index % 2 === 0 ? 'left' : 'right'}>
                                        <div className="mb-10">
                                            <span className="text-7xl font-serif-display font-bold text-accent/10 block mb-2 leading-none">0{index + 1}</span>
                                            <h3 className="text-4xl md:text-5xl font-serif-display font-bold text-primary mb-6">
                                                {area.title}
                                            </h3>
                                            <div className="w-20 h-1.5 bg-accent mb-10 rounded-full" />
                                        </div>
                                        <div className="grid gap-6 mb-12">
                                            {area.points.map((point, i) => (
                                                <div key={i} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-black/5 group hover:border-accent/30 transition-colors">
                                                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-primary transition-colors text-accent">
                                                        <CheckCircle2 className="w-5 h-5" />
                                                    </div>
                                                    <span className="text-lg text-foreground/80 font-medium">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {area.id === "breast-cancer" && area.extraImage && (
                                            <FadeIn delay={0.4}>
                                                <div className="mt-16 bg-white rounded-[2rem] p-10 shadow-2xl border border-black/5 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                                                    <h4 className="text-primary font-serif-display text-2xl font-bold mb-8 flex items-center gap-3">
                                                        <Activity className="text-accent" />
                                                        Self-Examination Protocol
                                                    </h4>
                                                    <div className="relative rounded-2xl overflow-hidden border border-black/5 bg-gray-50">
                                                        <img src={area.extraImage} alt="BSE Guide" className="w-full h-auto" />
                                                    </div>
                                                    <p className="mt-6 text-sm text-foreground/50 text-center italic">
                                                        Recommended monthly for early detection and peace of mind.
                                                    </p>
                                                </div>
                                            </FadeIn>
                                        )}
                                    </FadeIn>
                                </div>
                                <div className="lg:w-1/2">
                                    <FadeIn direction={index % 2 === 0 ? 'right' : 'left'}>
                                        <div className="relative">
                                            <div className="absolute -inset-6 bg-accent/5 rounded-[3rem] -rotate-3 blur-2xl" />
                                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border-[12px] border-white">
                                                <img 
                                                    src={area.image} 
                                                    alt={area.title} 
                                                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-105" 
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-60" />
                                            </div>
                                        </div>
                                    </FadeIn>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Our Approach ──────────────────────────────────────── */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
                        <FadeIn direction="left" className="lg:w-1/2">
                            <span className="text-accent font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Strategic Reach</span>
                            <h2 className="text-5xl md:text-6xl font-serif-display font-bold text-primary tracking-tight">{healthCare.approach.title}</h2>
                        </FadeIn>
                        <FadeIn direction="right" className="lg:w-1/2 pb-2">
                            <p className="text-xl text-foreground/60 leading-relaxed font-light">{healthCare.approach.description}</p>
                        </FadeIn>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {healthCare.approach.items.map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="p-10 rounded-3xl bg-[#f8f9fa] border border-black/5 hover:bg-primary hover:text-white hover:-translate-y-2 transition-all duration-500 group flex flex-col h-full">
                                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-accent transition-colors">
                                        <Stethoscope className="w-7 h-7 text-accent group-hover:text-primary transition-colors" />
                                    </div>
                                    <p className="text-xl font-medium leading-relaxed mb-6 flex-grow">{item}</p>
                                    <div className="w-10 h-1 bg-accent/30 group-hover:bg-accent rounded-full transition-colors" />
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Impact Vision ─────────────────────────────────────── */}
            <section className="py-32 relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="bg-primary rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-[0_50px_120px_-30px_rgba(26,34,56,0.4)]">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48" />
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                            <FadeIn direction="left">
                                <h2 className="text-5xl md:text-7xl font-serif-display font-bold mb-8 tracking-tighter">
                                    Our <span className="text-accent italic text-6xl md:text-8xl block mt-2">Impact Vision</span>
                                </h2>
                                <p className="text-xl text-white/60 font-light leading-relaxed">
                                    Building a community where women feel confident, informed, and supported in their health journeys.
                                </p>
                            </FadeIn>
                            
                            <FadeIn direction="right" delay={0.2}>
                                <div className="space-y-6">
                                    {healthCare.impact.items.map((item, index) => (
                                        <div key={index} className="flex gap-6 items-center bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors">
                                            <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center flex-shrink-0 text-accent text-2xl font-serif-display font-bold border border-accent/20">
                                                {index + 1}
                                            </div>
                                            <p className="text-xl text-white/90 leading-tight font-medium">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Call to Action ────────────────────────────────────── */}
            <section className="py-32 relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <span className="text-accent font-bold tracking-[0.4em] uppercase text-sm mb-6 block">Join the movement</span>
                            <h2 className="text-5xl md:text-7xl font-serif-display font-bold text-primary mb-10 tracking-tight">
                                {healthCare.getInvolved.footer}
                            </h2>
                            <p className="text-2xl text-foreground/50 mb-16 font-light max-w-2xl mx-auto">
                                {healthCare.getInvolved.description}
                            </p>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                                {healthCare.getInvolved.items.map((item, index) => (
                                    <div key={index} className="bg-white border border-black/5 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                                        <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-2">{item.label}</h4>
                                        <p className="text-foreground/60 text-sm leading-snug">{item.text}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col md:flex-row justify-center gap-6">
                                <Link to="/get-involved">
                                    <Button className="bg-primary text-white hover:bg-primary/90 px-14 py-8 rounded-full text-xl font-bold shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                                        Get Involved
                                        <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                                <Link to="/donate">
                                    <Button variant="outline" className="border-accent text-accent hover:bg-accent/5 px-14 py-8 rounded-full text-xl font-bold transition-all duration-500 hover:-translate-y-2">
                                        Donate Now
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                
                {/* Background Decorations */}
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 -ml-64" />
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -mr-64" />
            </section>
        </div>
    );
};

export default HealthCare;
