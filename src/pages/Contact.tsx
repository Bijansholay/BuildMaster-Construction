import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formType, setFormType] = useState<"inquiry" | "complaint">("inquiry");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    try {
      const recipient = "najibsholadoye04@gmail.com";
      const subject = `${formType.toUpperCase()}: From ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
      
      const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open the user's email client
      window.location.href = mailtoUrl;
      
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1516387933999-ed3315fb1ad5?auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white font-display"
          >
            Contact & Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Have a question or need to report an issue? We're here to help you every step of the way.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 leading-relaxed">
                Reach out to us through any of these channels. Our team typically responds within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                  <p className="text-slate-500 text-sm mb-2">Mon-Fri from 8am to 6pm.</p>
                  <a href="tel:+1234567890" className="text-orange-600 font-bold hover:underline">+1 234 567 890</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Us</h3>
                  <p className="text-slate-500 text-sm mb-2">Our friendly team is here to help.</p>
                  <a href="mailto:info@buildmaster.com" className="text-orange-600 font-bold hover:underline">info@buildmaster.com</a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Visit Us</h3>
                  <p className="text-slate-500 text-sm mb-2">Come say hello at our office.</p>
                  <p className="text-slate-900 font-bold">123 Construction Way, Skyline City</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-video bg-slate-100 rounded-3xl overflow-hidden relative border border-slate-200">
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 flex-col gap-2">
                <MapPin size={40} />
                <span className="font-bold uppercase tracking-widest text-xs">Google Maps Integration</span>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 mb-10">
                <button
                  onClick={() => setFormType("inquiry")}
                  className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                    formType === "inquiry" 
                      ? "bg-white text-orange-600 shadow-lg border-2 border-orange-600" 
                      : "bg-slate-200 text-slate-500 hover:bg-slate-300"
                  }`}
                >
                  <MessageSquare size={20} />
                  General Inquiry
                </button>
                <button
                  onClick={() => setFormType("complaint")}
                  className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                    formType === "complaint" 
                      ? "bg-white text-red-600 shadow-lg border-2 border-red-600" 
                      : "bg-slate-200 text-slate-500 hover:bg-slate-300"
                  }`}
                >
                  <AlertCircle size={20} />
                  Submit Complaint
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="+1 (234) 567-890"
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">
                    {formType === "inquiry" ? "Your Message" : "Complaint Details"}
                  </label>
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={formType === "inquiry" ? "How can we help you?" : "Please describe the issue in detail..."}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-orange-600 focus:ring-4 focus:ring-orange-600/10 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  disabled={status === "submitting"}
                  type="submit"
                  className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl active:scale-[0.98] ${
                    status === "submitting" 
                      ? "bg-slate-400 text-white cursor-not-allowed" 
                      : formType === "inquiry" 
                        ? "bg-orange-600 text-white hover:bg-orange-700 shadow-orange-500/20" 
                        : "bg-red-600 text-white hover:bg-red-700 shadow-red-500/20"
                  }`}
                >
                  {status === "submitting" ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      {formType === "inquiry" ? "Send Message" : "Submit Complaint"}
                      <Send size={20} />
                    </>
                  )}
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 text-green-700 p-4 rounded-2xl flex items-center gap-3 font-bold"
                  >
                    <CheckCircle2 size={24} />
                    Thank you! Your {formType} has been submitted successfully.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-100 text-red-700 p-4 rounded-2xl flex items-center gap-3 font-bold"
                  >
                    <AlertCircle size={24} />
                    Oops! Something went wrong. Please try again.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
