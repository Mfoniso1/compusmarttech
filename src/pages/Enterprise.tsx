import React from 'react';
import { 
  Briefcase, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Layout, 
  Smartphone, 
  ArrowRight,
  Code,
  Target,
  Layers,
  CheckCircle2,
  Cpu,
  Calculator,
  MessageSquare,
  Globe,
  Battery
} from 'lucide-react';
import { motion } from 'motion/react';

const AgentCard = ({ title, description, icon: Icon, roi }: { title: string, description: string, icon: any, roi: string }) => (
  <motion.div whileHover={{ y: -5 }} className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/50 transition-all flex flex-col h-full bg-slate-900/40">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">{description}</p>
    <div className="flex items-center gap-2 text-primary font-mono text-xs font-bold border-t border-white/5 pt-4">
      <TrendingUp className="w-4 h-4" /> ESTIMATED ROI: {roi}
    </div>
  </motion.div>
);

export const EnterprisePage = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32 pb-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20">
          <div className="text-primary font-bold uppercase tracking-widest text-xs mb-4">For Businesses & Startups</div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-6">Work Smarter, <br/><span className="text-primary">Scale Faster</span></h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            We help African businesses save time and money by automating the boring stuff and making operations crystal clear.
          </p>
        </header>

        {/* African Context: Energy Management */}
        <section className="mb-24">
           <div className="glass p-10 rounded-[3rem] border-primary/20 bg-gradient-to-br from-primary/5 to-transparent flex flex-col md:flex-row items-center gap-12">
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center shrink-0">
                 <Battery className="w-10 h-10 text-primary animate-pulse" />
              </div>
              <div>
                 <h2 className="text-2xl font-bold mb-2">Solving Local Problems: Power Management</h2>
                 <p className="text-slate-400 leading-relaxed max-w-2xl">
                    Our smart tools help you track utility usage and predict power spikes to save you money during load shedding. We make sure your critical work never stops.
                 </p>
              </div>
              <div className="flex-1 flex justify-end">
                 <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest">Live: Peak Prediction Active</div>
              </div>
           </div>
        </section>

        {/* AI Use Cases Grid */}
        <section className="mb-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2">Smart Digital Helpers</h2>
              <p className="text-slate-500 text-sm">Practical tools designed for the African business landscape.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AgentCard 
              title="Smart Bookkeeping"
              description="Tools that sync with Xero and QuickBooks and handle 90% of your manual data entry automatically."
              icon={Calculator}
              roi="~70% Faster Month-End"
            />
            <AgentCard 
              title="Helpful Support Bots"
              description="Digital helpers that answer 80% of customer questions instantly so your team can focus on the hard stuff."
              icon={MessageSquare}
              roi="Better Customer Ratings"
            />
            <AgentCard 
              title="Local Language Support"
              description="Our tools understand and respond in regional languages and dialects, helping you reach more people."
              icon={Globe}
              roi="Talk to More Customers"
            />
            <AgentCard 
              title="Business Safety Checker"
              description="Real-time document scans that find errors and keep you on the right side of the law."
              icon={ShieldCheck}
              roi="Zero Compliance Stress"
            />
            <AgentCard 
              title="Digital Sales Assistant"
              description="Bots that talk to your website visitors, find out what they need, and save them as leads in your CRM."
              icon={Target}
              roi="~30% More Sales Leads"
            />
            <AgentCard 
              title="Customer Value Guard"
              description="Smart models that tell you which customers might leave, so you can help them before they do."
              icon={TrendingUp}
              roi="Happy, Loyal Customers"
            />
          </div>
        </section>

        {/* Interactive Architectural Diagram */}
        <section className="mb-24">
           <div className="glass p-12 rounded-[3rem] border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                 <div>
                    <h2 className="text-3xl font-display font-bold mb-6">CRM & Workflow Orchestration</h2>
                    <p className="text-slate-400 mb-8 leading-relaxed">
                      We automate data syncing between sales interactions and your CRM (HubSpot, Salesforce) using n8n and Zapier, removing the need for manual administrative entry.
                    </p>
                    <div className="space-y-4">
                       {[
                         "Automated HubSpot/Salesforce Sync",
                         "Multi-Step n8n/Zapier Workflows",
                         "Localized AI Data Processing",
                         "Zero-Downtime Migration"
                       ].map(item => (
                         <div key={item} className="flex items-center gap-3 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" /> {item}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 font-mono text-sm text-cyan-500">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                       <div className="flex items-center gap-2"><Layers className="w-4 h-4"/> Sync Engine v2.4</div>
                    </div>
                    <div className="space-y-8">
                       <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/20 rounded-lg border border-primary/30">Engagement Log</div>
                          <div className="flex-1 h-px bg-gradient-to-r from-primary to-transparent"></div>
                       </div>
                       <div className="ml-12 border-l border-white/10 pl-12 py-4 space-y-6">
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10 w-fit">AI Reasoning Layer</div>
                          <div className="p-3 bg-white/5 rounded-lg border border-white/10 w-fit">CRM Data Push</div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="flex-1 h-px bg-gradient-to-l from-secondary to-transparent"></div>
                          <div className="p-3 bg-secondary/20 rounded-lg border border-secondary/30 text-secondary">External Notification</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Portfolio CTA */}
        <section className="text-center">
           <h2 className="text-3xl font-display font-bold mb-6">Explore Our App Portfolio</h2>
           <p className="text-slate-500 mb-8 max-w-xl mx-auto">See how we build high-performance mobile and web products for the African enterprise.</p>
           <button className="btn-primary">View Full Portfolio <ArrowRight className="w-4 h-4"/></button>
        </section>
      </div>
    </div>
  );
};
