import React from 'react';
import { 
  Video, 
  Camera, 
  PenTool, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Globe, 
  Calendar, 
  ArrowRight,
  Maximize2,
  Share2,
  Sparkles,
  Zap
} from 'lucide-react';
import { motion } from 'motion/react';

const CaseStudy = ({ title, results, brief }: { title: string, results: string, brief: string }) => (
  <motion.div whileHover={{ y: -5 }} className="glass p-10 rounded-[3rem] border border-white/10 hover:border-primary/50 transition-all bg-slate-900/40">
    <div className="text-[10px] font-bold text-primary uppercase tracking-[0.4em] mb-4">Real Project Success</div>
    <h3 className="text-2xl font-bold mb-6">{title}</h3>
    
    <div className="space-y-6 mb-8">
      <div>
        <div className="text-[10px] uppercase font-bold opacity-40 mb-2">The Goal</div>
        <p className="text-sm text-slate-400 leading-relaxed">{brief}</p>
      </div>
      <div>
        <div className="text-[10px] uppercase font-bold opacity-40 mb-2">Our Approach</div>
        <p className="text-sm text-slate-400 leading-relaxed italic">We looked at what the customers needed and made the digital tools simpler and better.</p>
      </div>
      <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20">
        <div className="text-[10px] uppercase font-bold text-primary mb-2">The Results</div>
        <div className="text-xl font-display font-bold">{results}</div>
      </div>
    </div>

    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
       See How We Did It <ArrowRight className="w-4 h-4"/>
    </button>
  </motion.div>
);

export const MediaPage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 px-6 transition-colors overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="flex items-center gap-3 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
             <Video className="w-4 h-4" /> Content That Works
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
            Stand Out with <br/><span className="text-primary">Great Content</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
             We help brands tell their story using smart tools and high-quality production that gets people talking.
          </p>
        </header>

        {/* Dynamic Case Studies */}
        <section className="mb-24">
           <div className="flex items-end justify-between mb-12">
              <div>
                 <h2 className="text-3xl font-display font-bold mb-2">Success Stories</h2>
                 <p className="text-slate-500 text-sm">Real results for our partners and clients.</p>
              </div>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseStudy 
                title="Better Online Learning"
                brief="Helping a school switch from textbooks to a fun, digital way of learning."
                results="2.5x More Active Students"
              />
              <CaseStudy 
                title="Faster Digital Payments"
                brief="Making it easier for businesses to pay and get paid across borders."
                results="Doubled Online Sales"
              />
              <CaseStudy 
                title="Modern Brand Growth"
                brief="Helping a traditional company look and act like a world-class tech leader."
                results="45% More Qualified Leads"
              />
           </div>
        </section>

        {/* Interactive Media Kit */}
        <section className="mb-24">
           <div className="glass p-12 rounded-[4rem] border-white/5 bg-gradient-to-br from-indigo-900/10 via-transparent to-transparent">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                 <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-display font-bold">Our Reach <br/>& Results</h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                       We track everything we do to make sure your content is actually reaching the right people.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                       <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <Users className="text-primary mb-4" />
                          <div className="text-2xl font-bold">1.2M+</div>
                          <div className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Total Reach</div>
                       </div>
                       <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                          <TrendingUp className="text-emerald-500 mb-4" />
                          <div className="text-2xl font-bold">18.4%</div>
                          <div className="text-[10px] opacity-40 uppercase font-bold tracking-widest">Growth Rate</div>
                       </div>
                    </div>
                 </div>

                 <div className="glass p-10 rounded-[3rem] border-white/10 bg-slate-900 shadow-2xl space-y-8">
                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                       <h4 className="font-bold flex items-center gap-2 tracking-widest uppercase text-xs">Clear Pricing</h4>
                       <div className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold">Transparent</div>
                    </div>
                    <div className="space-y-4">
                       {[
                         { i: "Content Strategy", p: "$1.5k / mo." },
                         { i: "Media Production", p: "$2k / day" },
                         { i: "Professional Writing", p: "$850 / pack" }
                       ].map(row => (
                         <div key={row.i} className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                            <span className="opacity-60">{row.i}</span>
                            <span className="font-bold">{row.p}</span>
                         </div>
                       ))}
                    </div>
                    <button className="btn-primary w-full justify-center py-4 text-xs">Book a Session</button>
                 </div>
              </div>
           </div>
        </section>

        {/* AI in Content Section */}
        <section className="mb-24">
           <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                 <div className="w-fit p-3 bg-white/5 rounded-2xl border border-white/10 text-primary"><Sparkles /></div>
                 <h2 className="text-3xl font-display font-bold">Smart Writing Tools</h2>
                 <p className="text-slate-400 text-lg leading-relaxed">
                    We use the latest tools to write content that is easy for Google to find and even easier for your customers to read.
                 </p>
                 <div className="flex gap-4">
                    <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-bold uppercase flex items-center gap-2">
                       <Zap className="w-4 h-4 text-primary" /> High Performance
                    </div>
                    <div className="px-5 py-3 bg-white/5 rounded-xl border border-white/10 text-xs font-bold uppercase flex items-center gap-2">
                       <Globe className="w-4 h-4 text-indigo-500" /> Global Standards
                    </div>
                 </div>
              </div>
              <div className="p-8 glass rounded-[2.5rem] bg-indigo-500/5 border-indigo-500/20 text-center flex flex-col justify-center">
                 <BarChart3 className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
                 <div className="text-3xl font-display font-bold mb-2">82%</div>
                 <div className="text-[10px] opacity-40 uppercase font-bold tracking-[0.2em] mb-4">Benefit of Smart Tools</div>
                 <div className="text-xs italic opacity-60">Verified Results</div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};
