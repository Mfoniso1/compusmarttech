import React from 'react';
import { 
  ShieldCheck, 
  Database, 
  Map, 
  Users, 
  Briefcase, 
  Lock, 
  FileText, 
  GraduationCap, 
  Heart, 
  Globe, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Building2,
  MessageSquare,
  Layers,
  Search
} from 'lucide-react';
import { motion } from 'motion/react';

export const GovernmentPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 px-6 transition-colors overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
             <ShieldCheck className="w-4 h-4" /> Serving the Public Good
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            Better Services for <br/><span className="text-slate-500">Every Citizen</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
             Secure, easy-to-use software for public offices. We help with procurement, staff tracking, and helping citizens get the answers they need.
          </p>
        </header>

        {/* Procurement & Administrative Solutions */}
        <section className="grid lg:grid-cols-2 gap-12 mb-24">
           <motion.div whileHover={{ y: -10 }} className="glass p-10 rounded-[3rem] border border-white/10 hover:border-slate-500 transition-all bg-slate-900/60 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-slate-800 rounded-xl"><FileText className="text-slate-400"/></div>
                 <h3 className="text-2xl font-bold">Project & Fund Tracking</h3>
              </div>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                 Manage every penny correctly. We track project spending in real-time so your office stays audit-ready and transparent.
              </p>
              <div className="space-y-4 flex-1">
                 <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-widest opacity-50 mb-2">
                    <span>Vendor List</span>
                    <span>Status</span>
                 </div>
                 {[
                   { v: "Apex Construction", c: "98%", s: "Verified" },
                   { v: "SafeHealth Supplies", c: "100%", s: "Verified" },
                   { v: "EduTech Systems", c: "74%", s: "Pending" }
                 ].map(row => (
                   <div key={row.v} className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 font-mono text-xs">
                      <span>{row.v}</span>
                      <span className={row.s === 'Verified' ? 'text-emerald-500' : 'text-orange-500'}>{row.s}</span>
                   </div>
                 ))}
              </div>
           </motion.div>

           <motion.div whileHover={{ y: -10 }} className="glass p-10 rounded-[3rem] border border-white/10 hover:border-slate-500 transition-all bg-slate-900/60">
              <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-slate-800 rounded-xl"><ClipboardCheck className="text-slate-400"/></div>
                 <h3 className="text-2xl font-bold">Staff & Payroll</h3>
              </div>
              <p className="text-slate-400 text-sm mb-10 leading-relaxed">
                 Reliable payroll and employment tracking. Our smart tools make sure staff are paid correctly and all labor rules are followed.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-xs opacity-50 mb-2 font-bold uppercase">Staff Records</div>
                    <div className="text-3xl font-display font-bold">142</div>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                    <div className="text-xs opacity-50 mb-2 font-bold uppercase">Accuracy Score</div>
                    <div className="text-3xl font-display font-bold text-emerald-500">99.8%</div>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* AI for Citizen Engagement */}
        <section className="mb-24">
           <div className="glass p-12 rounded-[4rem] border-white/5 bg-gradient-to-tr from-indigo-900/10 via-transparent to-transparent">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.4em]">Multi-Lingual Helpers</div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold">Smart Help for <br/>Your Citizens</h2>
                    <p className="text-slate-400 leading-relaxed text-lg">
                       Our digital assistants answer questions instantly in **Arabic, English, Hausa, Yoruba, and Igbo**. They help people get answers fast, and only send complex ones to your team.
                    </p>
                    <div className="flex gap-4">
                       {['Arabic', 'English', 'Hausa', 'Yoruba', 'Igbo'].map(lang => (
                         <span key={lang} className="px-3 py-1 bg-white/5 rounded-lg border border-white/10 text-[10px] font-bold text-slate-500">{lang}</span>
                       ))}
                    </div>
                 </div>
                 <div className="p-8 bg-slate-900 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="space-y-6">
                       <div className="w-fit p-4 bg-indigo-500/10 rounded-2xl rounded-tl-none border border-indigo-500/10 text-xs">
                          "How do I renew my license?"
                       </div>
                       <div className="w-fit ml-auto p-4 bg-white/10 rounded-2xl rounded-tr-none border border-white/10 text-xs">
                          "You can renew it online here. Need the link?"
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Cross-Ministry Orchestration */}
        <section className="mb-24">
           <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-display font-bold">Connected Departments</h2>
           </div>
           <div className="glass p-12 rounded-[3rem] border-white/5">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="font-mono text-sm space-y-8">
                    <div className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-4"><Layers className="w-5 h-5 opacity-40"/> Health Dept.</div>
                       <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                    </div>
                    <div className="p-6 bg-slate-800/50 rounded-2xl border border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-4"><Layers className="w-5 h-5 opacity-40"/> Edu Dept.</div>
                       <div className="w-3 h-3 bg-indigo-500 rounded-full" />
                    </div>
                 </div>
                 <div className="space-y-6">
                    <h3 className="text-2xl font-bold">Working Together Better</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                       Our tools help different departments share information safely and quickly. This makes government decisions faster and easier for everyone.
                    </p>
                    <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-xs font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-3">
                       <CheckCircle2 className="w-5 h-5" /> Information Sync Active
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
