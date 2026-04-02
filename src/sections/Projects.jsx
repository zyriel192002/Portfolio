import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode, FaPalette, FaServer, FaMobile } from "react-icons/fa";
import loveFrozenImg from "../assets/lovefrozedproducts.png";
import clinicImg from "../assets/recordsmanagementsystem.png";
import assetImg from "../assets/assetmanagement.png";
import studentgrade from "../assets/studentgrade.png";
import inventory from "../assets/sbtinventory.png";
import iresearchimg from "../assets/iresearch.png";

export default function Projects() {
  const projects = [
    {
      title: "Love Frozen Products Inventory System",
      description: "A comprehensive inventory management system for frozen products built with Java, MySQL, and NetBeans IDE. Features include product tracking, stock management, sales reporting, and user authentication.",
      technologies: ["Java", "MySQL", "NetBeans IDE"],
      image: loveFrozenImg,
      github: "https://github.com/username/love-frozen-inventory",
      category: "Full Stack"
    },
    {
      title: "Clinic Records Management System",
      description: "A web application for managing patient records, appointments, and medical history in a clinic setting. Built using VB.NET and MySQL with a user-friendly interface.",
      technologies: ["PHP, MySQL", "Tailwind CSS", "JavaScript"],
      image: clinicImg,
      github: "https://github.com/username/clinic-records-management",
      category: "Web Application"
    },
    {
      title: "Asset Management System",
      description: "A desktop application to track and manage company assets, including asset allocation and reporting. Developed with VB.NET and MySql.",
      technologies: ["VB.NET", "MySQL", "Windows Forms"],
      image: assetImg,
      github: "https://github.com/username/asset-management-system",
      category: "Desktop App"
    },
    {
      title: "Student Grade Management System",
      description: "A web application for managing student grades, attendance, and reports. Built with HTML, Tailwind CSS, PHP and JAVASCRIPT.",
      technologies: ["HTML", "Tailwind CSS", "PHP", "JavaScript"],
      image: studentgrade,
      github: "https://github.com/username/student-grade-management",
      category: "Web Application"
    },
    {
      title: "SBT Inventory Management System",
      description: "A web-based inventory management system for SBT company, allowing users to track products, manage stock levels, and generate reports. Built with React and Laravel for the frontend and backend respectively.",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      image: inventory,
      github: "https://github.com/username/sbt-inventory-system",
      category: "Web Application"
    },
    {
      title: "iResearch: ADigital Repository System for Lyceum of Alabang",
      description: "A digital repository system designed for Lyceum of Alabang to store and manage academic research papers and publications. Built in laravel framework with features like advanced search, user roles, and document management.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS"],
      image: iresearchimg,
      github: "https://github.com/username/iresearch-digital-repository",
      category: "Web Application"
    }
  ];

  const categories = ["All", "Frontend", "Full Stack", "Mobile", "Backend"];

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="relative w-full h-[420px] perspective"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 * index, duration: 0.8 }}
  >
    <motion.div
      className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
      whileHover={{ rotateY: 180 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      {/* FRONT SIDE */}
      <div className="absolute inset-0 w-full h-full backface-hidden bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300">
        
        {/* image */}
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-red-500 bg-opacity-90 text-white text-xs font-medium rounded-full dark:bg-red-600">
              {project.category}
            </span>
          </div>
        </div>

        {/* text content */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          <h3 className="text-xl font-bold text-white mb-2 dark:text-black">
            {project.title}
          </h3>
          <p className="text-gray-300 dark:text-gray-700 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* BACK SIDE */}
      <div className="absolute inset-0 w-full h-full backface-hidden rotateY-180 bg-white text-red-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 shadow-2xl dark:bg-red-800 dark:text-white">

        <motion.h3
          className="text-3xl font-bold mb-6 text-red-800 dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Technologies Used
        </motion.h3>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="px-5 py-3 bg-red-800 text-white text-sm font-bold rounded-full shadow-xl dark:bg-white dark:text-red-800"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.15, duration: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full max-w-sm">
          <motion.a
            href={project.github}
            target="_blank"
            className="px-8 py-4 bg-red-800 text-white rounded-xl flex items-center justify-center gap-3 hover:bg-red-900 transition-all duration-300 dark:bg-white dark:text-red-800 dark:hover:bg-gray-200 font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <FaGithub className="text-xl" />
            View Code
          </motion.a>

          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              className="px-8 py-4 bg-red-800 text-white rounded-xl flex items-center justify-center gap-3 hover:bg-red-900 transition-all duration-300 dark:bg-white dark:text-red-800 dark:hover:bg-gray-200 font-semibold text-lg shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <FaExternalLinkAlt className="text-xl" />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
);


  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-20 bg-gradient-to-br from-black to-red-900 text-white relative overflow-hidden dark:from-gray-50 dark:to-red-50 dark:text-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-red-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-600 rounded-full"></div>
      </div>

      <div className="max-w-7xl w-full z-10">
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
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            A showcase of my recent work and projects. Each project represents a unique challenge and learning experience.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
