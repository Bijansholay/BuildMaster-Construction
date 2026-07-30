import { motion } from "motion/react";

interface PageHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

export default function PageHeader({ title, description, backgroundImage }: PageHeaderProps) {
  return (
    <section className="bg-slate-900 py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={backgroundImage}
          alt={`${title} Background`}
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
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-xl max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
