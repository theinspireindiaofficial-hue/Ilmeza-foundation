import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Sprout, 
  Users, 
  MapPin, 
  FileText, 
  Compass, 
  Award, 
  ShieldCheck, 
  ArrowRight, 
  Globe, 
  CheckCircle, 
  Activity, 
  Heart,
  Calendar,
  Filter,
  X,
  Maximize2,
  Clock,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

// Stat metrics
const stats = [
  { value: "10,000+", label: "Trees Targeted", icon: Sprout },
  { value: "₹99", label: "Per sapling planted", icon: Compass },
  { value: "100%", label: "GPS Tagged & Verified", icon: MapPin },
  { value: "50+", label: "Local Guardians Employed", icon: Users }
];

// Impact cards
const impactCards = [
  {
    title: "Transparency & Accountability",
    desc: "Every single rupee of your ₹99 contribution is accounted for. We publish open ledgers and audit trails detailing exactly where saplings are sourced, transported, and planted.",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-500/10",
    text: "text-emerald-700"
  },
  {
    title: "Community Development",
    desc: "By transforming tree planting into community-owned guardianship, we generate sustainable, green livelihoods for rural women and youth who act as paid custodians of the soil.",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    text: "text-amber-600"
  },
  {
    title: "Environmental Sustainability",
    desc: "We plant exclusively native species carefully selected to restore natural soil nutrition, prevent erosion, optimize local water tables, and create thriving, self-sustaining biodiversity hubs.",
    icon: Globe,
    color: "from-sky-500 to-blue-600",
    bg: "bg-sky-500/10",
    text: "text-sky-600"
  },
  {
    title: "Youth Empowerment",
    desc: "Engaging students and young professionals as climate ambassadors. We offer green leadership fellowships, local plantation bootcamps, and digital advocacy programs.",
    icon: Award,
    color: "from-purple-500 to-indigo-600",
    bg: "bg-purple-500/10",
    text: "text-purple-600"
  }
];

// Trust markers
const trustMarkers = [
  {
    title: "GPS-Tagged Plantations",
    desc: "Each tree is photographed, cataloged, and assigned direct GPS coordinates, allowing contributors to view their living legacy on an open tracking dashboard.",
    icon: MapPin
  },
  {
    title: "Annual Impact Reports",
    desc: "Comprehensive annual audits detailing survival rates, carbon offset projections, soil restoration success, and localized economic impact statements.",
    icon: FileText
  },
  {
    title: "Verified Implementation",
    desc: "Direct field inspections and third-party checks conducted by environmental science institutions to assess tree health and biological resilience.",
    icon: CheckCircle
  },
  {
    title: "Community Guardianship Model",
    desc: "Moving beyond 'drop-and-go' planting. We contract local families for continuous maintenance, pruning, watering, and protection for a minimum of 3 years.",
    icon: Heart
  }
];

// Gallery images configuration
interface GalleryImage {
  id: string;
  url: string;
  category: "planting" | "volunteers" | "community" | "mapping";
  title: string;
  desc: string;
  location: string;
  coords: string;
  date: string;
  spanClass: string;
  objectPosition?: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "img1",
    url: "/images/Tree-volution/1092e30e-9aaf-489f-8660-01e88e6b1376.JPG",
    category: "planting",
    title: "Active Ground Sowing",
    desc: "Community guardians and volunteers collaborating on-ground to dig soil beds and plant native saplings.",
    location: "Ecosystem Zone Alpha",
    coords: "28.5671° N, 77.2910° E",
    date: "June 3, 2026",
    spanClass: "md:col-span-2 md:row-span-2",
    objectPosition: "object-[center_35%]"
  },
  {
    id: "img2",
    url: "/images/Tree-volution/fc9ca8ff-6090-4cab-b523-2f2f2bff0023.JPG",
    category: "planting",
    title: "On-Ground Plantation",
    desc: "Planting indigenous shade saplings in designated public grounds to restore green cover.",
    location: "Sowing Block A",
    coords: "28.5684° N, 77.2925° E",
    date: "June 3, 2026",
    spanClass: "md:col-span-1",
    objectPosition: "object-top"
  },
  {
    id: "img3",
    url: "/images/Tree-volution/072da783-f60a-4330-b317-47a158b4679f.JPG",
    category: "community",
    title: "Community Guardianship Model",
    desc: "Empowering local guardians to maintain, prune, and water saplings for long-term survival.",
    location: "Village Support Center",
    coords: "28.5655° N, 77.2890° E",
    date: "June 2, 2026",
    spanClass: "md:col-span-1"
  },
  {
    id: "img4",
    url: "/images/Tree-volution/341cbe32-fa37-4619-858f-3f74129e16fd.JPG",
    category: "volunteers",
    title: "Deserving Youth Mobilization",
    desc: "Briefing and deployment of local student leaders and climate volunteers to plantation sectors.",
    location: "Educational Hub B",
    coords: "28.5699° N, 77.2941° E",
    date: "June 3, 2026",
    spanClass: "md:col-span-2",
    objectPosition: "object-[center_30%]"
  },
  {
    id: "img5",
    url: "/images/Tree-volution/376c9024-d1aa-4a3d-afac-2b7216a6b9a4.JPG",
    category: "mapping",
    title: "GPS-Tagged Audit Mapping",
    desc: "Recording exact location coordinates and sapling details to upload to the transparency dashboard.",
    location: "Satellite Mapping Zone C",
    coords: "28.5630° N, 77.2845° E",
    date: "June 3, 2026",
    spanClass: "md:col-span-1",
    objectPosition: "object-[center_40%]"
  },
  {
    id: "img6",
    url: "/images/Tree-volution/e1470d8f-a2b3-4c9a-8145-ab850c02edc7.JPG",
    category: "planting",
    title: "Sapling Care & Nourishment",
    desc: "Caring for young saplings with customized organic composting and dynamic moisture analysis.",
    location: "Ecosystem Bed Sector 4",
    coords: "28.5662° N, 77.2970° E",
    date: "June 1, 2026",
    spanClass: "md:col-span-1",
    objectPosition: "object-top"
  }
];

export default function TreeVolution() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  
  // Parallax transform equations
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Gallery states
  const [galleryFilter, setGalleryFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Lock body scroll and register keyboard navigation when lightbox is open
  useEffect(() => {
    if (!selectedImage) return;

    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        const filteredImages = galleryImages.filter(
          img => galleryFilter === "all" || img.category === galleryFilter
        );
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedImage(filteredImages[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const filteredImages = galleryImages.filter(
          img => galleryFilter === "all" || img.category === galleryFilter
        );
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % filteredImages.length;
        setSelectedImage(filteredImages[nextIndex]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedImage, galleryFilter]);

  // Lightbox navigation controls
  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const filteredImages = galleryImages.filter(
      img => galleryFilter === "all" || img.category === galleryFilter
    );
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedImage) return;
    const filteredImages = galleryImages.filter(
      img => galleryFilter === "all" || img.category === galleryFilter
    );
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  return (
    <main className="overflow-x-hidden pt-20">
      
      {/* 1. PREMIUM PARALLAX HERO SECTION */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        
        {/* Parallax Background Canopy */}
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, backgroundImage: "url('https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2070')" }} 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        />

        {/* Deep Green Elegant Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-emerald-950/80 to-primary" />

        {/* Floating Spotlight Orbs */}
        <div className="absolute top-24 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 right-1/4 w-[30rem] h-[30rem] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-accent text-xs font-bold tracking-[0.2em] uppercase mb-4 backdrop-blur-md">
              <Sprout className="w-3.5 h-3.5" /> Flagship Impact Movement
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight">
              Powering <br className="sm:hidden" />
              <span className="text-gradient-gold italic">Tree-volution</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-100/90 leading-snug max-w-3xl mx-auto">
              Turning Ideas Into Impact
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/75 font-sans-body font-light leading-relaxed max-w-2xl mx-auto">
              Tree-volution is a nationwide environmental movement initiated by <span className="font-semibold text-accent">Inspire India Talks</span> and powered by <span className="font-semibold text-white underline decoration-accent underline-offset-4">Ilmeza Foundation</span>.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <a href="#about-tree">
                <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-sans-body text-lg font-bold px-10 py-7 rounded-full shadow-2xl shadow-emerald-950/20 transition-all duration-300 hover:scale-105 active:scale-95 group">
                  Explore Initiative
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href="https://www.inspireindiatalks.com/tree-volution" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-white/5 font-sans-body text-lg px-10 py-7 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  Plant a Legacy (₹99)
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS BAR STRIP */}
      <section className="bg-emerald-800 py-12 relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-emerald-700/50">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center md:px-4 space-y-2">
                  <div className="flex justify-center text-accent/90 mb-1">
                    <Icon className="w-6 h-6 animate-pulse" />
                  </div>
                  <p className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs font-sans-body font-bold uppercase tracking-widest text-emerald-200">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE INSTITUTIONAL BACKBONE */}
      <section id="about-tree" className="py-24 md:py-32 bg-white relative">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-emerald-50/40 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-4 rounded-3xl border border-accent/25 translate-x-3 translate-y-3 -z-10 hidden md:block" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl bg-white border border-emerald-100">
                <img 
                  src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070" 
                  alt="Young environmentalists planting tree seedlings"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Floating contribution callout */}
                <div className="absolute top-6 left-6 py-2 px-5 rounded-full bg-emerald-900 text-accent font-sans-body font-bold text-sm shadow-xl flex items-center gap-2 border border-emerald-800">
                  ₹99 = 1 Living Tree
                </div>
              </div>
            </div>

            {/* Backbone Content */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-sans-body font-bold tracking-[0.25em] uppercase text-accent">
                Governance & Operations
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                The Institutional Backbone
              </h2>
              
              <div className="space-y-4 text-foreground/80 font-sans-body font-light text-base leading-relaxed">
                <p>
                  <strong>Ilmeza Foundation</strong> serves as the institutional backbone of Tree-volution, providing rigorous governance, financial transparency, legal compliance, and community operational support.
                </p>
                <p>
                  We are a Section-8 non-profit with an unwavering dedication to social and ecological development. Through our institutional strength, we ensure that every single <strong>₹99 contribution</strong> is directly transformed into a native, high-survival-rate sapling planted on designated public or community land.
                </p>
                <p>
                  Instead of short-lived planting drives, we establish community-owned ecosystems. We bridge the gap between initial funding, local municipal permissions, native sapling procurement, and long-term care by establishing community guardianship.
                </p>
              </div>

              {/* Highlight list */}
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span className="font-sans-body text-sm font-semibold text-foreground/90">10,000 Trees targeted to restore ecological balance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span className="font-sans-body text-sm font-semibold text-foreground/90">Stronger, highly resilient community partnerships</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span className="font-sans-body text-sm font-semibold text-foreground/90">Youth-led environmental stewardship networks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0" />
                  <span className="font-sans-body text-sm font-semibold text-foreground/90">Sustained carbon capture and ecosystem stability</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE FOUR IMPACT PILLARS */}
      <section className="py-24 md:py-32 bg-cream/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-sans-body font-bold tracking-[0.25em] uppercase text-accent mb-4">Core Dimensions</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">Initiative Pillars</h2>
            <p className="text-muted-foreground mt-4 font-sans-body font-light">
              Ilmeza Foundation steers Tree-volution through four interlinked domains of social and biological development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impactCards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.title} 
                  className="group relative glass-card p-8 md:p-10 rounded-[2rem] hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 bg-white"
                >
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.text} flex items-center justify-center shrink-0 group-hover:bg-emerald-750 group-hover:text-emerald-700 transition-all duration-300`}>
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-emerald-800 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground font-sans-body font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. TRUST ENGINE SECTION */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-50/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xs font-sans-body font-bold tracking-[0.25em] uppercase text-accent mb-4">Rigorous Transparency</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">Built On Institutional Trust</h2>
            <p className="text-muted-foreground mt-4 font-sans-body font-light">
              We understand that social impact requires absolute credibility. Ilmeza Foundation enforces auditing at every step of Tree-volution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustMarkers.map((marker, idx) => {
              const Icon = marker.icon;
              return (
                <div key={marker.title} className="p-8 glass-card border-emerald-50 rounded-2xl hover:border-emerald-250 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl font-serif font-bold text-foreground">
                      {marker.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground font-sans-body font-light leading-relaxed">
                      {marker.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: BENTO-GRID MEDIA GALLERY */}
      <section className="py-24 md:py-32 bg-white relative border-t border-emerald-50">
        <div className="absolute bottom-1/4 -right-36 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs font-sans-body font-bold tracking-[0.25em] uppercase text-accent mb-4">
              Visual Documentation
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Tree-volution Campaign Gallery
            </h2>
            <p className="text-muted-foreground mt-4 font-sans-body font-light">
              Explore dynamic photos from the ground. Use category filters to view different facets of the environmental movement.
            </p>
          </div>

          {/* Gallery Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: "All Campaign Photos", icon: Filter },
              { id: "planting", label: "On-Ground Planting", icon: Sprout },
              { id: "volunteers", label: "Volunteers in Action", icon: Users },
              { id: "community", label: "Community Support", icon: Heart },
              { id: "mapping", label: "GPS Mapping & Audits", icon: MapPin }
            ].map((filter) => {
              const isActive = galleryFilter === filter.id;
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setGalleryFilter(filter.id)}
                  className={`py-3 px-6 rounded-full text-sm font-sans-body font-semibold tracking-wide flex items-center gap-2 border transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-700 border-emerald-700 text-white shadow-lg shadow-emerald-750/15"
                      : "bg-white border-emerald-100 hover:border-emerald-700 text-muted-foreground hover:text-emerald-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>

          {/* Bento-Grid Layout with Premium Scaling and Shifting Tilt */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 auto-rows-[220px] grid-flow-row-dense">
            {galleryImages
              .filter(img => galleryFilter === "all" || img.category === galleryFilter)
              .map((img) => (
                <div
                  key={img.id}
                  onClick={() => setSelectedImage(img)}
                  className={`group relative overflow-hidden rounded-[2.5rem] border border-emerald-500/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] cursor-pointer transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:scale-[1.02] ${img.spanClass}`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className={`w-full h-full object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] ${img.objectPosition || "object-center"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Floating Action/Info Trigger on Hover */}
                  <div className="absolute bottom-7 left-7 right-7 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 space-y-2.5 z-10">
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent/90 text-accent-foreground text-[9px] font-bold uppercase tracking-widest">
                        {img.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-[9px] text-accent font-mono bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md border border-white/5">
                        <MapPin className="w-3 h-3 text-accent" /> {img.coords.split(",")[0]}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold leading-tight">{img.title}</h3>
                    <p className="text-xs text-white/70 font-sans-body line-clamp-1">{img.desc}</p>
                    <div className="flex justify-between items-center pt-2.5 text-[10px] text-white/40 border-t border-white/10">
                      <span>Zone: {img.location}</span>
                      <Maximize2 className="w-3.5 h-3.5 text-accent" />
                    </div>
                  </div>
                </div>
              ))}

            {/* Dynamic Custom Bento Quote Tile */}
            {galleryFilter === "all" && (
              <div className="md:col-span-2 md:row-span-1 rounded-[2.5rem] bg-emerald-900 border border-emerald-800 p-8 flex flex-col justify-between text-white relative overflow-hidden group shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                <div className="space-y-4 relative z-10">
                  <span className="inline-flex py-1 px-3 rounded-full bg-accent/20 border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-wider font-sans-body">
                    Campaign Mantra
                  </span>
                  <p className="text-xl md:text-2xl font-serif font-medium leading-relaxed italic">
                    "Sowing a seed today, restoring a green canopy tomorrow, nurturing a sustainable future for generations."
                  </p>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-emerald-800 text-xs text-emerald-200 relative z-10">
                  <span>Tree-volution Flagship Core</span>
                  <Sprout className="w-5 h-5 text-accent" />
                </div>
              </div>
            )}
          </div>

          {/* Interactive Fullscreen Gallery Lightbox Modal with Carousel Nav */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-8"
              >
                {/* Left Chevron Control */}
                <button
                  onClick={handlePrev}
                  className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-[#030712]/60 hover:bg-emerald-800 text-white items-center justify-center border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>

                {/* Right Chevron Control */}
                <button
                  onClick={handleNext}
                  className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 z-30 w-16 h-16 rounded-full bg-[#030712]/60 hover:bg-emerald-800 text-white items-center justify-center border border-white/10 hover:border-accent/40 backdrop-blur-md transition-all duration-300 hover:scale-105"
                >
                  <ChevronRight className="w-8 h-8 text-white" />
                </button>

                <div className="relative w-full max-w-5xl bg-[#030712] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl z-10">
                  
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-6 right-6 z-25 w-12 h-12 rounded-full bg-black/40 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-0 h-full max-h-[85vh] md:max-h-[75vh]">
                    
                    {/* Lightbox Left: Image Panel */}
                    <div className="md:col-span-7 bg-black flex flex-col justify-center relative overflow-hidden h-64 md:h-full">
                      <img
                        src={selectedImage.url}
                        alt={selectedImage.title}
                        className="w-full h-full object-contain max-h-[85vh]"
                      />
                      
                      {/* Active floating Tag */}
                      <span className="absolute bottom-6 left-6 py-1.5 px-4 rounded-md bg-emerald-800 text-accent font-sans-body font-bold text-xs shadow-md border border-emerald-700">
                        ₹99 Contribution Spot
                      </span>

                      {/* Mobile On-Image Chevrons Navigation */}
                      <div className="flex md:hidden absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-4 z-20 pointer-events-none">
                        <button onClick={handlePrev} className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white">
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button onClick={handleNext} className="pointer-events-auto w-10 h-10 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white">
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Lightbox Right: Image Description Panel */}
                    <div className="md:col-span-5 p-8 md:p-12 text-white flex flex-col justify-between gap-8 overflow-y-auto">
                      
                      <div className="space-y-6">
                        <div className="space-y-3">
                          <span className="inline-block py-1 px-3 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 text-[10px] font-bold uppercase tracking-widest font-sans-body">
                            {selectedImage.category}
                          </span>
                          <h3 className="text-3xl font-serif font-bold text-white leading-tight">
                            {selectedImage.title}
                          </h3>
                        </div>

                        <p className="text-white/70 font-sans-body text-base font-light leading-relaxed">
                          {selectedImage.desc}
                        </p>

                        <div className="space-y-4 pt-4 border-t border-white/5">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-sans-body">Plantation Location</p>
                              <p className="text-sm font-sans-body text-white/80 font-semibold">{selectedImage.location}</p>
                              <p className="text-xs font-sans-body text-white/50">{selectedImage.coords}</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <Calendar className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest font-sans-body">Photographed On</p>
                              <p className="text-sm font-sans-body text-white/80 font-semibold">{selectedImage.date}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Redirect CTA Action inside Lightbox */}
                      <div className="pt-6 border-t border-white/5 flex gap-4">
                        <a
                          href="https://www.inspireindiatalks.com/tree-volution"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body font-bold text-base py-6 rounded-2xl shadow-xl shadow-accent/5">
                            Support this Zone (₹99)
                          </Button>
                        </a>
                      </div>

                    </div>

                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. CALL TO ACTION CANVASES */}
      <section className="py-28 relative overflow-hidden bg-primary">
        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        
        {/* Spotlight Blur */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold tracking-[0.15em] uppercase">
              <Activity className="w-3.5 h-3.5" /> Direct Community Stewardship
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Join Tree-volution.<br />
              <span className="text-gradient-gold italic">Plant a legacy</span> that lives for generations.
            </h2>

            <p className="text-lg text-primary-foreground/60 font-sans-body font-light max-w-xl mx-auto leading-relaxed">
              Your support builds living forests and finances honorable livelihoods for rural forest guardians. Make your contribution today.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-5 justify-center items-center">
              <a href="https://www.inspireindiatalks.com/tree-volution" target="_blank" rel="noopener noreferrer">
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-sans-body text-lg font-bold px-12 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group">
                  Support Tree-volution (₹99)
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </a>
              <Link to="/about">
                <Button variant="outline" className="border-primary-foreground/20 text-white hover:bg-white/10 bg-transparent font-sans-body text-lg px-12 py-7 rounded-full transition-all duration-300 hover:scale-105">
                  About Ilmeza Foundation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
