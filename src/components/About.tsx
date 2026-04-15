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

  // ⭐ CV LINK (CHANGE THIS IF YOU WANT GOOGLE DRIVE OR ANY LINK)
  const CV_LINK = "/cv.pdf"; 
  // Example Google Drive:
  // const CV_LINK = "https://drive.google.com/uc?export=download&id=YOUR_ID";

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV_LINK;
    link.download = "/sadaf ameer.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const stats = [
    { 
      icon: <Briefcase size={28} />, 
      label: "Experience", 
      value: "3+", 
      suffix: "Years",
    },
    { 
      icon: <Rocket size={28} />, 
      label: "Projects", 
      value: "20+", 
      suffix: "Completed",
    },
    { 
      icon: <Award size={28} />, 
      label: "Clients", 
      value: "15+", 
      suffix: "Happy",
    },
  ];

  const expertise = [
    { icon: <Globe size={22} />, title: "Frontend", desc: "React, Next.js, Tailwind" },
    { icon: <Database size={22} />, title: "Backend", desc: "Node.js, Express, Firebase" },
    { icon: <Cpu size={22} />, title: "DevOps", desc: "Vercel, Git, CI/CD" },
  ];

  return (
    <section className="bg-[#061825] py-24 px-6 text-white">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            About <span className="text-[#8AD5E0]">Me</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-center text-white/60 mb-10">
          I am a Fullstack Developer building modern web applications.
        </p>

        {/* Expertise */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {expertise.map((item, i) => (
            <div key={i} className="bg-white/5 p-6 rounded-xl text-center">
              <div className="text-[#8AD5E0] mb-2">{item.icon}</div>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm text-white/60">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-[#8AD5E0]">{stat.icon}</div>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <p className="text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ⭐ CV BUTTON */}
        <div className="flex justify-center">
          <motion.button
            onClick={downloadCV}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#8AD5E0] to-[#6BB5C0] text-black font-semibold"
          >
            <FileText size={18} />
            View / Download CV
            <Download size={16} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}