import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Search } from "lucide-react";

const categories = ["All", "Residential", "Commercial", "Industrial", "Renovation"];

const projects = [
  {
    title: "Skyline Heights Apartments",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    location: "Downtown Metropolis",
    year: "2023",
  },
  {
    title: "Global Tech Office Park",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    location: "Innovation District",
    year: "2022",
  },
  {
    title: "Modern Waterfront Villa",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    location: "Ocean View Estates",
    year: "2023",
  },
  {
    title: "Central Logistics Hub",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    location: "Industrial Zone A",
    year: "2021",
  },
  {
    title: "Historic Plaza Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=800&q=80",
    location: "Old Town Square",
    year: "2022",
  },
  {
    title: "Eco-Friendly Retail Center",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    location: "Green Valley",
    year: "2023",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
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
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto"
          >
            Explore our diverse range of completed projects, showcasing our commitment to quality and innovation.
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 bg-white border-b border-slate-100 sticky top-20 z-30 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-orange-600 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        <Search size={24} />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink size={18} className="text-slate-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500 font-medium">
                      <span>{project.location}</span>
                      <span className="text-slate-300">|</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900">Have a Vision for Your Own Project?</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            We're ready to bring our expertise to your next construction challenge. Let's build something extraordinary together.
          </p>
          <button className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-500/20 active:scale-95">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
