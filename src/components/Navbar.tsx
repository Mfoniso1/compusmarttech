import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Cpu, Menu, Sun, Moon, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const PERSONA_NAV = [
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Academy', href: '/academy' },
  { label: 'Health', href: '/health' },
  { label: 'Talent', href: '/talent' },
  { label: 'Government', href: '/government' },
  { label: 'Media', href: '/media' },
];

export const Navbar = ({ isDark, toggleTheme }: NavbarProps) => {
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
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 overflow-hidden rounded-lg flex items-center justify-center bg-white border border-slate-200 dark:border-slate-800">
            <img src="/cslogo.jpg" alt="CompuSmart Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight">CompuSmart</span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {PERSONA_NAV.map((item) => (
            <NavLink 
              key={item.label} 
              to={item.href} 
              className={({ isActive }) => 
                `text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-primary ${isActive ? 'text-primary' : 'opacity-60 hover:opacity-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="w-px h-4 bg-slate-300 dark:bg-slate-700 mx-2" />
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <NavLink to="/academy" className="btn-primary py-2 text-[10px]">
            Join Academy
          </NavLink>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            className="absolute top-full left-0 right-0 glass border-t border-slate-200 dark:border-slate-800 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {PERSONA_NAV.map((item) => (
                <NavLink 
                  key={item.label} 
                  to={item.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) => 
                    `text-xl font-display font-bold hover:text-primary ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink 
                to="/academy" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary justify-center py-4"
              >
                Join Academy
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
