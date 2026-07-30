import { motion } from "motion/react";
import PageHeader from "@/src/components/PageHeader";
import { services } from "@/src/data/companyInfo";

export default function Services() {
  return (
    <div className="pt-24">
      <PageHeader
        title="Our Services"
        description="Comprehensive construction solutions delivered with precision, quality, and a focus on your unique requirements."
        backgroundImage="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1920&q=80"
      />

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
                  <div className="space-y-6">
                    <div>
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

                    {'whyItMatters' in service && service.whyItMatters && (
                      <div className="pt-4 border-t border-slate-200/80">
                        <h4 className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-3">Why Investigation Matters</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.whyItMatters.map((item, k) => (
                            <div key={k} className="flex items-center gap-2 text-sm text-slate-700 font-semibold">
                              <span className="text-orange-600 font-bold">✓</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
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
