import { motion } from "framer-motion";
import { FaCode, FaNetworkWired, FaTools, FaJava, FaHtml5, FaCss3, FaPhp, FaDatabase, FaReact, FaPalette, FaFilm } from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiDotnet, SiLaravel, SiAdobephotoshop, SiJavascript } from "react-icons/si";

export default function Skill() {
  const programmingSkills = [
    {
      name: "Java",
      icon: <FaJava className="text-3xl sm:text-4xl" />,
      description: "Object-oriented programming, data structures, algorithms, and application development.",
      percentage: 40
    },
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-3xl sm:text-4xl" />,
      description: "Semantic markup, accessibility, and modern web standards.",
      percentage: 50
    },
    {
      name: "CSS3",
      icon: <FaCss3 className="text-3xl sm:text-4xl" />,
      description: "Responsive design, animations, and modern layout techniques.",
      percentage: 50
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-3xl sm:text-4xl" />,
      description: "Utility-first CSS framework for rapid UI development.",
      percentage: 45
    },
    {
      name: "PHP",
      icon: <FaPhp className="text-3xl sm:text-4xl" />,
      description: "Server-side scripting, web development, and database integration.",
      percentage: 55
    },
    {
      name: "Laravel",
      icon: <SiLaravel className="text-3xl sm:text-4xl" />,
      description: "PHP framework for elegant web application development.",
      percentage: 55
    },
    {
      name: "VB.NET",
      icon: <SiDotnet className="text-3xl sm:text-4xl" />,
      description: "Windows application development and .NET framework.",
      percentage: 60
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="text-3xl sm:text-4xl" />,
      description: "Database design, SQL queries, and data management.",
      percentage: 50
    },
    {
      name: "React",
      icon: <FaReact className="text-3xl sm:text-4xl" />,
      description: "Component-based JavaScript library for building user interfaces.",
      percentage: 35
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="text-3xl sm:text-4xl" />,
      description: "Dynamic programming language for web development and interactivity.",
      percentage: 50
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="text-3xl sm:text-4xl" />,
      description: "Component-based CSS framework for responsive web design.",
      percentage: 50
    }
  ];

  const otherSkills = [
    {
      name: "Networking",
      icon: <FaNetworkWired className="text-3xl sm:text-4xl" />,
      description: "Network configuration, troubleshooting, and infrastructure management.",
      percentage: 55
    },
    {
      name: "Troubleshooting",
      icon: <FaTools className="text-3xl sm:text-4xl" />,
      description: "System diagnostics, problem-solving, and technical support.",
      percentage: 55
    },
    {
      name: "Adobe Photoshop",
      icon: <SiAdobephotoshop className="text-3xl sm:text-4xl" />,
      description: "Image editing, graphic design, and digital art creation.",
      percentage: 45
    },
    {
      name: "Adobe Animate",
      icon: <FaFilm className="text-3xl sm:text-4xl" />,
      description: "Animation creation, interactive content, and multimedia design.",
      percentage: 45
    }
  ];

  const SkillCard = ({ skill, index }) => (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:border-red-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 * index, duration: 0.8 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center mb-4">
        <div className="text-red-400 mr-4 dark:text-red-600">
          {skill.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 dark:text-black">
            {skill.name}
          </h3>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-red-400 font-medium dark:text-red-600">
              {skill.percentage}%
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-600">
              Proficiency
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2 dark:bg-gray-300">
            <motion.div
              className="bg-red-500 h-2 rounded-full dark:bg-red-600"
              initial={{ width: 0 }}
              animate={{ width: `${skill.percentage}%` }}
              transition={{ delay: 0.5 + (0.1 * index), duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed dark:text-gray-700">
        {skill.description}
      </p>
    </motion.div>
  );

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden dark:from-gray-100 dark:to-white dark:text-black"
    >
      {/* Background Pattern */}

      <div className="max-w-6xl w-full z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent dark:from-red-600 dark:to-red-800"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            A comprehensive overview of my technical skills and areas of expertise in software development and IT.
          </motion.p>
        </motion.div>

        {/* Programming & Development Skills */} 
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white dark:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <FaCode className="inline mr-3 text-red-400 dark:text-red-600" />
            Programming & Development
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white dark:text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <FaTools className="inline mr-3 text-red-400 dark:text-red-600" />
            Technical Skills
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
