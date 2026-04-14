import { motion } from "motion/react";

const skills = [
  { name: "HTML", level: 95, color: "#ff6b35" },
  { name: "CSS", level: 90, color: "#3b82f6" },
  { name: "JavaScript", level: 85, color: "#facc15" },
  { name: "React", level: 88, color: "#06b6d4" },
  { name: "Next.js", level: 80, color: "#ffffff" },

  // 🟢 Backend Added
  { name: "Node.js", level: 80, color: "#22c55e" },
  { name: "Express.js", level: 78, color: "#94a3b8" },
  { name: "MongoDB", level: 75, color: "#16a34a" },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#061825] py-24 px-6 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold">
            My <span className="text-[#8AD5E0]">Full Stack Skills</span>
          </h2>
          <p className="mt-4 text-white/50">
            Frontend + Backend technologies I use to build modern apps
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all hover:scale-[1.04] hover:bg-white/10"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
                <span className="text-sm text-white/50">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  style={{ backgroundColor: skill.color }}
                  className="h-full rounded-full"
                />
              </div>

              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 blur-2xl transition duration-500 group-hover:opacity-20"
                style={{ backgroundColor: skill.color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}