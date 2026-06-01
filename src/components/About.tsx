import { motion } from 'motion/react';
import { Target, Users, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-400 font-bold uppercase text-xs tracking-tighter mb-3">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Transforming ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">scalable</span> digital products.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              DV Software Solutions specializes in helping businesses navigate the digital landscape. Through modern software engineering practices, we deliver custom, high-performance applications designed to automate workflows and drive growth.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: Target, title: "Precision Engineering", desc: "Built with scalable architectures." },
                { icon: Zap, title: "Modern Tech Stack", desc: "Leveraging the latest in web, mobile, and cloud." },
                { icon: Users, title: "Client-Centric", desc: "Dedicated to your success from ideation to deployment." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden glass-panel relative p-8 flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950">
              <div className="absolute inset-0 bg-indigo-500/5 mix-blend-overlay"></div>
              
              {/* Abstract decorative elements */}
              <div className="w-full h-full relative">
                <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/20 rounded-xl rotate-12 backdrop-blur-xl border border-blue-400/30"></div>
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full  backdrop-blur-xl border border-purple-400/30"></div>
                
                {/* Code-like lines illustration */}
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 space-y-4">
                  <div className="h-4 bg-slate-700/50 rounded w-3/4"></div>
                  <div className="h-4 bg-blue-500/30 rounded w-1/2"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-5/6"></div>
                  <div className="h-4 bg-slate-700/50 rounded w-2/3"></div>
                  <div className="h-4 bg-blue-500/30 rounded w-3/4"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-slate-900 border border-slate-800 py-4 px-6 rounded-xl shadow-xl">
              <div className="text-3xl font-extrabold text-white mb-1"><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">10+</span></div>
              <div className="text-slate-400 text-sm font-medium">Years Combined Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
