import React from 'react';
import { 
  Zap, 
  Code, 
  Smartphone, 
  Activity, 
  Users, 
  Video, 
  GraduationCap 
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Product {
  name: string;
  description: string;
  tag: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface Testimonial {
  name: string;
  company: string;
  text: string;
  image: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Playground', href: '/playground' },
  { label: 'Incubator', href: '/incubator' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Lab', href: '/lab' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES: Service[] = [
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

export const PRODUCTS: Product[] = [
  { name: "SmartFlow AI", description: "Automated workflow optimization for enterprise teams.", tag: "Enterprise" },
  { name: "HealthPulse", description: "Digital health platform for clinics and institutional management.", tag: "HealthTech" },
  { name: "EduGenius", description: "Personalized learning paths powered by adaptive AI.", tag: "EdTech" },
];

export const TEAM: TeamMember[] = [
  { name: "Engr. David Ewele", role: "CEO & Chief AI Architect", image: "https://picsum.photos/seed/david/400/400" },
  { name: "Dr. Sarah Chen", role: "Head of Digital Health", image: "https://picsum.photos/seed/sarah/400/400" },
  { name: "Marcus Thorne", role: "Director of Innovation", image: "https://picsum.photos/seed/marcus/400/400" },
  { name: "Elena Rodriguez", role: "Lead Software Engineer", image: "https://picsum.photos/seed/elena/400/400" },
  { name: "Aisha Khan", role: "Head of Digital Education", image: "https://picsum.photos/seed/aisha/400/400" },
];

export const BLOG_POSTS: BlogPost[] = [
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

export const TESTIMONIALS: Testimonial[] = [
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
