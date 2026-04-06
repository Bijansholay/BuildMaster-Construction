import { motion } from "motion/react";
import { Target, Eye, ShieldCheck, Award, Clock, Users2 } from "lucide-react";

const values = [
  {
    title: "Safety First",
    description: "We prioritize the safety of our workers and clients above all else, maintaining strict compliance with all safety regulations.",
    icon: ShieldCheck,
  },
  {
    title: "Quality Excellence",
    description: "We never compromise on the quality of materials or craftsmanship, ensuring every project stands the test of time.",
    icon: Award,
  },
  {
    title: "Timely Delivery",
    description: "We understand the importance of deadlines and work tirelessly to ensure every project is completed on schedule.",
    icon: Clock,
  },
  {
    title: "Client Collaboration",
    description: "We believe in transparent communication and working closely with our clients to bring their vision to life.",
    icon: Users2,
  },
];

const team = [
  {
    name: "Robert Harrison",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Sarah Jenkins",
    role: "Chief Architect",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Michael Chen",
    role: "Head of Engineering",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "David Miller",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
  },
];

export default function About() {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
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
            About BuildMaster
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            A legacy of excellence, a future of innovation. Discover the story behind our construction firm.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-600 font-bold tracking-widest uppercase">Our Story</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Building the Future Since 1998
              </h2>
            </div>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                BuildMaster started as a small family-owned business with a single mission: to provide honest, high-quality construction services to our local community. Over the last 25 years, we have grown into a multi-disciplinary firm capable of handling the most complex engineering challenges.
              </p>
              <p>
                Our growth has been fueled by our unwavering commitment to our core values and the trust we've built with our clients. We don't just build structures; we build relationships that last as long as the buildings we create.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Target className="text-orange-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-500">To deliver superior construction services through innovation, integrity, and a commitment to safety.</p>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                <Eye className="text-orange-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-500">To be the most trusted and innovative construction partner, shaping skylines and communities worldwide.</p>
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
            <h2 className="text-4xl font-bold text-slate-900">What Drives Us</h2>
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
                <div className="relative mb-6 overflow-hidden rounded-3xl aspect-square">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
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
