import { motion } from "motion/react";

export default function WhatsAppButton() {
  const phoneNumber = "923295806515";
  const message = "Hi Sadaf, I saw your portfolio and would like to connect!";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:bg-[#128C7E]"
    >
      {/* Real WhatsApp Icon SVG */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        width="28" 
        height="28" 
        fill="currentColor"
      >
        <path d="M12.032 2.002c-5.517 0-10 4.483-10 10 0 1.874.514 3.63 1.41 5.149l-1.422 4.708 4.885-1.351a9.96 9.96 0 0 0 5.127 1.421c5.518 0 10-4.483 10-10s-4.482-9.927-10-9.927zm0 18.416a8.291 8.291 0 0 1-4.248-1.165l-.305-.182-3.038.84.835-2.98-.199-.316a8.237 8.237 0 0 1-1.27-4.197c0-4.564 3.713-8.278 8.278-8.278s8.277 3.714 8.277 8.278-3.713 8.277-8.277 8.277zm4.549-6.197c-.249-.124-1.472-.726-1.7-.808-.227-.083-.394-.124-.559.124-.165.248-.639.808-.783.974-.145.166-.29.186-.539.062s-1.052-.388-2.003-1.236c-.74-.66-1.24-1.477-1.385-1.727-.145-.249-.015-.384.109-.508.111-.111.249-.29.373-.435.125-.145.166-.249.249-.414.083-.166.041-.311-.021-.435-.062-.124-.559-1.347-.765-1.844-.201-.484-.406-.419-.559-.427-.145-.008-.311-.008-.477-.008s-.435.062-.663.311c-.228.249-.87.85-.87 2.074 0 1.224.891 2.407 1.015 2.573.124.166 1.752 2.674 4.244 3.75.593.256 1.056.408 1.418.522.595.19 1.137.163 1.565.099.478-.072 1.472-.602 1.679-1.184.207-.582.207-1.082.145-1.186-.062-.104-.228-.166-.478-.29z"/>
      </svg>
    </motion.a>
  );
}