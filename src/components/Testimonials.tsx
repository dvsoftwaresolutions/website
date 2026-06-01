import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO, TechVision Inc",
    content: "DV Software Solutions completely transformed our legacy systems. Their team's expertise in modern tech stacks delivered an infrastructure that scales seamlessly. We've seen a 40% increase in performance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, InnovateRetail",
    content: "Working with them was a game-changer for our e-commerce platform. They didn't just build what we asked for; they anticipated our needs and provided strategic architectural guidance.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Director, HealthTech Solutions",
    content: "The level of professionalism and technical proficiency is outstanding. They delivered a complex, HIPAA-compliant healthcare application ahead of schedule. Highly recommended.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative bg-slate-950 overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <Star size={16} /> CLIENT SUCCESS
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Clients Say</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here is what leading companies have to say about partnering with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 relative group"
            >
              <div className="absolute top-8 right-8 text-white/5 group-hover:text-blue-500/10 transition-colors">
                <Quote size={48} />
              </div>
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-slate-300 mb-8 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-800"
                />
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
