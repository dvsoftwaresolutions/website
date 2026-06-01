import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Tournament Management System',
    category: 'Full-stack Platform',
    image: 'https://images.unsplash.com/photo-1542652694-40abf526446e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A comprehensive system to manage esports and physical sports tournaments, brackets, teams, and live scoring.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Supabase']
  },
  {
    title: 'Bus Rental Management System',
    category: 'Enterprise SaaS',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Fleet management, booking scheduling, resource allocation, and automated billing for a regional transport company.',
    tags: ['React', 'Node.js', 'MySQL', 'Firebase']
  },
  {
    title: 'Financial CRM Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Secure customer relationship manager with custom analytics dashboards and regulatory compliance features.',
    tags: ['React', 'TypeScript', 'Node.js', 'Vercel']
  },
  {
    title: 'Manufacturing ERP',
    category: 'Business Automation',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'End-to-end resource planning connecting inventory, assembly lines, supply chain, and HR.',
    tags: ['React', 'SQL Server', 'ASP.NET Core', 'ABP.IO']
  },
  {
    title: 'Moti Handicrafts',
    category: 'Business Website / Product Catalog / Admin CMS',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A modern digital catalog and product showcase platform. Enables customers to explore handcrafted products, view details, download professional catalogs, and inquire via WhatsApp. Includes a dedicated admin panel for comprehensive content and product management.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    status: 'Completed'
  },
  {
    title: 'Veda Ceramics',
    category: 'Business Website / Product Showcase Platform',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A modern premium business website showcasing products, collections, and company information through an elegant, animated digital experience. Features a SaaS-inspired UI and mobile-first responsiveness for high customer engagement.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Netlify'],
    demoUrl: 'https://veda-ceramics-demo.netlify.app/',
    status: 'Completed'
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-400 font-bold uppercase text-xs tracking-tighter mb-3">Featured Work</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white">Delivering Excellence</h3>
          </div>
          <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors">
            View All Projects <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-slate-900/50 backdrop-blur-xl border border-white/5 hover:border-blue-500/30 transition-colors flex flex-col justify-between"
            >
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e: any) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="%230f172a" width="100%25" height="100%25"/><text x="50%25" y="50%25" fill="%2394a3b8" font-size="24" font-family="Arial" text-anchor="middle" dy=".3em">No Image</text></svg>';
                  }}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {(project as any).status && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/10">
                      {(project as any).status}
                    </span>
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 mb-2 block uppercase tracking-tighter">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h4>
                <p className="text-slate-400 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-white/5 text-slate-300 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
