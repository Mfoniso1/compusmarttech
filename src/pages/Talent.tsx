import React from 'react';
import { 
  Users, 
  Search, 
  FileSearch, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  ArrowRight,
  Code2,
  Database,
  Briefcase,
  Github,
  Award,
  ShieldAlert,
  Video
} from 'lucide-react';
import { motion } from 'motion/react';

const CandidateCard = ({ name, role, match, skills, coderScore }: { name: string, role: string, match: number, skills: string[], coderScore?: number }) => (
  <motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all flex flex-col bg-slate-900/40">
    <div className="flex items-center justify-between mb-6">
      <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center">
        <Users className="w-6 h-6 text-slate-400" />
      </div>
      <div className="flex flex-col items-end">
         <div className="text-[9px] font-bold uppercase tracking-widest text-primary mb-1">Human Match</div>
         <div className="text-xl font-display font-bold text-primary">{match}%</div>
      </div>
    </div>
    <h3 className="text-lg font-bold mb-1">{name}</h3>
    <p className="text-slate-500 text-xs mb-6">{role}</p>
    
    <div className="flex flex-wrap gap-2 mb-8 flex-1">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold uppercase tracking-wider text-slate-400">
          {skill}
        </span>
      ))}
    </div>

    {coderScore && (
      <div className="mb-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
         <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
            <div className="flex items-center gap-1"><Github className="w-3 h-3"/> Skill Score</div>
            <div className="text-primary">{coderScore}/100</div>
         </div>
         <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${coderScore}%` }} className="h-full bg-primary" />
         </div>
         <div className="mt-2 text-[8px] opacity-40 italic">Verified via real-world project data</div>
      </div>
    )}

    <button className="flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
       Schedule a Chat <Calendar className="w-4 h-4" />
    </button>
  </motion.div>
);

export const TalentPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 px-6 transition-colors overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
             <Briefcase className="w-4 h-4" /> The Right People for Your Team
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            Smart Matching for <br/><span className="text-primary">Great Talent</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
             From background checks to job simulations, we help African businesses find verified people who can actually do the job well.
          </p>
        </header>

        {/* HR Dashboard & Screening */}
        <section className="grid lg:grid-cols-2 gap-12 mb-24">
           <div className="glass p-10 rounded-[3rem] border-white/5">
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Video className="text-primary" /> Easy Hiring Tools</h3>
              <div className="space-y-4">
                 {[
                   { t: "Automated Choice", d: "Instantly find the best resumes", s: "Active" },
                   {   t: "Video Interviews", d: "Watch candidates from anywhere", s: "Ready" },
                   {   t: "Booking & Scheduling", d: "Directly sync with your calendar", s: "Ready" }
                 ].map(feat => (
                   <div key={feat.t} className="p-6 bg-slate-900/60 rounded-2xl border border-white/5 flex items-center justify-between">
                      <div>
                         <div className="font-bold">{feat.t}</div>
                         <div className="text-[10px] opacity-40 uppercase font-bold tracking-widest">{feat.d}</div>
                      </div>
                      <div className="text-[10px] font-bold text-primary uppercase">{feat.s}</div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="p-10 bg-slate-900 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full"></div>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3"><Award className="text-emerald-500" /> Vetting & Safety</h3>
              <div className="space-y-6">
                 <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1" />
                    <div>
                        <h4 className="font-bold">Official Training Standards</h4>
                        <p className="text-sm opacity-50">Audit-ready reporting that meets local skills development requirements.</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-4">
                    <ShieldAlert className="w-6 h-6 text-indigo-500 mt-1" />
                    <div>
                        <h4 className="font-bold">ID & School Checks</h4>
                        <p className="text-sm opacity-50">We verify identities and educational backgrounds automatically.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Top Talent Matches */}
        <section className="mb-24">
           <div className="flex items-end justify-between mb-12">
              <div>
                 <h2 className="text-3xl font-display font-bold mb-2">Verified Talent</h2>
                 <p className="text-slate-500 text-sm">Real-time ranking based on skills and real-world project results.</p>
              </div>
              <div className="px-6 py-2 bg-white/5 rounded-xl border border-white/10 text-[10px] uppercase font-bold tracking-widest text-slate-500">
                 Source: GitHub / Project Data
              </div>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              <CandidateCard 
                name="David Adeleke"
                role="Senior AI Engineer"
                match={98}
                coderScore={95}
                skills={["PyTorch", "Rust", "LLMOps", "Vector DBs"]}
              />
              <CandidateCard 
                name="Sarah Smith"
                role="Lead Data Scientist"
                match={94}
                coderScore={88}
                skills={["Python", "NLP", "Analytics", "Tableau"]}
              />
              <CandidateCard 
                name="Emmanuel Chinedu"
                role="Full-Stack Developer"
                match={89}
                coderScore={91}
                skills={["React", "Node.js", "PostgreSQL", "Tailwind"]}
              />
           </div>
        </section>
      </div>
    </div>
  );
};
