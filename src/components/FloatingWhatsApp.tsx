import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { COMPANY_INFO } from "@/src/data/companyInfo";

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappPhone}?text=${encodeURIComponent(COMPANY_INFO.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Chat with us on WhatsApp
      </span>
    </motion.a>
  );
}
