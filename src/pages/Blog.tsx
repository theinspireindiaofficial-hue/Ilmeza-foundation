import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PenTool, Calendar, User, ArrowRight, X, Sparkles, Image as ImageIcon, Trash2, ArrowLeft, Tag } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import RichTextEditor from "@/components/RichTextEditor";

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
      className={`relative rounded-[32px] border border-border bg-card overflow-hidden transition-all duration-500 group ${className}`}
      style={{
        "--x": `${position.x}px`,
        "--y": `${position.y}px`,
      } as React.CSSProperties}
    >
      <div 
        className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at var(--x) var(--y), rgba(234, 179, 8, 0.15), transparent 40%)`,
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/* ─── Premium Deep Royal Background ───────────────────── */
function RoyalBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[#030712]" />
      <motion.div
        animate={{ x: [0, 100, -50, 0], y: [0, -100, 50, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] max-w-[800px] bg-accent/5 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{ x: [0, -150, 50, 0], y: [0, 50, -150, 0], scale: [1, 1.3, 0.8, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/4 w-[60vw] h-[60vw] max-w-[600px] bg-blue-500/5 rounded-full blur-[100px]"
      />
      <div className="absolute inset-0 bg-noise opacity-[0.08] mix-blend-overlay" />
    </div>
  );
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  authorLink?: string;
  date: string;
  image?: string; // base64 or url
  readTime: string;
}

const INITIAL_POSTS: BlogPost[] = [
  {
    id: "post-custom-1",
    title: "Lack Of Education",
    content: "Lack of education causes poverty by limiting employment opportunities, giving consistently low or no income, increasing health issues and severely restricting cognitive development. When a child is denied the basic right to learn, a generational cycle of economic hardship begins.\n\nOur mission is to break this cycle. Education provides the critical thinking skills, confidence, and basic knowledge required to participate meaningfully in the modern economy. By delivering high-quality education to underserved communities, we aren't just teaching a syllabus—we are directly dismantling the infrastructure of poverty itself.",
    author: "Vikas Chaudhary",
    authorLink: "linkedin.com/in/vikas-chaudhary",
    date: "April 9, 2026",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", // High quality charity/education image
    readTime: "2 min read"
  },
  {
    id: "post-1",
    title: "Empowering Needs in the Modern Era",
    content: "The essence of true leadership is not in leading others, but in empowering them to lead themselves. At Ilmeza Foundation, our vision revolves around identifying raw potential and giving it the runway it deserves.\n\nEducation is merely the tool, the real product is the unwavering confidence we aim to instil in every child. We are creating an environment where curiosity is not just welcomed, but actively incubated.\n\nOur modern era demands more than just rote learning. It requires critical thinking, empathy, and an insatiable hunger for progress. Through our various initiatives, we are tearing down the socio-economic barriers that have traditionally gatekept high-tier education, ensuring every brilliant mind gets their shot at changing the world.",
    author: "Vikas Chaudhary",
    authorLink: "linkedin.com/in/vikas-chaudhary",
    date: "April 9, 2026",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "3 min read"
  },
  {
    id: "post-2",
    title: "Why The 'Next 50' Matters",
    content: "We often talk about mass education, but there is incredible power in concentrated, hyper-focused mentorship. The Next 50 program was built on this exact philosophy.\n\nBy selecting 50 highly driven students and giving them exclusive, distraction-free access to top-tier materials and direct faculty engagement, we aren't just teaching them—we are forging the next generation of absolute trailblazers in the scientific community.\n\nIt is about depth over breadth. Creating 50 exceptional leaders will create a ripple effect that ultimately impacts millions. This is why the Next 50 matters.",
    author: "Foundation Team",
    date: "April 8, 2026",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    readTime: "2 min read"
  }
];

// ============================================================================
// ⚠️ PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE
// ============================================================================
export const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzWqTRyYcturGRYWO6Htd3UI412LMW1kT8Dz82LaqoM-XvzZwi3_UHqJj16Bga-9JEf/exec"; 
// Example: "https://script.google.com/macros/s/AKfycby.../exec"
// ============================================================================
export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>(INITIAL_POSTS);
  const [isLoadingFeed, setIsLoadingFeed] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
  // UI States
  const [isComposing, setIsComposing] = useState(false);
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);
  
  // Composer Form States
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newAuthorLink, setNewAuthorLink] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Fetch Global Posts from Google Sheets Backend
    const fetchGlobalPosts = async () => {
      if (!GOOGLE_SHEET_URL.trim()) return; // If no URL provided, stick to INITIAL_POSTS
      
      try {
        setIsLoadingFeed(true);
        const res = await fetch(GOOGLE_SHEET_URL);
        const data = await res.json();
        
        if (data && data.length > 0) {
          // EXPERT: Normalize keys to lowercase to handle any spreadsheet header capitalization
          const normalizeKeys = (obj: any) => {
            const normalized: any = {};
            Object.keys(obj).forEach(key => {
              normalized[key.toLowerCase().trim()] = obj[key];
            });
            return normalized;
          };

          // Format raw spreadsheet data back into BlogPost structure
          // VALIDATION: Filter out any empty rows from the Google Sheet
          const globalPosts: BlogPost[] = data
            .map(normalizeKeys)
            .filter((row: any) => row.id && row.title && String(row.id).trim() !== "" && String(row.title).trim() !== "")
            .reverse()
            .map((row: any) => ({
              id: String(row.id),
              title: row.title,
              content: row.content || "",
              author: row.author || "Anonymous",
              authorLink: row.authorlink || row.authorLink, // Covers both possible mappings
              date: row.date || "Unknown Date",
              image: undefined,
              readTime: calculateReadTime(row.content || ""),
            }));
          
          // EXPERT MERGE: Ensure no duplicates if an INITIAL_POST is already in the global sheet
          const globalIds = new Set(globalPosts.map(p => p.id));
          const filteredInitial = INITIAL_POSTS.filter(p => !globalIds.has(p.id));

          setPosts([...globalPosts, ...filteredInitial]);
        }
      } catch (err) {
        console.error("Failed to fetch global posts:", err);
        // On error, we still have INITIAL_POSTS as fallback
      } finally {
        setIsLoadingFeed(false);
      }
    };

    fetchGlobalPosts();

    // EXPERT: Auto-refresh data every 60 seconds to keep the global feed alive
    const interval = setInterval(fetchGlobalPosts, 60000);
    return () => clearInterval(interval);
  }, [GOOGLE_SHEET_URL]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const plainText = stripHtml(text);
    const words = plainText.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const getCategory = (post: BlogPost) => {
    const text = (post.title + " " + post.content).toLowerCase();
    if (text.includes("education") || text.includes("learn")) return "Education";
    if (text.includes("success") || text.includes("empower")) return "Impact";
    if (text.includes("next 50") || text.includes("program")) return "Programs";
    if (text.includes("community") || text.includes("journal")) return "Community";
    return "Foundation";
  };

  const handlePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim()) return;

    if (!GOOGLE_SHEET_URL.trim()) {
      alert("⚠️ Local test mode: Please insert your Google Apps Script URL at the top of Blog.tsx to enable global posting.");
    }

    const newPost: BlogPost = {
      id: `post-${Date.now()}`,
      title: newTitle.trim(),
      author: newAuthor.trim() || "Anonymous",
      authorLink: newAuthorLink.trim() || undefined,
      content: newContent.trim(),
      date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
      image: newImage || undefined,
      readTime: calculateReadTime(newContent),
    };

    setIsPublishing(true);

    try {
      if (GOOGLE_SHEET_URL.trim()) {
        // EXPERT CONNECT: Use no-cors and text/plain to bypass Google security redirects
        // This ensures the data reaches the sheet even if the browser blocks the response.
        await fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({
            id: newPost.id,
            title: newPost.title,
            content: newPost.content,
            author: newPost.author,
            authorLink: newPost.authorLink || "",
            date: newPost.date
          }),
        });
      }
      
      // Update local feed instantly
      setPosts(prev => [newPost, ...prev]);
      setIsComposing(false);
      
      // Reset form
      setNewTitle("");
      setNewAuthor("");
      setNewAuthorLink("");
      setNewContent("");
      setNewImage(null);
    } catch (err) {
      console.error("Failed to hit global backend:", err);
      alert("Could not post to the global network. Check connection.");
    } finally {
      setIsPublishing(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 relative overflow-hidden">
      <RoyalBackground />

      {/* Main Feed */}
      <div className={`container mx-auto px-4 relative z-10 transition-all duration-700 ${readingPost ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}`}>
        
        {/* Header section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Public Journal</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Foundation Network Live
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-4 leading-[1.1] tracking-tight">
              Community <span className="text-accent italic">Stories</span>
            </h1>
            <p className="text-white/60 font-sans text-lg max-w-xl leading-relaxed">
              Insights, updates, and community experiences. All entries are synced instantly across the <span className="text-accent font-bold">Global Foundation Network</span>.
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => setIsComposing(true)}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-foreground text-background font-bold font-sans tracking-wide transition-all shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] hover:bg-accent hover:text-background hover:scale-[1.02] active:scale-[0.98]"
          >
            <PenTool className="w-5 h-5" />
            Write a Story
          </motion.button>
        </div>

        {/* Blog Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-start">
          <AnimatePresence mode="popLayout">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${posts.length % 3 === 1 && i === posts.length - 1 ? 'lg:col-start-2' : ''} ${posts.length % 3 === 2 && i === posts.length - 2 ? 'lg:col-start-1 lg:col-span-1' : ''}`}
              >
                <SpotlightCard
                  className="h-full flex flex-col cursor-pointer hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] transition-shadow"
                >
                  <div className="h-full flex flex-col" onClick={() => setReadingPost(post)}>
                    {post.image && (
                      <div className="w-full h-52 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt="Cover" 
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                        <div className="absolute top-4 left-4">
                          <div className="px-3 py-1 rounded-full bg-accent/90 text-background text-[10px] font-bold uppercase tracking-widest backdrop-blur-sm">
                            {getCategory(post)}
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div className="p-8 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-sans text-foreground/50 mb-6">
                        {post.authorLink && post.authorLink.trim() !== "" ? (
                          <a 
                            href={post.authorLink.trim().startsWith('http') ? post.authorLink.trim() : `https://${post.authorLink.trim()}`} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20 hover:bg-accent hover:text-background transition-all z-20 relative pointer-events-auto"
                          >
                            <User className="w-3.5 h-3.5" /> {post.author}
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 font-medium px-2.5 py-1 rounded-md bg-foreground/5">
                            <User className="w-3.5 h-3.5" /> {post.author}
                          </span>
                        )}
                        <span className="flex items-center gap-1.5 opacity-60">
                          <Calendar className="w-3.5 h-3.5" /> {post.date}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors leading-[1.3]">
                        {post.title}
                      </h2>
                      
                      <p className="text-foreground/50 font-sans leading-relaxed line-clamp-3 mb-8 text-sm">
                        {stripHtml(post.content)}
                      </p>
                      
                      <div className="pt-6 border-t border-border/40 flex items-center justify-between mt-auto">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30">
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-2 text-sm font-bold text-accent group-hover:translate-x-1 transition-transform">
                          Read Story <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Reader Mode (Takes over screen smoothly) */}
      <AnimatePresence>
        {readingPost && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 z-[110] bg-background overflow-y-auto"
          >
            {/* Minimalist Reader Nav */}
            <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border p-4 px-6 flex items-center justify-between">
              <button 
                onClick={() => setReadingPost(null)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-foreground/5 hover:bg-foreground/10 text-foreground transition-colors font-sans font-medium text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back to feed
              </button>
              <div className="bg-white p-1 rounded-lg">
                 <img src={siteConfig.brand.logoPath} alt="Logo" className="h-6 w-auto" />
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-12 pb-32">
              <div className="flex items-center justify-center gap-4 text-sm font-sans text-foreground/40 mb-8 uppercase tracking-widest font-bold">
                <span>{readingPost.date}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span>{readingPost.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground text-center leading-[1.1] mb-12">
                {readingPost.title}
              </h1>

              {readingPost.image && (
                <div className="w-full h-[40vh] md:h-[60vh] rounded-[32px] overflow-hidden mb-12 shadow-2xl border border-border">
                  <img src={readingPost.image} alt="Cover" className="w-full h-full object-cover" />
                </div>
              )}

              <div className="max-w-2xl mx-auto">
                <div className="flex items-center gap-4 mb-12 p-6 rounded-2xl bg-foreground/[0.02] border border-border">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider font-bold mb-1">Written By</p>
                    {readingPost.authorLink ? (
                      <a 
                        href={readingPost.authorLink.startsWith('http') ? readingPost.authorLink : `https://${readingPost.authorLink}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-serif font-bold text-foreground hover:text-accent underline decoration-accent/30 hover:decoration-accent transition-colors"
                      >
                        {readingPost.author}
                      </a>
                    ) : (
                      <p className="text-lg font-serif font-bold text-foreground">{readingPost.author}</p>
                    )}
                  </div>
                </div>

                <div className="prose prose-invert prose-lg prose-amber max-w-none font-sans text-foreground/80 leading-loose prose-p:mb-8 prose-headings:font-serif prose-headings:text-foreground prose-headings:mb-6 prose-strong:text-accent prose-ul:list-disc prose-ol:list-decimal prose-li:my-2">
                  <div dangerouslySetInnerHTML={{ __html: readingPost.content }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Composer Modal */}
      <AnimatePresence>
        {isComposing && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(12px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-background/90"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              className="relative w-full max-w-3xl bg-card border border-border shadow-2xl rounded-[32px] overflow-hidden max-h-[90vh] flex flex-col"
            >
              <div className="px-6 py-5 border-b border-border flex items-center justify-between bg-foreground/[0.02]">
                <h3 className="text-xl font-serif font-bold text-foreground flex items-center gap-2">
                  <PenTool className="w-5 h-5 text-accent" /> Draft New Story
                </h3>
                <button 
                  onClick={() => setIsComposing(false)}
                  className="p-2 rounded-full hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                <form id="composer-form" onSubmit={handlePost} className="p-6 md:p-8 space-y-8">
                  
                  {/* Image Uploader */}
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1 flex items-center gap-2">
                       <ImageIcon className="w-4 h-4" /> Cover Image (Optional)
                    </label>
                    
                    {newImage ? (
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden border border-border group bg-black">
                        <img src={newImage} alt="Preview" className="w-full h-full object-cover opacity-80" />
                        <button 
                          type="button"
                          onClick={() => setNewImage(null)}
                          className="absolute inset-0 m-auto w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all shadow-xl"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className="w-full h-32 rounded-2xl border-2 border-dashed border-border hover:border-accent/50 bg-foreground/[0.02] hover:bg-accent/5 cursor-pointer flex flex-col items-center justify-center transition-all text-foreground/40 hover:text-accent"
                      >
                        <ImageIcon className="w-8 h-8 mb-2" />
                        <span className="font-sans text-sm font-medium">Click to upload banner</span>
                      </div>
                    )}
                    <input 
                      type="file" 
                      accept="image/*" 
                      ref={fileInputRef} 
                      className="hidden" 
                      onChange={handleImageUpload} 
                    />
                  </div>

                  <div className="space-y-1.5">
                    <input
                      type="text"
                      required
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Story Title..."
                      className="w-full px-5 py-4 bg-transparent border-b-2 border-border text-foreground font-serif text-3xl font-bold focus:outline-none focus:border-accent transition-all placeholder:text-foreground/20"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder="Author Name (Optional)"
                        className="w-full px-5 py-3 bg-foreground/[0.02] border border-border rounded-xl text-foreground font-sans focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <input
                        type="text"
                        value={newAuthorLink}
                        onChange={(e) => setNewAuthorLink(e.target.value)}
                        placeholder="LinkedIn / Social Link (Optional)"
                        className="w-full px-5 py-3 bg-foreground/[0.02] border border-border rounded-xl text-foreground font-sans focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 relative">
                    <label className="text-xs font-bold uppercase tracking-widest text-foreground/50 ml-1">
                      Story Content
                    </label>
                    <RichTextEditor
                      value={newContent}
                      onChange={setNewContent}
                      placeholder="Share your amazing story with the world..."
                    />
                  </div>
                </form>
              </div>

              <div className="px-6 py-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 bg-background">
                <p className="text-xs text-foreground/40 font-sans italic max-w-[250px] text-center sm:text-left">
                  {GOOGLE_SHEET_URL ? "Syncing directly to Global Spreadsheets." : "Running in strict 'Local Only' test mode (no URL configured)."}
                </p>
                <button
                  type="submit"
                  form="composer-form"
                  disabled={isPublishing}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-foreground text-background font-bold tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {isPublishing ? "Syncing to Global..." : "Publish Story"} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
