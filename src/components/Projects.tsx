import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Markazz Shop",
    description: "Premium e-commerce shopping platform.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    demo: "https://markazzshop.com",
  },
  {
    title: "Lazak",
    description: "Modern Next.js web app.",
    image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=600&h=400&fit=crop",
    demo: "https://lazak.vercel.app/",
  },
  {
    title: "Hamme",
    description: "Business digital platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    demo: "https://hamme.com.pk",
  },
  {
    title: "Aurelius Food",
    description: "Food ordering platform.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    demo: "https://aurelius-food.vercel.app/",
  },
  {
    title: "Education System",
    description: "School management system.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
    demo: "https://al-manzoor-education-system-gogera.vercel.app/",
  },
  {
    title: "Aurelius Collection",
    description: "Fashion e-commerce store.",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=600&h=400&fit=crop",
    demo: "https://aurelius-collection.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#061825] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            Featured <span className="text-[#8AD5E0]">Projects</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.03] transition-all"
            >

              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold group-hover:text-[#8AD5E0] transition">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {project.description}
                </p>

                <a
                  href={project.demo}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 bg-[#8AD5E0] px-4 py-2 rounded-full text-black text-sm font-semibold hover:scale-105 transition"
                >
                  <ExternalLink size={16} /> Visit Site
                </a>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}