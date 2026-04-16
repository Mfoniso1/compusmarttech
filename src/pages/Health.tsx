import React from 'react';
import { 
  Activity, 
  ShieldCheck, 
  Database, 
  ShoppingCart, 
  Package, 
  Lock, 
  FileText, 
  Stethoscope, 
  ArrowRight,
  ClipboardList,
  MessageCircle,
  Bell,
  Video,
  Eye
} from 'lucide-react';
import { motion } from 'motion/react';

export const HealthPage = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pt-32 pb-24 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-emerald-500/20">
             Reliable & Secure Care
          </div>
          <h1 className="text-4xl md:text-7xl font-display font-bold mb-8">Better Care, <br/><span className="text-emerald-500">Less Paperwork</span></h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">
             We make it easy for clinics and hospitals to manage records, talk to patients, and grow their healthcare services simply and safely.
          </p>
        </header>

        {/* Clinic Management & Data Visualization */}
        <section className="grid lg:grid-cols-2 gap-12 mb-24">
           <motion.div whileHover={{ y: -10 }} className="glass-white dark:glass p-10 rounded-[3rem] border border-emerald-500/10 shadow-xl overflow-hidden relative">
              <div className="flex items-center justify-between mb-10">
                 <div className="flex items-center gap-4">
                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-500"><Database /></div>
                    <h3 className="text-2xl font-bold">Clear Patient Records</h3>
                 </div>
                 <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded text-[10px] font-bold text-emerald-500 uppercase">
                    <Eye className="w-3 h-3" /> Easy View
                 </div>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                 All your patient data in one simple place. We connect your different tools so you can see everything you need without the stress.
              </p>
              <div className="space-y-3">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} animate={{ width: `${30 + i * 20}%` }} className="h-full bg-emerald-500" />
                    </div>
                 ))}
              </div>
           </motion.div>

           <motion.div whileHover={{ y: -10 }} className="glass-white dark:glass p-10 rounded-[3rem] border border-emerald-500/10 shadow-xl">
              <div className="flex items-center gap-4 mb-10">
                 <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500"><Stethoscope /></div>
                 <h3 className="text-2xl font-bold">Patient Help Tools</h3>
              </div>
              <p className="text-sm text-slate-500 mb-8">
                 Help more patients with digital tools. Secure messaging, automatic appointment reminders, and health education sent straight to their phones.
              </p>
              <div className="flex gap-4">
                 <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-white/5 flex flex-col items-center flex-1">
                    <Video className="w-6 h-6 text-emerald-500 mb-2" />
                    <span className="text-[10px] font-bold uppercase opacity-40 text-center">Video Call</span>
                 </div>
                 <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-white/5 flex flex-col items-center flex-1">
                    <MessageCircle className="w-6 h-6 text-blue-500 mb-2" />
                    <span className="text-[10px] font-bold uppercase opacity-40 text-center">Secure Chat</span>
                 </div>
                 <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-2xl border border-white/5 flex flex-col items-center flex-1">
                    <Bell className="w-6 h-6 text-orange-500 mb-2" />
                    <span className="text-[10px] font-bold uppercase opacity-40 text-center">Reminders</span>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* B2B Medical Supply & Marketplace */}
        <section className="mb-24">
           <div className="flex items-end justify-between mb-12">
              <div>
                 <h2 className="text-3xl font-display font-bold mb-2">Hospital Supplies</h2>
                 <p className="text-slate-500">Buy in bulk for your clinic with clear pricing and smart suggestions.</p>
              </div>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "VitalSign Monitor Pro", price: "$1,200", tiered: "Buy 10+: $1,050", substitute: "Standard Monitor", status: "In Stock" },
                { name: "MRI Contrast Agent X-4", price: "$450", tiered: "Buy 5+: $390", substitute: "Standard Contrast", status: "Backorder" },
                { name: "Sterile Field Kit v2", price: "$85", tiered: "Buy 100+: $62", substitute: "Basic Kit", status: "In Stock" }
              ].map((item, i) => (
                <div key={i} className="glass-white dark:glass p-8 rounded-3xl border border-slate-200 dark:border-white/10 group">
                   <div className="h-40 bg-slate-100 dark:bg-slate-900 rounded-2xl mb-6 flex items-center justify-center opacity-30">
                      <ShoppingCart className="w-12 h-12" />
                   </div>
                   <h4 className="text-lg font-bold mb-2">{item.name}</h4>
                   <div className="text-2xl font-display font-bold text-emerald-500 mb-1">{item.price}</div>
                   <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-600/60 dark:text-emerald-400/60 mb-4">{item.tiered}</div>
                   
                   <div className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl mb-6">
                      <div className="text-[9px] font-bold opacity-40 uppercase mb-2">Similar Low-Cost Option</div>
                      <div className="text-xs font-bold text-slate-500 flex items-center justify-between">
                         {item.substitute}
                         <button className="text-emerald-500 hover:underline">View</button>
                      </div>
                   </div>

                   <button className="w-full py-4 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">
                      Order in Bulk
                   </button>
                </div>
              ))}
           </div>
        </section>

        {/* Trust & Policy */}
        <div className="glass p-12 rounded-[3.5rem] border-white/5 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full"></div>
            <div className="w-24 h-24 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0">
               <ShieldCheck className="w-12 h-12 text-emerald-500" />
            </div>
            <div className="relative z-10 flex-1">
               <h3 className="text-2xl font-bold mb-4">Your Data is Safe & Private</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  We use strong encryption and regular safety checks to keep your patient records private. Our tools are built to meet the highest safety standards in the world.
               </p>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                     <Lock className="w-4 h-4" /> SECURE STORAGE
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
                     <FileText className="w-4 h-4" /> PRIVACY LOGS
                  </div>
               </div>
            </div>
            <button className="btn-primary relative z-10">View Safety Standards</button>
        </div>
      </div>
    </div>
  );
};
