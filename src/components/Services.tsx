import { motion } from 'motion/react';
import { LayoutTemplate, AppWindow, Smartphone, Database, Briefcase, Network } from 'lucide-react';

const services = [
  {
    icon: LayoutTemplate,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed from the ground up to solve your unique business challenges and streamline operations.'
  },
  {
    icon: AppWindow,
    title: 'Web Application Development',
    description: 'Scalable, secure, and responsive web apps built with modern frameworks to engage users and drive conversions.'
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that bring your services directly to your customers\' fingertips.'
  },
  {
    icon: Database,
    title: 'API Development',
    description: 'Robust backend architectures and RESTful/GraphQL APIs that connect systems and ensure seamless data flow.'
  },
  {
    icon: Briefcase,
    title: 'ERP & CRM Solutions',
    description: 'Enterprise resource planning and customer relationship management systems built for efficiency and insights.'
  },
  {
    icon: Network,
    title: 'Business Process Automation',
    description: 'Eliminate manual tasks with intelligent automation, saving time and reducing operational costs.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-400 font-bold uppercase text-xs tracking-tighter mb-3">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">Comprehensive Engineering</h3>
          <p className="text-slate-400 text-lg">We provide end-to-end digital solutions, from conceptualization to deployment and maintenance.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 group hover:border-blue-500/50 hover:bg-slate-900/80 relative overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-indigo-400 transition-colors relative z-10">
                  <service.icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white relative z-10">{service.title}</h4>
              </div>
              
              <p className="text-slate-400 leading-relaxed relative z-10">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
