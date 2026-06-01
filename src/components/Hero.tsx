import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ThreeCanvas } from './ThreeCanvas';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <ThreeCanvas />
      
      {/* Radial gradient background override for better contrast */}
      <div className="absolute inset-0 bg-slate-950/60 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center relative mt-32 sm:mt-48 md:mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            Enterprise Software Partner
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-white">
            Building Modern <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Solutions</span> <br className="hidden md:block"/>
            For Businesses
          </h1>
          
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            Custom Web Applications, Mobile Apps, APIs, and High-Performance Business Automation Systems designed for scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-xl group">
              Get Free Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            
            <a href="https://wa.me/918160892272" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-800 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors group">
              <MessageCircle className="text-green-500 group-hover:scale-110 transition-transform" size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-slate-500 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-slate-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
