import { useState } from "react";
import { motion } from "motion/react";
import { Target, Eye, User } from "lucide-react";
import PageHeader from "@/src/components/PageHeader";
import { values, team } from "@/src/data/companyInfo";

export default function About() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  return (
    <div className="pt-24">
      <PageHeader
        title="About Geofathom"
        description="A legacy of excellence, a future of innovation. Discover the story behind our construction firm."
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-600 font-bold tracking-widest uppercase">Our Story</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Building the Future Since 2015
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Geofathom Engineering Services Ltd. is a multidisciplinary engineering firm committed to delivering innovative, reliable, and sustainable engineering solutions. We specialize in Construction Engineering, Geotechnical Soil Investigation, and Humanitarian Engineering Services. We provide technical expertise that supports infrastructure development, environmental sustainability, and community advancement.              </p>
              <p>
                At Geofathom Engineering Services Ltd., we are committed to providing engineering solutions that not only support infrastructure development but also create lasting value for communities, clients, and society. We Engineer the Future, Strengthen Foundations, and Transform Communities and Societies.              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="text-orange-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-500">To provide high-quality engineering services through professional expertise, cutting-edge technology, and client-focused solutions that contribute to national development and human well-being.</p>             </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Eye className="text-orange-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-500">To be a leading engineering solutions provider recognized for technical excellence, innovation, integrity, and sustainable development</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80"
              alt="Construction Site"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 bg-orange-600 p-8 rounded-2xl text-white shadow-xl hidden md:block">
              <span className="text-4xl font-bold block">25+</span>
              <span className="text-sm font-medium opacity-80 uppercase tracking-wider">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase">Our Values</span>
            <h2 className="text-4xl font-bold text-slate-900">Why Choose Geofathom Engineering Services Limited?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase">Expert Team</span>
            <h2 className="text-4xl font-bold text-slate-900">Meet Our Leadership</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square bg-slate-100 flex items-center justify-center">
                  {member.image && !imageErrors[member.name] ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={() => setImageErrors((prev) => ({ ...prev, [member.name]: true }))}
                    />
                  ) : (
                    <User size={64} className="text-slate-400 stroke-[1.5]" />
                  )}
                  <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-orange-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
