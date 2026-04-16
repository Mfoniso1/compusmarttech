import React from 'react';
import { 
  Rocket, 
  ChevronRight, 
  Briefcase, 
  GraduationCap, 
  Activity, 
  Users, 
  ShieldCheck, 
  ArrowRight,
  Target,
  Eye,
  Globe,
  TrendingUp,
  Cpu,
  Sparkles
} from 'lucide-react';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const FunnelCard = ({ to, title, description, icon: Icon, colorClass }: { to: string, title: string, description: string, icon: any, colorClass: string }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className="group relative h-full"
  >
    <NavLink to={to} className="block h-full">
      <div className={`glass p-10 rounded-[3rem] border border-white/10 hover:border-primary/50 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${colorClass} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        
        <div className="relative z-10">
          <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-10 shadow-xl group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-3xl font-display font-bold mb-4 tracking-tight">{title}</h3>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
            {description}
          </p>
        </div>

        <div className="mt-12 flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
          Explore Portal <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </NavLink>
  </motion.div>
);

const MetricsItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex items-center gap-4 px-8 border-r border-slate-200 dark:border-white/10 last:border-r-0">
     <div className="p-3 bg-primary/10 rounded-xl">
        <Icon className="w-5 h-5 text-primary" />
     </div>
     <div>
        <div className="text-2xl font-display font-bold text-slate-900 dark:text-white">{value}</div>
        <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">{label}</div>
     </div>
  </div>
);

export const Home = () => {
  return (
    <div className="overflow-x-hidden pt-24 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen relative">
      
      {/* Immersive Background Aura */}
      <div className="absolute top-0 left-0 right-0 h-[800px] overflow-hidden pointer-events-none z-0">
         <motion.div 
           animate={{ 
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
             rotate: [0, 45, 0]
           }} 
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-[20%] -left-[10%] w-[60%] h-[80%] bg-primary/20 blur-[150px] rounded-full"
         />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Simplified Hero Section */}
        <section className="pt-20 pb-32 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-10"
            >
              <Sparkles className="w-4 h-4" /> Smart Tools for African Growth
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-5xl md:text-8xl font-display font-bold mb-8 leading-[1] tracking-tighter"
            >
              Build Your Future with <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-indigo-600">Smart Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 dark:text-slate-400 mb-12 max-w-xl leading-relaxed"
            >
              We create easy-to-use software that helps businesses, schools, and hospitals grow faster and work better every day.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6"
            >
              <NavLink to="/academy" className="btn-primary group px-10 py-5 text-sm h-auto shadow-2xl shadow-primary/20">
                Get Started Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </NavLink>
              <NavLink to="/enterprise" className="px-10 py-5 rounded-2xl border border-slate-200 dark:border-white/10 font-bold text-sm hover:bg-white dark:hover:bg-white/5 transition-all text-slate-600 dark:text-slate-300">
                How it Works
              </NavLink>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="hidden lg:block relative"
          >
             <div className="glass p-4 rounded-[3rem] border-slate-200 dark:border-white/10 shadow-2xl bg-white/40 dark:bg-slate-900/40 overflow-hidden group">
                <div className="bg-slate-100 dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5">
                   <img 
                     src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800" 
                     alt="Dashboard" 
                     className="w-full h-full object-cover opacity-80 dark:opacity-50 transition-all duration-1000"
                   />
                </div>
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl border-slate-200 dark:border-white/20 shadow-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-900/80"
                >
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                         <TrendingUp className="text-emerald-500 w-5 h-5" />
                      </div>
                      <div>
                         <div className="text-[10px] font-bold opacity-40 uppercase">Growth Boost</div>
                         <div className="text-xl font-bold">82% Easier</div>
                      </div>
                   </div>
                </motion.div>
             </div>
          </motion.div>
        </section>

        {/* Simplified Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass py-12 px-4 rounded-[2.5rem] border-slate-200 dark:border-white/5 mb-32 flex flex-wrap justify-around items-center gap-y-12 bg-white/90 dark:bg-white/5"
        >
          <MetricsItem icon={Briefcase} value="50+" label="Partners" />
          <MetricsItem icon={GraduationCap} value="10k+" label="Learners" />
          <MetricsItem icon={Globe} value="5+" label="Regions" />
          <MetricsItem icon={ShieldCheck} value="100%" label="Safe & Secure" />
        </motion.div>

        {/* Simplified Funnel Section */}
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Choose Your <span className="text-primary">Goal</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            What are you looking to achieve today? Pick a path to see how we help.
          </p>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <FunnelCard 
            to="/enterprise"
            title="Business"
            description="Smart tools to automate your paperwork, handle support, and grow your sales."
            icon={Briefcase}
            colorClass="from-blue-500 to-cyan-500"
          />
          <FunnelCard 
            to="/academy"
            title="Academy"
            description="Learn the best tech skills for the future. We offer coding, AI, and cybersecurity training."
            icon={GraduationCap}
            colorClass="from-indigo-500 to-purple-500"
          />
          <FunnelCard 
            to="/health"
            title="Health"
            description="Software for clinics to manage patient records simply and safely."
            icon={Activity}
            colorClass="from-emerald-500 to-teal-500"
          />
          <FunnelCard 
            to="/talent"
            title="Talent"
            description="Find the right people for your team or get hired by great companies."
            icon={Users}
            colorClass="from-orange-500 to-red-500"
          />
          <FunnelCard 
            to="/government"
            title="Government"
            description="Secure tools for public offices to help serve citizens better."
            icon={ShieldCheck}
            colorClass="from-slate-500 to-slate-800"
          />
          <FunnelCard 
            to="/media"
            title="Creative"
            description="High-quality content and brand storytelling using smart tools."
            icon={Cpu}
            colorClass="from-secondary to-indigo-500"
          />
        </section>

      </div>
    </div>
  );
};
