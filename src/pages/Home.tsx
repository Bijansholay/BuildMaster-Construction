import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Building2, HardHat, Ruler, Users } from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { label: "Projects Completed", value: "500+", icon: CheckCircle2 },
  { label: "Years Experience", value: "25+", icon: Building2 },
  { label: "Expert Workers", value: "150+", icon: HardHat },
  { label: "Happy Clients", value: "400+", icon: Users },
];

const featuredServices = [
  {
    title: "Residential Construction",
    description: "Building your dream home with precision and care, from foundation to finish.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Commercial Projects",
    description: "Modern office spaces and retail buildings designed for business success.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Civil Engineering",
    description: "Large-scale infrastructure projects that shape the future of our cities.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=1920&q=80"
            alt="Construction Site"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <span className="inline-block px-4 py-1.5 bg-orange-600 text-white text-sm font-bold rounded-full tracking-wider uppercase">
              Building Excellence Since 1998
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight font-display">
              Constructing Your <br />
              <span className="text-orange-500">Vision into Reality</span>
            </h1>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
              BuildMaster is a leading construction company dedicated to delivering high-quality, sustainable, and innovative building solutions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl hover:shadow-orange-500/20 flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                to="/portfolio"
                className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                View Our Projects
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center space-y-2 p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-orange-600 rounded-3xl -z-0 hidden md:block" />
            <div className="absolute -top-10 -left-10 w-40 h-40 border-8 border-orange-200 rounded-full -z-0 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-orange-600 font-bold tracking-widest uppercase">Who We Are</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight font-display">
                Reliable Construction Services for Every Need
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              With over two decades of experience, BuildMaster has established itself as a premier construction firm. We specialize in turning complex blueprints into stunning architectural landmarks. Our commitment to safety, quality, and sustainability is what sets us apart.
            </p>
            <ul className="space-y-4">
              {["Quality Control System", "Professional & Expert Workers", "100% Satisfaction Guarantee", "Accurate Testing Processes"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-orange-600" size={20} />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-4 transition-all"
            >
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="text-orange-600 font-bold tracking-widest uppercase">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-display">What We Do Best</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              We offer a comprehensive range of construction services tailored to meet the unique needs of our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-900 aspect-[4/5]"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-orange-400 font-bold text-sm hover:text-orange-300 transition-colors"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-orange-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-orange-500/20">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight font-display">
              Ready to Start Your <br className="hidden md:block" /> Next Big Project?
            </h2>
            <p className="text-orange-100 text-xl max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Our experts are ready to help you build your vision.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-xl hover:bg-slate-100 transition-all shadow-xl active:scale-95"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
