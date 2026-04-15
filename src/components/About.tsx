import { motion } from "motion/react";
import { Code2, Rocket, Cpu, Globe, Database, TrendingUp, Award, Briefcase, Download, FileText, Sparkles, Zap, Users, Heart, Star, Diamond } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      icon: <Briefcase size={28} />, 
      label: "Experience", 
      value: "3+", 
      suffix: "Years",
      gradient: "from-[#8AD5E0]/20 to-[#6BB5C0]/10"
    },
    { 
      icon: <Rocket size={28} />, 
      label: "Projects", 
      value: "20+", 
      suffix: "Completed",
      gradient: "from-[#8AD5E0]/20 to-[#6BB5C0]/10"
    },
    { 
      icon: <Award size={28} />, 
      label: "Clients", 
      value: "15+", 
      suffix: "Happy",
      gradient: "from-[#8AD5E0]/20 to-[#6BB5C0]/10"
    },
  ];

  const expertise = [
    { icon: <Globe size={22} />, title: "Frontend", desc: "React, Next.js, Tailwind", tech: "⚡ Modern UI/UX" },
    { icon: <Database size={22} />, title: "Backend", desc: "Node.js, Express, Firebase", tech: "🚀 Scalable APIs" },
    { icon: <Cpu size={22} />, title: "DevOps", desc: "Vercel, Git, CI/CD", tech: "🔄 Auto Deploy" },
  ];

  // Marquee items for carousel
  const marqueeItems = [
    { icon: <Heart size={20} />, text: "Happy Clients", value: "15+" },
    { icon: <Star size={20} />, text: "5 Star Rating", value: "100%" },
    { icon: <Users size={20} />, text: "Repeat Clients", value: "90%" },
    { icon: <Heart size={20} />, text: "Client Satisfaction", value: "98%" },
    { icon: <Star size={20} />, text: "On Time Delivery", value: "95%" },
    { icon: <Users size={20} />, text: "Global Clients", value: "10+" },
  ];

  // Double the items for seamless loop
  const doubledMarqueeItems = [...marqueeItems, ...marqueeItems];

const downloadCV = async () => {
  try {
    const response = await fetch('/_Sadaf_Ameer_CV  (5) (1).pdf');
    if (!response.ok) throw new Error('CV not found');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = "Sadaf_Ameer_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error:', error);
    alert('CV file not found. Please contact administrator.');
  }
};
  return (
    <section id="about" className="bg-[#061825] py-24 px-6 text-white relative overflow-hidden">
      {/* Simple Background - No Animations */}
      <div className="absolute inset-0 bg-[#061825]" />

      <div className="mx-auto max-w-5xl relative z-10">

        {/* Heading with Animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#8AD5E0] bg-[#8AD5E0]/10 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles size={14} /> About Me
          </motion.span>
          
          <h2 className="text-4xl sm:text-5xl font-bold">
            Crafting Digital <br />
            <span className="text-[#8AD5E0] relative inline-block">
              Experiences that Matter
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#8AD5E0] to-transparent"
              />
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-white/60 leading-relaxed text-base sm:text-lg">
            I am Sadaf Ameer, a Fullstack Developer passionate about building
            modern, scalable and high-performance web applications. I focus on
            clean UI, smooth UX and strong backend logic.
          </p>
        </motion.div>

        {/* Expertise Cards - ROW 1 with Diamond Animation on Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5, type: "spring" }}
              className="relative group cursor-pointer"
            >
              {/* Diamond Animation on Hover */}
              <motion.div
                initial={{ rotate: 0, scale: 0 }}
                whileHover={{ rotate: 45, scale: 1.5 }}
                transition={{ duration: 0.3 }}
                className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] opacity-0 group-hover:opacity-100 rounded-sm"
                style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
              />
              
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 group-hover:border-[#8AD5E0]/50 transition-all duration-300 overflow-hidden">
                {/* Diamond Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                
                {/* Diamond Rotating Icon on Hover */}
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 inline-flex p-3 rounded-xl bg-[#8AD5E0]/10 text-[#8AD5E0]"
                >
                  {item.icon}
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#8AD5E0] transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mb-2">{item.desc}</p>
                <span className="text-xs text-[#8AD5E0]/70">{item.tech}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Cards - ROW 2 with Diamond Animation on Hover */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mb-6"
          >
            <h3 className="text-2xl font-bold text-[#8AD5E0] flex items-center justify-center gap-2">
              <Users size={24} />
              Client Satisfaction
              <Heart size={20} className="text-red-400 animate-pulse" />
            </h3>
          </motion.div>

          {/* Marquee/Carousel for Happy Clients */}
          <div className="relative overflow-hidden py-4">
            <motion.div
              animate={{
                x: [0, -1920],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              className="flex gap-6 whitespace-nowrap"
            >
              {doubledMarqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#8AD5E0]/10 to-[#022F51]/30 backdrop-blur-xl px-6 py-3 rounded-full border border-[#8AD5E0]/20"
                >
                  <span className="text-[#8AD5E0]">{item.icon}</span>
                  <span className="text-white font-medium">{item.text}</span>
                  <span className="text-[#8AD5E0] font-bold text-lg">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Watch-style Animated Stats Section with Diamond Hover */}
        <div className="mb-12">
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                <span className="text-[#8AD5E0]">Live Stats</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap size={20} className="text-[#8AD5E0]" />
                </motion.div>
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center relative group cursor-pointer"
                >
                  {/* Diamond Animation on Hover */}
                  <motion.div
                    initial={{ rotate: 0, scale: 0 }}
                    whileHover={{ rotate: 45, scale: 1.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] opacity-0 group-hover:opacity-100 rounded-sm z-20"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                  />
                  
                  <div className="relative">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="inline-flex p-4 rounded-full bg-[#8AD5E0]/10 mb-4"
                    >
                      {stat.icon}
                    </motion.div>
                    
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="flex items-baseline justify-center gap-1"
                    >
                      <span className="text-5xl font-bold bg-gradient-to-r from-white to-[#8AD5E0] bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                      <span className="text-xl text-[#8AD5E0] font-semibold">{stat.suffix}</span>
                    </motion.div>
                    
                    <p className="text-sm text-white/60 uppercase tracking-wide mt-2">
                      {stat.label}
                    </p>
                    
                    {/* Animated progress ring */}
                    <div className="mt-4 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        animate={{
                          width: ["0%", "100%", "0%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-full bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button with Diamond Hover */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-8 relative group"
        >
          {/* Diamond Animation on Button Hover */}
          <motion.div
            initial={{ rotate: 0, scale: 0 }}
            whileHover={{ rotate: 45, scale: 2 }}
            transition={{ duration: 0.3 }}
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] opacity-0 group-hover:opacity-100 rounded-sm z-20"
            style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
          />
          
          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] text-black font-semibold overflow-hidden shadow-lg hover:shadow-xl hover:shadow-[#8AD5E0]/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <FileText size={18} className="relative z-10" />
            <span className="relative z-10">Download CV</span>
            <Download size={16} className="relative z-10 group-hover:translate-y-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center gap-3 mt-8 text-xs text-white/40"
        >
          <Zap size={12} className="text-[#8AD5E0]" />
          <span>Available for freelance work</span>
          <TrendingUp size={12} className="text-[#8AD5E0]" />
        </motion.div>
      </div>
    </section>
  );
}