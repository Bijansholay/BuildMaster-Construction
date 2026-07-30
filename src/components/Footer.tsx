import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "@/src/data/companyInfo";

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
              Geofathom
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
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Construction Engineering Services</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors"> Geotechnical Soil Investigation</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Humanitarian Engineering Services</Link></li>
            {/* <li><Link to="/services" className="hover:text-orange-500 transition-colors">Civil Engineering</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="text-orange-500 shrink-0" size={20} />
              <span>{COMPANY_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-orange-500 shrink-0" size={20} />
              <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-orange-500 transition-colors">{COMPANY_INFO.displayPhone}</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-orange-500 shrink-0" size={20} />
              <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-orange-500 transition-colors">{COMPANY_INFO.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Geofathom Construction Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
