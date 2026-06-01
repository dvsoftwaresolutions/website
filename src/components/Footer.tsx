import { Code2 } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  const currentYear = new Date().getFullYear(); // Typically 2026

  return (
    <footer className="border-t border-white/5 bg-slate-900/30 backdrop-blur-md pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-20 w-20" variant="dark" />
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              Building next-generation digital products and enterprise software solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs text-center md:text-left">
            <span className="font-bold text-slate-400">DV Software Solutions</span><br />
            Gondal, Gujarat 360311
          </p>
          <p className="text-slate-500 text-xs text-center md:text-right">
            <a href="mailto:contact.dvsoftwaresolutions@gmail.com" className="font-medium hover:text-blue-400 transition-colors">contact.dvsoftwaresolutions@gmail.com</a><br />
            DV Software Solutions &copy; {currentYear}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
