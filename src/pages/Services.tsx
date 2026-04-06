import { motion } from "motion/react";
import { Building2, Home, Hammer, Ruler, HardHat, Shovel, Paintbrush, Zap } from "lucide-react";

const services = [
  {
    title: "Residential Construction",
    description: "From custom luxury homes to modern apartment complexes, we build living spaces that combine comfort with structural integrity.",
    icon: Home,
    features: ["Custom Home Design", "Multi-family Units", "Sustainable Building", "Smart Home Integration"],
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Building",
    description: "We deliver high-performance commercial spaces, including offices, retail centers, and industrial facilities designed for efficiency.",
    icon: Building2,
    features: ["Office Complexes", "Retail Spaces", "Industrial Warehouses", "Hospitality Buildings"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Renovations & Remodeling",
    description: "Breathe new life into existing structures with our expert renovation services, focusing on modernization and value addition.",
    icon: Hammer,
    features: ["Interior Remodeling", "Structural Upgrades", "Facade Restoration", "Kitchen & Bath"],
    image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Civil Engineering",
    description: "Our engineering team handles large-scale infrastructure projects, ensuring durability and safety for public and private sectors.",
    icon: Ruler,
    features: ["Roads & Bridges", "Water Systems", "Urban Planning", "Site Development"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight of your construction project, from initial planning and budgeting to final inspection.",
    icon: HardHat,
    features: ["Budgeting & Estimation", "Scheduling", "Quality Assurance", "Risk Management"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Specialized Trades",
    description: "Expert electrical, plumbing, and HVAC services integrated seamlessly into your construction or renovation project.",
    icon: Zap,
    features: ["Electrical Systems", "Plumbing & Drainage", "HVAC Installation", "Energy Audits"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1920&q=80"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Comprehensive construction solutions delivered with precision, quality, and a focus on your unique requirements.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 w-14 h-14 bg-white/90 backdrop-blur-md text-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon size={28} />
                  </div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Key Features</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-orange-600/10 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-4 mb-20">
            <span className="text-orange-500 font-bold tracking-widest uppercase">Our Workflow</span>
            <h2 className="text-4xl md:text-5xl font-bold">How We Work</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {/* Connector Line */}
            <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-800 hidden md:block" />
            
            {[
              { step: "01", title: "Consultation", desc: "We discuss your vision, requirements, and budget constraints." },
              { step: "02", title: "Planning", desc: "Our architects and engineers create detailed blueprints and schedules." },
              { step: "03", title: "Construction", desc: "Our expert team brings the design to life with quality materials." },
              { step: "04", title: "Delivery", desc: "Final inspection and handover of your completed project." },
            ].map((item, i) => (
              <div key={i} className="relative space-y-6 text-center md:text-left">
                <div className="w-24 h-24 bg-orange-600 text-white rounded-3xl flex items-center justify-center text-3xl font-bold shadow-2xl mx-auto md:mx-0 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
