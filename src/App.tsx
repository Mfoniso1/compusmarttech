import React, { useState, useEffect, useRef } from 'react';
import { 
  Cpu, 
  Brain, 
  Code, 
  Lightbulb, 
  Rocket, 
  GraduationCap, 
  MessageSquare, 
  Send, 
  X, 
  Menu, 
  Moon, 
  Sun, 
  ChevronRight, 
  Github, 
  Twitter, 
  Linkedin, 
  Facebook,
  Instagram,
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Search,
  Plus,
  LayoutDashboard,
  Play,
  TrendingUp,
  Library,
  ShoppingBag,
  BarChart3,
  Globe,
  Zap,
  Smartphone,
  Activity,
  Video,
  Heart,
  ShieldCheck,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Product {
  name: string;
  description: string;
  tag: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface Testimonial {
  name: string;
  company: string;
  text: string;
  image: string;
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Playground', href: '#playground' },
  { label: 'Incubator', href: '#incubator' },
  { label: 'Marketplace', href: '#marketplace' },
  { label: 'Lab', href: '#lab' },
  { label: 'Dashboards', href: '#dashboards' },
  { label: 'Investors', href: '#investors' },
  { label: 'Careers', href: '#careers' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
];

const SERVICES: Service[] = [
  {
    title: "AI Automation Systems",
    description: "Intelligent automation solutions for SMEs and enterprises to enhance operational efficiency.",
    icon: <Zap className="w-8 h-8 text-primary" />
  },
  {
    title: "Enterprise Software",
    description: "Custom enterprise software development tailored to complex business requirements.",
    icon: <Code className="w-8 h-8 text-secondary" />
  },
  {
    title: "App Development",
    description: "High-performance mobile applications for iOS and Android platforms.",
    icon: <Smartphone className="w-8 h-8 text-accent" />
  },
  {
    title: "Digital Health Platforms",
    description: "Innovation in healthcare delivery for clinics and institutions through digital platforms.",
    icon: <Activity className="w-8 h-8 text-primary" />
  },
  {
    title: "Talent Hunt & Development",
    description: "Equipping and developing the next generation of digital leaders and tech talent.",
    icon: <Users className="w-8 h-8 text-secondary" />
  },
  {
    title: "Media & Content Creation",
    description: "Professional media production and content creation services for the digital age.",
    icon: <Video className="w-8 h-8 text-accent" />
  },
  {
    title: "Digital Skills Training",
    description: "Coding, AI, and digital skills training programs to solve real-world problems.",
    icon: <GraduationCap className="w-8 h-8 text-primary" />
  }
];

const PRODUCTS: Product[] = [
  { name: "SmartFlow AI", description: "Automated workflow optimization for enterprise teams.", tag: "Enterprise" },
  { name: "HealthPulse", description: "Digital health platform for clinics and institutional management.", tag: "HealthTech" },
  { name: "EduGenius", description: "Personalized learning paths powered by adaptive AI.", tag: "EdTech" },
];

const TEAM: TeamMember[] = [
  { name: "Engr. David Ewele", role: "CEO & Chief AI Architect", image: "https://picsum.photos/seed/david/400/400" },
  { name: "Dr. Sarah Chen", role: "Head of Digital Health", image: "https://picsum.photos/seed/sarah/400/400" },
  { name: "Marcus Thorne", role: "Director of Innovation", image: "https://picsum.photos/seed/marcus/400/400" },
  { name: "Elena Rodriguez", role: "Lead Software Engineer", image: "https://picsum.photos/seed/elena/400/400" },
  { name: "Aisha Khan", role: "Head of Digital Education", image: "https://picsum.photos/seed/aisha/400/400" },
];

const BLOG_POSTS: BlogPost[] = [
  {
    title: "The Future of Generative AI in Enterprise",
    excerpt: "How large language models are reshaping the way businesses operate and automate complex workflows.",
    date: "March 15, 2026",
    category: "AI Trends",
    image: "https://picsum.photos/seed/ai-future/600/400"
  },
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt: "Best practices for designing robust and high-performance backend systems for modern applications.",
    date: "March 10, 2026",
    category: "Engineering",
    image: "https://picsum.photos/seed/node-scale/600/400"
  },
  {
    title: "Digital Transformation: A Strategic Guide",
    excerpt: "Why digital transformation is no longer optional and how to lead your organization through change.",
    date: "March 5, 2026",
    category: "Consulting",
    image: "https://picsum.photos/seed/digital-trans/600/400"
  },
  {
    title: "Mastering React 19 Features",
    excerpt: "A deep dive into the latest updates in React 19 and how they improve developer experience.",
    date: "February 28, 2026",
    category: "Development",
    image: "https://picsum.photos/seed/react19/600/400"
  },
  {
    title: "Cybersecurity in the Age of AI",
    excerpt: "Protecting your digital assets against increasingly sophisticated AI-powered threats.",
    date: "February 22, 2026",
    category: "Security",
    image: "https://picsum.photos/seed/cybersec/600/400"
  },
  {
    title: "The Rise of Edge Computing",
    excerpt: "Why processing data closer to the source is becoming critical for real-time AI applications.",
    date: "February 15, 2026",
    category: "Infrastructure",
    image: "https://picsum.photos/seed/edge/600/400"
  },
  {
    title: "UX Design Principles for AI Interfaces",
    excerpt: "How to design intuitive and trustworthy user experiences for AI-powered products.",
    date: "February 10, 2026",
    category: "Design",
    image: "https://picsum.photos/seed/ux-ai/600/400"
  },
  {
    title: "Sustainable Tech: Green Coding Practices",
    excerpt: "Reducing the carbon footprint of your software through efficient algorithms and infrastructure.",
    date: "February 5, 2026",
    category: "Sustainability",
    image: "https://picsum.photos/seed/green-tech/600/400"
  },
  {
    title: "The Impact of 5G on IoT Ecosystems",
    excerpt: "How high-speed connectivity is unlocking new possibilities for connected devices and smart cities.",
    date: "January 30, 2026",
    category: "Connectivity",
    image: "https://picsum.photos/seed/5g-iot/600/400"
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    name: "James Wilson",
    company: "TechFlow Systems",
    text: "CompuSmart transformed our legacy infrastructure into a modern, AI-driven powerhouse. Their expertise is unmatched.",
    image: "https://picsum.photos/seed/james/100/100"
  },
  {
    name: "Emily Blunt",
    company: "EduNext Global",
    text: "The personalized learning platform built by CompuSmart has increased our student engagement by over 40%.",
    image: "https://picsum.photos/seed/emily/100/100"
  }
];

// --- Components ---

const StatCounter = ({ value, label, suffix = '', icon: Icon }: { value: number, label: string, suffix?: string, icon: any }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, hasStarted]);

  return (
    <motion.div 
      ref={ref} 
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex items-center gap-4 p-6 bg-white/10 dark:bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:shadow-primary/20 transition-all duration-300 group"
    >
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-3xl font-bold font-display tracking-tight text-slate-900 dark:text-white">{count}{suffix}</div>
        <div className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-[0.2em] font-bold">{label}</div>
      </div>
    </motion.div>
  );
};

const Navbar = ({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Cpu className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">CompuSmart</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#incubator" className="btn-primary py-2 text-sm">
            Get Started
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 dark:border-slate-800 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  {item.label}
                </a>
              ))}
              <a href="#incubator" className="btn-primary justify-center">
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello! I'm the CompuSmart AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are the AI assistant for CompuSmart Technologies. You are professional, helpful, and knowledgeable about the company's services (AI, Software Dev, Consulting, Incubation, EdTech). Answer questions about the company based on this profile: CompuSmart is an innovative IT and AI company focused on discovering brilliant ideas and building intelligent solutions. If asked about things outside the company, try to relate it back or answer politely.",
        }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'ai', text: "I'm having some trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-80 md:w-96 h-[500px] mb-4 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="bg-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span className="font-medium">CompuSmart AI</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-slate-100 dark:bg-slate-800 rounded-tl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none animate-pulse">
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
};

const BlogSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-8 w-full">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="glass rounded-3xl overflow-hidden animate-pulse">
        <div className="h-56 bg-slate-200 dark:bg-slate-800" />
        <div className="p-8 space-y-4">
          <div className="flex justify-between">
            <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>
          <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded" />
          <div className="space-y-2">
            <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded" />
            <div className="h-3 w-2/3 bg-slate-200 dark:bg-slate-800 rounded" />
          </div>
          <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded mt-4" />
        </div>
      </div>
    ))}
  </div>
);

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // AI Demo State
  const [activeDemo, setActiveDemo] = useState(0);
  const [isDemoLoading, setIsDemoLoading] = useState(false);

  const handleDemoChange = (index: number) => {
    if (index === activeDemo) return;
    setIsDemoLoading(true);
    setActiveDemo(index);
    setTimeout(() => setIsDemoLoading(false), 800);
  };

  // Blog State
  const [blogSearch, setBlogSearch] = useState('');
  const [blogPage, setBlogPage] = useState(1);
  const [isBlogLoading, setIsBlogLoading] = useState(false);
  const POSTS_PER_PAGE = 3;

  useEffect(() => {
    setIsBlogLoading(true);
    const timer = setTimeout(() => {
      setIsBlogLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [blogSearch, blogPage]);

  const filteredPosts = BLOG_POSTS.filter(post => 
    post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
    post.category.toLowerCase().includes(blogSearch.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice((blogPage - 1) * POSTS_PER_PAGE, blogPage * POSTS_PER_PAGE);

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={() => setIsDark(!isDark)} />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Particles (Simplified) */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Rocket className="w-3 h-3" />
              Innovation at Scale
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Africa's Leading Provider of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">AI-Powered Solutions</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-lg">
              CompuSmart Technologies Ltd builds intelligent systems that enhance operational efficiency, strengthen healthcare delivery, and equip the next generation of digital leaders.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Explore Solutions <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#incubator" className="btn-secondary">
                Submit Your Idea
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <div className="relative rounded-3xl overflow-hidden glass p-2">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" 
                  alt="AI Visualization" 
                  className="rounded-2xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Repositioned Stats Section */}
        <div className="max-w-7xl mx-auto mt-20 px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            <StatCounter value={99} label="AI Accuracy" suffix="%" icon={Brain} />
            <StatCounter value={500} label="Apps Built" suffix="+" icon={Code} />
            <StatCounter value={50} label="Users Impacted" suffix="k+" icon={Users} />
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">Trusted by Global Innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale">
            {['Microsoft', 'Google', 'OpenAI', 'NVIDIA', 'Meta'].map((brand) => (
              <span key={brand} className="text-2xl font-display font-bold tracking-tighter">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50 overflow-hidden relative">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 -z-10" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Globe className="w-4 h-4" />
                Rooted in Africa, Global in Standards
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
                Empowering the Future Through <span className="text-primary">Intelligence</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  CompuSmart Technologies Ltd is an AI-driven technology powerhouse. Our <span className="text-slate-900 dark:text-white font-bold">Mission</span> is to develop and deploy practical, scalable AI-driven systems and world-class digital training programs that solve real-world problems across business, healthcare, and education sectors.
                </p>
                <p>
                  We are driven by a <span className="text-slate-900 dark:text-white font-bold">Vision</span> to become Africa’s leading provider of AI-powered technology solutions and digital education, delivering innovation that competes on the global stage.
                </p>
                <p>
                  From software and app development to digital health innovation, we build intelligent systems that enhance operational efficiency, automate complex workflows, and equip the next generation of digital leaders.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass p-10 rounded-[2.5rem] relative z-10 border border-white/20 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <ShieldCheck className="text-primary w-8 h-8" />
                  Our Commitment
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 italic text-lg">
                  "We are committed to innovation, excellence, integrity, accessibility, and measurable impact."
                </p>
                <ul className="grid grid-cols-1 gap-4">
                  {[
                    "Innovation & Excellence",
                    "Integrity & Transparency",
                    "Accessibility for All",
                    "Measurable Social Impact",
                    "Global Quality Standards"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wider">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative Glows */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] -z-10" />
            </motion.div>
          </div>

          {/* Our Approach Subsection */}
          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-display font-bold mb-4">Our Approach</h3>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We follow a rigorous, data-driven methodology to ensure every solution we build is impactful, scalable, and future-proof.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Discovery & Insight",
                  desc: "We deep-dive into the problem space, gathering data and insights to understand the core challenges.",
                  icon: <Search className="w-6 h-6" />
                },
                {
                  step: "02",
                  title: "Strategic Design",
                  desc: "Our architects design the AI models and system infrastructure tailored to specific business goals.",
                  icon: <LayoutDashboard className="w-6 h-6" />
                },
                {
                  step: "03",
                  title: "Agile Development",
                  desc: "We build iteratively, ensuring continuous testing and refinement of the intelligent systems.",
                  icon: <Code className="w-6 h-6" />
                },
                {
                  step: "04",
                  title: "Impact & Scale",
                  desc: "We deploy solutions and monitor performance, optimizing for long-term measurable impact and growth.",
                  icon: <TrendingUp className="w-6 h-6" />
                }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="glass p-8 rounded-3xl h-full border border-white/10 hover:border-primary/30 transition-colors">
                    <div className="text-5xl font-display font-black text-primary/10 mb-6 group-hover:text-primary/20 transition-colors">
                      {item.step}
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                      {item.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-primary/30" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Services</h2>
              <p className="text-slate-600 dark:text-slate-400">
                We provide a comprehensive suite of digital services designed to help you thrive in the AI era.
              </p>
            </div>
            <a href="#contact" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.1 
                }}
                variants={{
                  hover: { y: -12, scale: 1.04 }
                }}
                className="group glass p-8 rounded-3xl hover:text-white transition-all duration-500 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:shadow-primary/30"
              >
                {/* Background Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-primary/5 opacity-50 group-hover:opacity-100 group-hover:from-primary/80 group-hover:to-primary transition-all duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-3xl transition-colors duration-500" />
                
                {/* Shimmer Effect */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

                <div className="relative z-10">
                  <motion.div 
                    variants={{
                      hover: { 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.2,
                        transition: { duration: 0.5 }
                      }
                    }}
                    className="mb-6 group-hover:text-white transition-all duration-500"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p className="text-sm opacity-70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Dynamic Background Glow */}
                <div className="absolute -right-12 -bottom-12 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
                <div className="absolute -left-12 -top-12 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Demo Playground */}
      <section id="playground" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">AI Demo Playground</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Experience the power of our AI models in real-time. Try out our latest innovations in this interactive sandbox.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { title: "Sentiment Analysis", desc: "Real-time emotional intelligence for text data.", icon: <Brain className="w-6 h-6 text-primary" /> },
                { title: "Image Generation", desc: "Create stunning visuals from simple text prompts.", icon: <Zap className="w-6 h-6 text-secondary" /> },
                { title: "Code Assistant", desc: "Intelligent code completion and debugging.", icon: <Code className="w-6 h-6 text-accent" /> }
              ].map((demo, i) => (
                <motion.div 
                  key={i}
                  onClick={() => handleDemoChange(i)}
                  whileHover={{ x: 10 }}
                  className={`flex gap-6 p-6 glass rounded-3xl cursor-pointer group transition-all ${activeDemo === i ? 'ring-2 ring-primary bg-primary/5' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-all ${activeDemo === i ? 'bg-primary text-white' : 'bg-white dark:bg-slate-800 group-hover:bg-primary group-hover:text-white'}`}>
                    {demo.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{demo.title}</h3>
                    <p className="text-sm text-slate-500">{demo.desc}</p>
                  </div>
                  <div className={`ml-auto self-center transition-opacity ${activeDemo === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <Play className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="relative aspect-square glass rounded-[40px] overflow-hidden p-8 flex flex-col shadow-2xl border-white/20 bg-slate-900">
              <AnimatePresence mode="wait">
                {isDemoLoading ? (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/80 backdrop-blur-md z-20"
                  >
                    <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
                    <p className="text-sm font-bold uppercase tracking-widest text-primary animate-pulse">Initializing Model...</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    key={activeDemo}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="h-full flex flex-col text-white"
                  >
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 text-xs font-mono opacity-40">terminal — compusmart-ai-v4.2</span>
                    </div>
                    
                    <div className="flex-1 font-mono text-sm space-y-4 overflow-y-auto">
                      <div className="flex gap-2">
                        <span className="text-primary font-bold">❯</span>
                        <span className="text-slate-400">load_model --type="{activeDemo === 0 ? 'sentiment' : activeDemo === 1 ? 'image' : 'code'}"</span>
                      </div>
                      <div className="text-emerald-500">Model loaded successfully. Ready for input.</div>
                      
                      {activeDemo === 0 && (
                        <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="opacity-50 mb-2 italic">"I absolutely love the new automation features! It saved us 20 hours a week."</div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-500 rounded text-[10px] font-bold">POSITIVE</span>
                            <span className="text-[10px] opacity-40">Confidence: 99.8%</span>
                          </div>
                        </div>
                      )}

                      {activeDemo === 1 && (
                        <div className="space-y-4">
                          <div className="opacity-50 italic">"A futuristic city with flying cars and neon lights, digital art style."</div>
                          <div className="grid grid-cols-2 gap-2">
                            <div className="aspect-square bg-white/5 rounded-lg animate-pulse" />
                            <div className="aspect-square bg-white/5 rounded-lg animate-pulse" />
                          </div>
                        </div>
                      )}

                      {activeDemo === 2 && (
                        <div className="p-4 bg-black/40 text-slate-300 rounded-xl overflow-x-auto">
                          <pre className="text-[10px]">
                            <code>{`function optimizeWorkflow(tasks) {
  return tasks
    .filter(t => !t.completed)
    .sort((a, b) => b.priority - a.priority);
}`}</code>
                          </pre>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 p-4 bg-primary/10 rounded-2xl flex items-center justify-between">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider">Interactive Mode</span>
                      <button className="btn-primary py-2 px-4 text-xs">Try Live</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* AI Chatbot Assistant Section */}
      <section id="chatbot" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary blur-2xl opacity-20 rounded-full animate-pulse" />
                <div className="relative glass p-8 rounded-[2.5rem] border-primary/20">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
                      <MessageSquare className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold">CompuSmart Assistant</h3>
                      <div className="flex items-center gap-2 text-xs text-green-500 font-bold">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        Online & Ready
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4 mb-8">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none text-sm">
                        How can I help you today?
                      </div>
                    </div>
                    <div className="flex gap-3 justify-end">
                      <div className="bg-primary text-white p-4 rounded-2xl rounded-tr-none text-sm">
                        Tell me about your AI incubator.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                        <MessageSquare className="w-4 h-4 text-primary" />
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none text-sm">
                        Our AI Idea Incubator helps innovators turn visions into reality with technical mentorship and rapid prototyping.
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input type="text" className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-full px-6 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Ask me anything..." />
                    <button className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Your Personal <br/><span className="text-primary">AI Assistant</span></h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8">
                Our intelligent chatbot is more than just a support tool. It's a gateway to our entire ecosystem, helping you navigate services, products, and research.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 glass rounded-3xl">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60">Availability</div>
                </div>
                <div className="p-6 glass rounded-3xl">
                  <div className="text-2xl font-bold text-secondary mb-1">50+</div>
                  <div className="text-xs uppercase tracking-widest font-bold opacity-60">Languages</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Idea Incubator */}
      <section id="incubator" className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">AI Idea <br/><span className="text-primary">Incubator</span></h2>
              <p className="text-slate-400 mb-8 text-lg">
                Have a brilliant idea? We help innovators turn their visions into reality. Submit your idea today and let's build the future together.
              </p>
              <ul className="space-y-4">
                {[
                  "Technical Mentorship",
                  "Resource Allocation",
                  "Rapid Prototyping",
                  "Market Strategy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass bg-white/5 border-white/10 p-8 rounded-3xl">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-60">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Idea Title</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. AI-powered Health Tracker" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Category</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                    <option className="bg-slate-900">Artificial Intelligence</option>
                    <option className="bg-slate-900">Software Development</option>
                    <option className="bg-slate-900">EdTech</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-60">Description</label>
                  <textarea className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Tell us more about your vision..."></textarea>
                </div>
                <button className="w-full btn-primary justify-center py-4">
                  Submit Your Idea <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Marketplace */}
      <section id="marketplace" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">AI Product Marketplace</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
                Discover and acquire cutting-edge AI software solutions tailored for your business needs.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-bold">
                <ShoppingBag className="w-4 h-4 text-primary" />
                24 Active Products
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass rounded-[2rem] overflow-hidden group flex flex-col h-full"
              >
                <div className="h-56 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center relative overflow-hidden">
                  <Cpu className="w-20 h-20 opacity-10 group-hover:scale-125 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {product.tag}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 flex-1">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
                    <div className="text-lg font-bold">$99<span className="text-xs opacity-50 font-normal">/mo</span></div>
                    <button className="btn-primary py-2 px-4 text-xs">
                      Get Started
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Dashboards Section */}
      <section id="dashboards" className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Interactive Dashboards</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Monitor your AI performance with our real-time analytics suite. Data-driven insights at your fingertips.
            </p>
          </div>

          <div className="glass bg-white/5 border-white/10 p-8 rounded-[3rem] overflow-hidden">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {[
                { label: "Active Users", val: "12.5k", trend: "+15%", color: "text-primary" },
                { label: "AI Requests", val: "1.2M", trend: "+22%", color: "text-secondary" },
                { label: "Avg Latency", val: "45ms", trend: "-12%", color: "text-accent" },
                { label: "Accuracy", val: "99.9%", trend: "+0.1%", color: "text-yellow-500" }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/5">
                  <div className="text-xs uppercase tracking-widest font-bold opacity-40 mb-2">{stat.label}</div>
                  <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.val}</div>
                  <div className="text-[10px] font-bold text-green-500">{stat.trend} from last month</div>
                </div>
              ))}
            </div>

            <div className="h-80 bg-white/5 rounded-3xl border border-white/5 flex items-end justify-between p-8 gap-4">
              {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-lg relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold bg-white text-black px-2 py-1 rounded">
                    {h}%
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex items-center justify-between text-xs font-bold opacity-40 uppercase tracking-widest">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Relations Section */}
      <section id="investors" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <TrendingUp className="w-4 h-4" />
                Investor Relations
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Investing in the <br/><span className="text-primary">Future of Intelligence</span></h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
                CompuSmart is scaling rapidly. Join us in our mission to democratize advanced AI and build a smarter, more efficient world.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  { label: "Annual Growth", val: "300%", icon: <TrendingUp className="w-5 h-5" /> },
                  { label: "Global Reach", val: "45 Countries", icon: <Globe className="w-5 h-5" /> },
                  { label: "Patent Portfolio", val: "120+ Filed", icon: <Briefcase className="w-5 h-5" /> }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-sm font-bold">{item.val}</div>
                      <div className="text-xs opacity-60">{item.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary px-10 py-5">
                Download Investor Deck <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6 mt-12">
                <div className="glass p-8 rounded-[2.5rem] border-primary/20">
                  <BarChart3 className="w-10 h-10 text-primary mb-4" />
                  <h4 className="font-bold mb-2">Q4 Report</h4>
                  <p className="text-xs text-slate-500 mb-4">Financial performance and growth metrics for the last quarter.</p>
                  <a href="#" className="text-xs font-bold text-primary hover:underline">Download PDF</a>
                </div>
                <div className="glass p-8 rounded-[2.5rem] border-secondary/20">
                  <Users className="w-10 h-10 text-secondary mb-4" />
                  <h4 className="font-bold mb-2">Shareholder Meeting</h4>
                  <p className="text-xs text-slate-500 mb-4">Join our upcoming annual general meeting online.</p>
                  <a href="#" className="text-xs font-bold text-secondary hover:underline">Register Now</a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="glass p-8 rounded-[2.5rem] border-accent/20">
                  <Globe className="w-10 h-10 text-accent mb-4" />
                  <h4 className="font-bold mb-2">ESG Impact</h4>
                  <p className="text-xs text-slate-500 mb-4">Our commitment to ethical AI and environmental sustainability.</p>
                  <a href="#" className="text-xs font-bold text-accent hover:underline">Read Report</a>
                </div>
                <div className="glass p-8 rounded-[2.5rem] border-primary/20 bg-primary text-white">
                  <TrendingUp className="w-10 h-10 mb-4" />
                  <h4 className="font-bold mb-2">Stock Info</h4>
                  <p className="text-xs opacity-80 mb-4">Real-time stock performance and market capitalization.</p>
                  <a href="#" className="text-xs font-bold hover:underline">View Ticker</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-10 rounded-[3rem] border-secondary/20 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="text-secondary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Research & Education</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                We believe in sharing knowledge. Our educational programs provide AI training and digital skills to the next generation of innovators.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8">
                {['AI Fundamentals', 'Advanced ML', 'Ethical AI', 'Cloud Architecture', 'Data Science', 'Neural Networks'].map(course => (
                  <li key={course} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    {course}
                  </li>
                ))}
              </ul>
              <button className="btn-secondary">View Courses</button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                  alt="Education" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Lab & Research Library */}
      <section id="lab" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="glass p-10 rounded-[3rem] border-primary/20">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Search className="text-primary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Innovation Lab</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Our R&D center is where we experiment with the latest technologies. From quantum computing to advanced robotics, we explore the frontiers of tech.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-primary mb-1 text-sm">Quantum AI</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Processing</div>
                </div>
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700">
                  <div className="font-bold text-secondary mb-1 text-sm">Neural Links</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest font-bold">Interface</div>
                </div>
              </div>
              <button className="btn-primary">Explore Research</button>
            </div>

            <div className="glass p-10 rounded-[3rem] border-secondary/20">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <Library className="text-secondary w-8 h-8" />
              </div>
              <h2 className="text-3xl font-display font-bold mb-4">Research Library</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Access our extensive collection of peer-reviewed publications, whitepapers, and technical reports on AI ethics and implementation.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Ethical Frameworks for Autonomous Systems",
                  "Optimizing Neural Networks for Edge Devices",
                  "The Future of Human-AI Collaboration"
                ].map((paper, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 group cursor-pointer">
                    <div className="text-xs font-bold truncate pr-4">{paper}</div>
                    <ArrowRight className="w-4 h-4 text-secondary group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
              <button className="btn-secondary">Browse Library</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What Our Partners Say</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Real feedback from industry leaders we've collaborated with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "David Thorne", role: "CEO, TechFlow", text: "CompuSmart transformed our data processing with their custom AI models. The efficiency gains were immediate." },
              { name: "Elena Vance", role: "Director, InnovateX", text: "The incubator program provided the technical backbone we needed to launch our startup successfully." },
              { name: "Marcus Wright", role: "Head of R&D, FutureSystems", text: "Their research in neural networks is truly world-class. A vital partner for our innovation efforts." }
            ].map((t, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="glass p-8 rounded-3xl relative">
                <div className="text-primary mb-4">
                  {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-slate-600 dark:text-slate-400 italic mb-6">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full" />
                  <div>
                    <div className="font-bold text-sm">{t.name}</div>
                    <div className="text-xs opacity-60">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Common Questions</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Everything you need to know about working with CompuSmart.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does a typical AI implementation take?", a: "Depending on complexity, most projects range from 4 to 12 weeks from discovery to deployment." },
              { q: "Do you support early-stage startups?", a: "Yes, our AI Idea Incubator is specifically designed to support innovators at the earliest stages." },
              { q: "Are your educational programs certified?", a: "Yes, all our courses come with industry-recognized certifications upon completion." },
              { q: "Can I integrate your AI solutions into existing software?", a: "Absolutely. We specialize in building custom APIs and middleware for seamless integration." }
            ].map((item, i) => (
              <div key={i} className="glass p-6 rounded-2xl">
                <h4 className="font-bold mb-2 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-primary" />
                  {item.q}
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What Our Clients Say</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              We take pride in delivering excellence. Here's what some of our partners have to say.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="glass p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-center md:items-start"
              >
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-20 h-20 rounded-2xl object-cover grayscale"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <p className="text-lg italic text-slate-600 dark:text-slate-400 mb-4">
                    "{t.text}"
                  </p>
                  <h4 className="font-bold">{t.name}</h4>
                  <div className="text-sm text-primary">{t.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Latest Insights</h2>
              <p className="text-slate-600 dark:text-slate-400">
                Stay updated with the latest trends in AI, software engineering, and digital transformation.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search articles..."
                value={blogSearch}
                onChange={(e) => {
                  setBlogSearch(e.target.value);
                  setBlogPage(1);
                }}
                className="w-full bg-slate-100 dark:bg-slate-800 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 min-h-[500px]">
            <AnimatePresence mode="wait">
              {isBlogLoading ? (
                <motion.div 
                  key="skeleton"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-3"
                >
                  <BlogSkeleton />
                </motion.div>
              ) : paginatedPosts.length > 0 ? (
                paginatedPosts.map((post, i) => (
                  <motion.div 
                    key={post.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass rounded-3xl overflow-hidden group cursor-pointer h-full flex flex-col"
                  >
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-primary uppercase tracking-widest">{post.category}</span>
                        <span className="text-xs text-slate-500">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-sm font-bold mt-auto">
                        Read More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 flex flex-col items-center justify-center py-20 text-slate-500">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p className="text-lg font-medium">No articles found matching your search.</p>
                </div>
              )}
            </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-4">
              <button 
                onClick={() => setBlogPage(prev => Math.max(1, prev - 1))}
                disabled={blogPage === 1}
                className="p-3 rounded-full glass hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-all"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </button>
              
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setBlogPage(i + 1)}
                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                      blogPage === i + 1 
                        ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                        : 'glass hover:bg-primary/10'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setBlogPage(prev => Math.min(totalPages, prev + 1))}
                disabled={blogPage === totalPages}
                className="p-3 rounded-full glass hover:bg-primary hover:text-white disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-24 px-6 bg-primary text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Join the Future of Tech</h2>
            <p className="text-white/80 text-lg mb-8">
              We're always looking for brilliant minds to join our mission. Explore open positions in AI research, software engineering, and more.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-bold hover:bg-slate-100 transition-colors">
                View Openings
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-bold hover:bg-white/20 transition-colors">
                Internships
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Briefcase className="w-64 h-64 opacity-20" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Users className="w-4 h-4" />
              Our Leadership
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Meet Our Experts</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A diverse team of world-class engineers, researchers, and visionaries building the next generation of intelligent solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {TEAM.map((member, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass p-6 rounded-3xl text-center hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative mb-6 mx-auto w-32 h-32 md:w-40 md:h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="relative z-10 w-full h-full rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">{member.role}</p>
                
                <div className="mt-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Get in Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">info@compusmart.tech</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-slate-600 dark:text-slate-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Visit Our HQ</h4>
                    <p className="text-slate-600 dark:text-slate-400">Innovation Hub, Yaba, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 h-80 bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden relative border border-slate-200 dark:border-slate-800 shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.053074991616!2d3.377125614769032!3d6.514930995287383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8cf0039965b5%3A0x7d288d75a896d8e8!2sYaba%2C%20Lagos!5e0!3m2!1sen!2sng!4v1634567890123!5m2!1sen!2sng" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CompuSmart HQ Location"
                  className="opacity-90 hover:opacity-100 transition-opacity duration-500"
                ></iframe>
                <div className="absolute top-4 right-4 glass px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest pointer-events-none shadow-lg">
                  Lagos HQ
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl">
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider opacity-60">Full Name</label>
                  <input 
                    id="contact-name"
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    required
                    className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`} 
                    placeholder="Your Name" 
                  />
                  {errors.name && (
                    <p id="name-error" className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider opacity-60">Email Address</label>
                  <input 
                    id="contact-email"
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                    className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`} 
                    placeholder="your@email.com" 
                  />
                  {errors.email && (
                    <p id="email-error" className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.email}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider opacity-60">Subject</label>
                  <input 
                    id="contact-subject"
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    required
                    className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`} 
                    placeholder="How can we help?" 
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.subject}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider opacity-60">Message</label>
                  <textarea 
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    required
                    className={`w-full bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3 h-32 focus:outline-none focus:ring-2 ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-primary'}`} 
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <p id="message-error" className="text-red-500 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" aria-hidden="true" /> {errors.message}
                    </p>
                  )}
                </div>
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="w-full btn-primary justify-center py-4 relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <div aria-live="polite" className="mt-4">
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-500 text-sm font-medium flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                        Message sent successfully! We'll get back to you soon.
                      </motion.div>
                    )}
                    {submitStatus === 'error' && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-500 text-sm font-medium flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" aria-hidden="true" />
                        Something went wrong. Please try again later.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Stay Informed</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Subscribe to our newsletter for the latest insights on AI, technology, and innovation.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary justify-center">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold tracking-tight">CompuSmart</span>
              </div>
              <p className="text-slate-500 text-sm max-w-sm mb-6">
                CompuSmart Technologies Ltd is an AI-driven technology company focused on software development, App development, SM/Business solutions, digital health innovation, and digital education.
              </p>
              <div className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-400">Follow Us</div>
              <div className="flex gap-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "https://twitter.com/compusmart" },
                  { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/company/compusmart" },
                  { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "https://github.com/compusmart" },
                  { icon: <Facebook className="w-5 h-5" />, label: "Facebook", href: "https://facebook.com/compusmart" },
                  { icon: <Instagram className="w-5 h-5" />, label: "Instagram", href: "https://instagram.com/compusmart" }
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:text-primary hover:bg-primary/10 transition-all duration-300 shadow-sm"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                {NAV_ITEMS.slice(0, 4).map(item => (
                  <li key={item.label}><a href={item.href} className="hover:text-primary transition-colors">{item.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Support Center</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 uppercase tracking-widest font-bold">
            <div>© 2026 CompuSmart Technologies. All rights reserved.</div>
            <div className="flex gap-8">
              <span>Made with Intelligence</span>
              <span>v1.0.0</span>
            </div>
          </div>
        </div>
      </footer>

      <ChatBot />
    </div>
  );
}
