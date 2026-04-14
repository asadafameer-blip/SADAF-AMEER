import { motion } from "motion/react";
import { Github, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/asadafameer-blip", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/sadaf-ameer-654864386", label: "LinkedIn" },
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/profile.php?id=61579831676376", label: "Facebook" },
    { icon: <Mail size={20} />, href: "mailto:asadafameer@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-[#061825] pt-24 pb-12 px-6 border-t border-white/10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="font-display text-3xl font-bold tracking-tighter">
              SADAF<span className="text-[#8AD5E0]">.</span>
            </a>
            <p className="mt-6 max-w-sm text-white/50 leading-relaxed">
              A passionate Frontend Developer dedicated to building high-quality, 
              user-centric web applications. Let's collaborate and bring your 
              ideas to life.
            </p>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, color: "#8AD5E0" }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/60 transition-all duration-300 hover:bg-white/10 hover:text-[#8AD5E0]"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white">Quick Links</h4>
            <ul className="mt-6 space-y-4">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="text-white/50 transition-all duration-300 hover:text-[#8AD5E0] hover:pl-2"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white">Contact Info</h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3 text-white/50 transition-all duration-300 hover:text-white">
                <Mail size={18} className="text-[#8AD5E0]" />
                <a href="mailto:asadafameer@gmail.com" className="hover:text-[#8AD5E0]">asadafameer@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 transition-all duration-300 hover:text-white">
                <Phone size={18} className="text-[#8AD5E0]" />
                <a href="tel:+923295806515" className="hover:text-[#8AD5E0]">+92 329 5806515</a>
              </li>
              <li className="flex items-center gap-3 text-white/50 transition-all duration-300 hover:text-white">
                <MapPin size={18} className="text-[#8AD5E0]" />
                <span>Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} Sadaf Ameer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}