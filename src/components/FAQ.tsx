import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What services does DV Software Solutions provide?",
    answer: "We offer a comprehensive range of software development services including custom web development, mobile application development (iOS & Android), enterprise software solutions (ERP/CRM), API development & integration, and cloud architecture."
  },
  {
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary significantly based on complexity and scope. A standard corporate website might take 4-6 weeks, while a complex custom mobile app or enterprise platform could take 3-6 months. We provide detailed timeline estimates during our initial discovery phase."
  },
  {
    question: "How do you handle pricing and billing?",
    answer: "Depending on the project structure, we offer two main pricing models: Fixed-Price for projects with clearly defined requirements, and Time-and-Materials for long-term engagements or projects with evolving scopes. We maintain complete transparency in our billing processes."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Absolutely. We believe that launching is just the beginning. We offer various tiered support and maintenance packages to ensure your software remains secure, updated, and performs optimally as your business grows."
  },
  {
    question: "Can your team integrate with our existing in-house developers?",
    answer: "Yes, we frequently work in a staff augmentation capacity or as a dedicated external team collaborating with internal IT departments. We adapt to your existing agile processes, communication tools, and version control workflows."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            <HelpCircle size={16} /> FAQ
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Questions</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Find answers to common questions about our services, processes, and how we can help your business grow.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-sm"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full border border-white/10 transition-colors ${openIndex === index ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-800/50 text-slate-400 hover:text-white'}`}>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 text-slate-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
