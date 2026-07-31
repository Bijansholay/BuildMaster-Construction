import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  Calendar, 
  Clock, 
  CreditCard, 
  Building2, 
  Briefcase, 
  MapPin, 
  X,
  Sparkles,
  TrendingUp,
  Globe2,
  Users2
} from "lucide-react";
import PageHeader from "@/src/components/PageHeader";
import { projects, Project } from "@/src/data/companyInfo";

const categories = [
  "All", 
  "Geotechnical Soil Investigation", 
  "Construction Engineering Services", 
  "Humanitarian Engineering Services", 
  "Project Consultancy"
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.lot.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.contractor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      <PageHeader
        title="Our Portfolio"
        description="Explore Geofathom's track record of Multidisciplinary Engineering and and Innovative Solutions delivered with precision and safety."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Portfolio Stats Banner */}
      <section className="py-12 px-6 max-w-7xl mx-auto -mt-16 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Total Lots</span>
              <span className="text-2xl font-bold text-slate-800">8 Completed</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <Globe2 size={24} />
            </div>
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Regions Covered</span>
              <span className="text-2xl font-bold text-slate-800">Kaduna & Kano</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <Users2 size={24} />
            </div>
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Key Client</span>
              <span className="text-2xl font-bold text-slate-800 text-[15px] sm:text-lg">Nat. Productivity Centre</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">Peak Valuation</span>
              <span className="text-2xl font-bold text-slate-800">₦499M+ (PW48)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Section */}
      <section className="py-8 px-6 sticky top-20 z-30 backdrop-blur-md bg-slate-50/80 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          
          {/* Categories Tab Selector */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-2xl font-semibold text-sm transition-all duration-300 ${
                  activeCategory === cat 
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/20 scale-[1.02]" 
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50 hover:text-slate-800"
                }`}
              >
                {cat === "All" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative max-w-md w-full lg:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search title, contractor, lot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 text-sm transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>

        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title + project.lot + project.year}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100/80 cursor-pointer flex flex-col h-full"
              >
                {/* Image Section */}
                <div className="aspect-[4/3] overflow-hidden relative shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-orange-600 text-white px-3.5 py-1 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    {project.category}
                  </div>

                  {/* Lot badge */}
                  <div className="absolute bottom-4 right-4 bg-slate-900/80 backdrop-blur-md text-orange-400 px-3.5 py-1 rounded-xl text-xs font-bold border border-orange-500/20">
                    {project.lot}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-orange-600 transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-sm font-medium flex items-center gap-1.5">
                      <Briefcase size={14} className="text-orange-500 shrink-0" />
                      <span className="truncate">{project.role}</span>
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-400 shrink-0" />
                      <span className="max-w-[150px] truncate">{project.location.split(",").pop()?.trim()}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-slate-400 shrink-0" />
                      <span>{project.year}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto space-y-4">
            <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">No Projects Found</h3>
            <p className="text-slate-500 max-w-sm mx-auto">
              We couldn't find any projects matching your search query or filters. Try adjusting your settings.
            </p>
          </div>
        )}
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-3xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-slate-100 flex flex-col max-h-[90vh]"
            >
              {/* Header Image Cover */}
              <div className="relative h-64 shrink-0">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20 active:scale-95"
                >
                  <X size={20} />
                </button>

                {/* Badges on Cover */}
                <div className="absolute bottom-6 left-8 right-8 flex flex-wrap gap-3 items-center">
                  <span className="bg-orange-600 text-white px-3.5 py-1 rounded-xl text-xs font-bold uppercase tracking-wider">
                    {selectedProject.category}
                  </span>
                  <span className="bg-white/20 backdrop-blur-md text-orange-400 border border-orange-500/30 px-3.5 py-1 rounded-xl text-xs font-bold">
                    {selectedProject.lot}
                  </span>
                </div>
              </div>

              {/* Modal Details Section (Scrollable) */}
              <div className="p-8 lg:p-10 overflow-y-auto space-y-8">
                {/* Project Title */}
                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-500 font-medium">
                    <MapPin size={16} className="text-orange-500 shrink-0" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Specs Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left Column (Partners & Roles) */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <Building2 size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Employer / Client</span>
                        <span className="text-slate-800 font-bold leading-relaxed">{selectedProject.client}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <Users2 size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Main Contractor</span>
                        <span className="text-slate-800 font-bold leading-relaxed">{selectedProject.contractor}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <Briefcase size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Geofathom's Role</span>
                        <span className="text-slate-800 font-bold leading-relaxed">{selectedProject.role}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column (Time & Budget) */}
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <Calendar size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Award / Commencement Date</span>
                        <span className="text-slate-800 font-bold leading-relaxed">{selectedProject.date}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <Clock size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Project Duration</span>
                        <span className="text-slate-800 font-bold leading-relaxed">{selectedProject.duration}</span>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 border border-orange-100/50">
                        <CreditCard size={22} />
                      </div>
                      <div>
                        <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block">Contract Value</span>
                        <span className="text-orange-600 text-2xl font-extrabold tracking-tight">
                          {selectedProject.projectCost}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-6 bg-white border-t border-slate-100 mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold text-slate-900 leading-tight">Have a Project in Mind?</h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            Let our track record of engineering and consultancy excellence work for you. Reach out to our team of experts to discuss how we can partner on your next development goal.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a 
              href="tel:08036948904"
              className="bg-orange-600 text-white px-8 py-4.5 rounded-2xl font-bold text-lg hover:bg-orange-700 transition-all shadow-xl shadow-orange-500/20 active:scale-95"
            >
              Discuss Your Project
            </a>
            <a 
              href="/contact" 
              className="bg-slate-100 text-slate-700 px-8 py-4.5 rounded-2xl font-bold text-lg hover:bg-slate-200 transition-all active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

