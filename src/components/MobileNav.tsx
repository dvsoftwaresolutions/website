import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, User, Briefcase, FolderKanban, Mail, Code2, Star, HelpCircle, MoreHorizontal } from 'lucide-react';

const primaryLinks = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Services', href: '#services', icon: Briefcase },
  { name: 'Projects', href: '#projects', icon: FolderKanban },
];

const moreLinks = [
  { name: 'Tech Stack', href: '#tech-stack', icon: Code2 },
  { name: 'Testimonials', href: '#testimonials', icon: Star },
  { name: 'FAQ', href: '#faq', icon: HelpCircle },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const allLinks = [...primaryLinks, ...moreLinks];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Find current section
      const sections = allLinks.map(link => link.href.substring(1));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollTo = (href: string) => {
    setIsMoreOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80; // adjust for desktop header if needed
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const isMoreActive = moreLinks.some(link => link.href.substring(1) === activeSection);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-[60]">
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="bg-slate-900/85 backdrop-blur-xl border-t border-white/10 rounded-t-3xl pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 px-6 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] flex items-center justify-between"
        >
          {primaryLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            const Icon = link.icon;
            return (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                  isActive ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileNavIndicator"
                    className="absolute inset-0 bg-blue-500/15 rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <Icon size={22} className={isActive ? 'stroke-[2.5]' : 'stroke-[1.5]'} />
                  <span className={`text-[10px] tracking-wide transition-all ${isActive ? 'font-bold' : 'font-medium'}`}>
                    {link.name}
                  </span>
                </div>
              </button>
            );
          })}
          
          {/* More Button */}
          <button
            onClick={() => setIsMoreOpen(true)}
            className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
              isMoreActive || isMoreOpen ? 'text-blue-400' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {(isMoreActive || isMoreOpen) && (
              <motion.div
                layoutId="mobileNavIndicator"
                className="absolute inset-0 bg-blue-500/15 rounded-2xl"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="relative z-10 flex flex-col items-center gap-1.5">
              <MoreHorizontal size={22} className={isMoreActive || isMoreOpen ? 'stroke-[2.5]' : 'stroke-[1.5]'} />
              <span className={`text-[10px] tracking-wide transition-all ${isMoreActive || isMoreOpen ? 'font-bold' : 'font-medium'}`}>
                More
              </span>
            </div>
          </button>
        </motion.div>
      </div>

      {/* Bottom Sheet for More Menu */}
      <AnimatePresence>
        {isMoreOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMoreOpen(false)}
              className="lg:hidden fixed inset-0 z-[65] bg-slate-950/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="lg:hidden fixed bottom-0 inset-x-0 z-[70] px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4"
            >
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                <div className="bg-slate-800/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                  <div className="p-4 border-b border-white/5 relative">
                    <h3 className="text-center font-semibold text-slate-300 text-sm">More Menu</h3>
                  </div>
                  <div className="flex flex-col">
                    {moreLinks.map((link) => {
                      const isActive = activeSection === link.href.substring(1);
                      const Icon = link.icon;
                      return (
                        <button
                          key={link.name}
                          onClick={() => scrollTo(link.href)}
                          className="border-b border-white/5 last:border-none p-4 flex items-center gap-4 hover:bg-white/5 active:bg-white/10 transition-colors"
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-700/50 text-slate-300'}`}>
                            <Icon size={20} className={isActive ? 'stroke-2' : ''} />
                          </div>
                          <span className={`text-base transition-colors ${isActive ? 'text-blue-400 font-bold' : 'text-slate-200 font-medium'}`}>
                            {link.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
                
                <button
                  onClick={() => setIsMoreOpen(false)}
                  className="bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center font-bold text-blue-400 hover:bg-slate-700/90 active:bg-slate-700 transition-colors w-full shadow-2xl"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
