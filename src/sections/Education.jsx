import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Lyceum of Alabang",
      location: "Muntinlupa, Philippines",
      year: "2021 - 2025",
      description: "Focused on software development using Java, VB.NET with Database Management and system analysis. Completed various case studies and capstone projects including desktop applications and database systems.",
      achievements: [
        "Special Acadamic Excellence Award",
        "Book Keeping National Certificate III",
        "Visual Graphics Design National Certificate III",
        "Electronic Products Assembly and Servicing National Certificate II",
        "Computer System Servicing National Certificate II"
      ]
    },
    {
      degree: "Senior High School",
      school: "Muntinlupa National High School Tunasan Annex",
      location: "Muntinlupa, Philippines",
      year: "2019 - 2021",
      description: "Completed ICT (Information and Communications Technology) strand with focus on Computer System Servicing and technical skills.",
      achievements: [
        "Graduated With Honors",
        "Best in Practical Research II",
        "Member of Boy Scouts of the Philippines"
      ]
    },
    {
      degree: "Junior High School",
      school: "Batasan Hills National High School",
      location: "Quezon City, Philippines",
      year: "2015 - 2019",
      description: "Completed junior high school education with focus on core subjects with specialization of information communication and technology. Transferred to Muntinlupa National High School Tunasan Annex to complete junior high school.",
      achievements: [
        "Academic Excellence Award",
        "Consistent Honor Student"
      ]
    },
    {
      degree: "Elementary School",
      school: "F De Mesa Elementary School",
      location: "Muntinlupa, Philippines",
      year: "2009 - 2015",
      description: "Completed elementary education with strong foundation in basic subjects.",
      achievements: [
        "Consistent Honor Student"
      ]
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden dark:from-gray-100 dark:to-white dark:text-black"
    >
      {}

      <div className="max-w-6xl w-full z-10">
        {}
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
            Education
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            My academic journey and the foundation that shaped my passion for technology and development.
          </motion.p>
        </motion.div>

        {}
        <div className="relative">
          {}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 to-red-700 hidden md:block dark:from-red-600 dark:to-red-800"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:ml-16"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.8 }}
            >
              {}
              <motion.div
                className="absolute -left-16 top-6 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-800 hidden md:block dark:bg-red-600 dark:border-gray-200"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 + 0.2 * index, duration: 0.5 }}
              ></motion.div>

              {/* Education Card */}
              <motion.div
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 sm:p-8 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:border-red-600"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-white mb-2 dark:text-black"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + 0.2 * index }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.div
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-red-400 mb-3 dark:text-red-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 + 0.2 * index }}
                    >
                      <div className="flex items-center">
                        <FaGraduationCap className="mr-2" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-gray-400 mb-4 dark:text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + 0.2 * index }}
                    >
                      <FaCalendarAlt className="mr-2" />
                      <span>{edu.year}</span>
                    </motion.div>
                  </div>
                </div>

                <motion.p
                  className="text-gray-300 mb-4 leading-relaxed dark:text-gray-700"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 + 0.2 * index }}
                >
                  {edu.description}
                </motion.p>

                {/* Achievements */}
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 + 0.2 * index }}
                >
                  <h4 className="text-red-400 font-semibold mb-2 dark:text-red-600">Key Achievements:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1 dark:text-gray-700">
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.li
                        key={achIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + 0.2 * index + 0.1 * achIndex }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
