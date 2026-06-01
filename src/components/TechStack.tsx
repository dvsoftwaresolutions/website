import { motion } from 'motion/react';
import { Mail, Webhook, Code2, Database, Cloud, GitBranch, Terminal } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    icon: Terminal,
    technologies: [
      { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/white.svg' },
      { name: 'Tailwind CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ]
  },
  {
    title: 'Backend',
    icon: Code2,
    technologies: [
      { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'NestJS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg' },
      { name: 'ASP.NET Core', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
      { name: 'ABP.IO', src: 'https://avatars.githubusercontent.com/u/38210344?v=4', isRound: true },
    ]
  },
  {
    title: 'Database',
    icon: Database,
    technologies: [
      { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Supabase', src: 'https://cdn.simpleicons.org/supabase/3ECF8E.svg' },
      { name: 'SQL Server', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MySQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ]
  },
  {
    title: 'Cloud & Hosting',
    icon: Cloud,
    technologies: [
      { name: 'Firebase', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/white.svg' },
      { name: 'Cloudflare', src: 'https://cdn.simpleicons.org/cloudflare/F38020.svg' },
    ]
  },
  {
    title: 'Tools & Integrations',
    icon: GitBranch,
    technologies: [
      { name: 'Google Analytics', src: 'https://cdn.simpleicons.org/googleanalytics/E37400.svg' },
      { name: 'EmailJS', Icon: Mail, color: 'text-blue-400' },
      { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'REST APIs', Icon: Webhook, color: 'text-emerald-400' },
    ]
  }
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 border-y border-white/5 relative bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-bold uppercase text-xs tracking-tighter mb-3">Technology Stack</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Modern Technology</span>
          </h3>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We use a comprehensive suite of modern tools and frameworks to build robust, scalable, and high-performance solutions.
          </p>
        </div>

        <div className="space-y-16">
          {techCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-3 mb-8 justify-center">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 border border-blue-500/20">
                  <category.icon size={20} />
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
              </div>

              <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                {category.technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="group border border-white/5 bg-slate-900/40 rounded-2xl p-4 md:p-6 flex flex-col items-center gap-4 hover:bg-slate-800 transition-all hover:border-blue-500/30 min-w-[120px]"
                  >
                    <div className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                      {tech.src ? (
                        <img 
                          src={tech.src} 
                          alt={tech.name} 
                          className={`w-10 h-10 md:w-12 md:h-12 object-contain filter transition-transform group-hover:scale-110 ${tech.isRound ? 'rounded-md' : ''}`} 
                        />
                      ) : tech.Icon ? (
                        <tech.Icon className={`w-10 h-10 md:w-12 md:h-12 ${tech.color} group-hover:scale-110 transition-transform`} />
                      ) : null}
                    </div>
                    <span className="text-xs md:text-sm font-bold text-slate-400 group-hover:text-blue-400 transition-colors text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
