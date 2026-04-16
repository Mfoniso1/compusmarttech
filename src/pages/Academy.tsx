import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Clock, 
  CheckCircle2, 
  Play, 
  Brain, 
  ShoppingCart, 
  ArrowRight,
  Plus,
  Search,
  Users,
  Calendar,
  BarChart3,
  CreditCard,
  Target
} from 'lucide-react';
import { motion } from 'motion/react';

const courses = [
  {
    id: 1,
    title: "Full-Stack Software Engineering",
    tuition: "$1,200",
    start: "June 1, 2026",
    prereq: "Basic Logic",
    mode: "Full-time Hybrid",
    category: "Development",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 2,
    title: "AI Agents & Workflow Automation",
    tuition: "$950",
    start: "June 10, 2026",
    prereq: "Python Basics",
    mode: "Part-time Remote",
    category: "AI",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 3,
    title: "Cybersecurity & Ethics",
    tuition: "$850",
    start: "May 20, 2026",
    prereq: "IT Basics",
    mode: "Full-time Remote",
    category: "Security",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 4,
    title: "Data Science for Enterprise",
    tuition: "$1,100",
    start: "August 1, 2026",
    prereq: "Stats & Algebra",
    mode: "Full-time Hybrid",
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=400"
  },
  {
    id: 5,
    title: "Generative AI for Marketers",
    tuition: "$450",
    start: "Daily Enrollment",
    prereq: "Marketing Core",
    mode: "Part-time Remote",
    category: "AI",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400"
  }
];

export const AcademyPage = () => {
  const [activeTab, setActiveTab] = useState('browse');
  
  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-32 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
             <GraduationCap className="w-4 h-4" /> Skills for the Future
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            Get Ready for your <br/><span className="text-primary">Next Big Job</span>
          </h1>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('browse')} className={`pb-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'browse' ? 'border-primary text-primary' : 'border-transparent opacity-40 hover:opacity-100'}`}>Course Catalog</button>
            <button onClick={() => setActiveTab('school')} className={`pb-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'school' ? 'border-primary text-primary' : 'border-transparent opacity-40 hover:opacity-100'}`}>For Schools</button>
            <button onClick={() => setActiveTab('lms')} className={`pb-2 text-xs font-bold uppercase tracking-widest border-b-2 transition-all ${activeTab === 'lms' ? 'border-primary text-primary' : 'border-transparent opacity-40 hover:opacity-100'}`}>My Dashboard</button>
          </div>
        </header>

        {activeTab === 'browse' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <motion.div layout key={course.id} className="glass group rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/10 hover:shadow-2xl transition-all h-full flex flex-col">
                <div className="h-52 overflow-hidden relative">
                  <img src={course.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={course.title} />
                  <div className="absolute top-6 left-6 px-4 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[9px] font-bold uppercase">{course.category}</div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-6">{course.title}</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-6 mb-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                     <div className="space-y-1">
                        <div className="opacity-40">Start Date</div>
                        <div className="text-slate-900 dark:text-white">{course.start}</div>
                     </div>
                     <div className="space-y-1">
                        <div className="opacity-40">Learning Mode</div>
                        <div className="text-slate-900 dark:text-white">{course.mode}</div>
                     </div>
                     <div className="space-y-1">
                        <div className="opacity-40">Prerequisites</div>
                        <div className="text-slate-900 dark:text-white">{course.prereq}</div>
                     </div>
                     <div className="space-y-1">
                        <div className="opacity-40">Tuition</div>
                        <div className="text-primary">{course.tuition}</div>
                     </div>
                  </div>
                  <button className="btn-primary w-full justify-center mt-auto">Secure Enrollment</button>
                </div>
              </motion.div>
            ))}
          </div>
        ) : activeTab === 'school' ? (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold">Smart Tools for Schools</h2>
                <p className="text-slate-500 max-w-lg">
                   Easy-to-use software for school owners and teachers. We help with everything from planning lessons to tracking school fees automatically.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                   {[
                     { t: "Easy Grading", d: "Automated report card generation", i: CheckCircle2 },
                     { t: "Smart Timetables", d: "Classes planned with zero conflicts", i: Calendar },
                     { t: "Student Tracking", d: "See how students are progressing", i: BarChart3 },
                     { t: "Lesson Planner", d: "Help for teachers to plan faster", i: BookOpen }
                   ].map(feat => (
                     <div key={feat.t} className="p-6 glass border border-slate-100 dark:border-white/5 rounded-2xl">
                        <feat.i className="w-5 h-5 text-primary mb-4" />
                        <h4 className="font-bold mb-1">{feat.t}</h4>
                        <p className="text-[10px] opacity-60 uppercase">{feat.d}</p>
                     </div>
                   ))}
                </div>
             </div>
             <div className="glass p-10 rounded-[3rem] border-primary/20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
                <h3 className="text-xl font-bold mb-10 flex items-center gap-2"><CreditCard className="w-5 h-5" /> Smart Fee Reminders</h3>
                <div className="space-y-6">
                    <div className="flex items-center justify-between text-xs opacity-60 border-b border-white/5 pb-2 uppercase tracking-widest font-bold">
                       <span>School Account</span>
                       <span>Current Status</span>
                    </div>
                    {[
                      { u: "St. John's Academy", r: "88%", c: "text-emerald-500" },
                      { u: "Lagos Tech High", r: "62%", c: "text-orange-500" },
                      { u: "Elite Academy", r: "45%", c: "text-red-500" }
                    ].map(row => (
                      <div key={row.u} className="flex items-center justify-between font-mono text-sm">
                         <span className="opacity-80">{row.u}</span>
                         <span className={row.c}>Payments on Track</span>
                      </div>
                    ))}
                </div>
                <div className="mt-12 p-4 bg-white/5 rounded-xl text-[10px] italic opacity-60">
                   * Our tools predict which fees might be late and send friendly reminders at the best time to ensure you get paid.
                </div>
             </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
               <div className="glass p-8 rounded-[2rem] border-primary/20 bg-primary/5 flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold">Active Course Progress</h4>
                    <p className="text-sm opacity-60">AI Agents & Workflow Automation</p>
                  </div>
                  <div className="text-2xl font-bold text-primary">74%</div>
               </div>
               <div className="space-y-4">
                  <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-40">Recent Modules</h4>
                  {[1, 2].map(i => (
                    <div key={i} className="glass p-6 rounded-2xl flex items-center justify-between border-white/5">
                       <span className="font-bold">Session {i}: n8n Logic Nodes</span>
                       <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                  ))}
               </div>
            </div>
            <div className="glass p-8 rounded-[2rem] bg-slate-900 text-white">
                <div className="flex items-center gap-3 mb-8">
                   <Brain className="w-6 h-6 text-primary" />
                   <h4 className="font-bold">Tutoring Assistant</h4>
                </div>
                <div className="h-40 bg-white/5 rounded-2xl p-4 mb-6 text-xs italic opacity-60">
                   "Hello student! I notice you reached Module 3. Would you like a recap on API Authentication?"
                </div>
                <button className="w-full py-3 bg-primary text-white rounded-xl font-bold">Chat with AI Tutor</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
