import React from 'react';
import { NavLink } from 'react-router-dom';
import { Twitter, Linkedin, Github, Facebook, Instagram } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants/data';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 overflow-hidden rounded-lg flex items-center justify-center bg-white border border-slate-200 dark:border-slate-800">
                <img src="/cslogo.jpg" alt="CompuSmart Logo" className="w-full h-full object-contain" />
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
                <li key={item.label}>
                  <NavLink to={item.href} className="hover:text-primary transition-colors">
                    {item.label}
                  </NavLink>
                </li>
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
  );
};
