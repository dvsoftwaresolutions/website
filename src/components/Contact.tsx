/// <reference types="vite/client" />
import { motion } from 'motion/react';
import { Mail, MapPin, Github, Linkedin, MessageCircle, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { FormEvent, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Ensure you have these environment variables set in your .env file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_u6edsw8';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_dsjw48n';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Ep96_xVJAXA18jTEk';

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing.');
      }

      const formData = new FormData(formRef.current);
      
      const templateParams = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        service: formData.get('service') as string,
        message: formData.get('message') as string,
        time: new Date().toLocaleString('en-IN')
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setSubmitStatus('success');
      formRef.current.reset();
    } catch (err: any) {
      console.error('Email sending failed:', err);
      setSubmitStatus('error');
      setErrorMessage(err?.message || 'Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-blue-400 font-bold uppercase text-xs tracking-tighter mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">amazing</span> together.</h3>
            <p className="text-slate-400 text-lg mb-10">
              Whether you need to overhaul your legacy systems or build a new product from scratch, our team is ready to help you succeed.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mt-1">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Location</h4>
                  <p className="text-slate-400">Gondal, Gujarat<br />360311</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mt-1">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Email Us</h4>
                  <a href="mailto:contact.dvsoftwaresolutions@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">contact.dvsoftwaresolutions@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://wa.me/918160892272" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/5 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-slate-800 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/5 shadow-xl"
          >
            {submitStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-8">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4 text-4xl">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-2xl font-bold text-white">Thank you for contacting DV Software Solutions.</h3>
                <p className="text-slate-300 max-w-md mx-auto">
                  Your inquiry has been submitted successfully.<br />We will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitStatus('idle')}
                  className="mt-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors font-semibold"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {submitStatus === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex items-start gap-3 text-red-400">
                    <AlertCircle className="shrink-0 mt-0.5" size={18} />
                    <p className="text-sm font-medium">{errorMessage}</p>
                  </div>
                )}
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm" placeholder="John Doe" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required pattern="[^\s@]+@[^\s@]+\.[^\s@]+" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm" placeholder="+1 (234) 567-8900" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Company Name</label>
                    <input type="text" id="company" name="company" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm" placeholder="Your Company" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Service Required</label>
                    <select id="service" name="service" required defaultValue="" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm appearance-none">
                      <option value="" disabled>Select a service</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="API Development">API Development</option>
                      <option value="ERP / CRM Solutions">ERP / CRM Solutions</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-tighter text-slate-400 mb-2">Project Details</label>
                  <textarea id="message" name="message" required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors font-medium text-sm resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white hover:bg-slate-200 text-slate-950 font-bold rounded-xl transition-all shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin text-slate-900" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
