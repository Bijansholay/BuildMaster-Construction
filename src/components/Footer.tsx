import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 flex items-center justify-center rounded-lg shadow-lg">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              BuildMaster
            </span>
          </Link>
          <p className="text-slate-400 leading-relaxed">
            Building excellence through innovation and integrity. We are your trusted partner for residential, commercial, and civil engineering projects.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4">
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-orange-500 transition-colors">Project Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact & Complaints</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-4">
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Residential Construction</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Commercial Building</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Renovations</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Civil Engineering</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-orange-500 shrink-0" size={20} />
              <span>123 Construction Way, Skyline City, SC 54321</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-orange-500 shrink-0" size={20} />
              <a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-orange-500 shrink-0" size={20} />
              <a href="mailto:info@buildmaster.com" className="hover:text-orange-500 transition-colors">info@buildmaster.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} BuildMaster Construction Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
