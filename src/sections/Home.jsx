import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaEye, FaTimes } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";
import profilePicDark from "../assets/profile.jpg";
import profilePicLight from "../assets/profile.jpg";
import resumePdf from "../assets/RESUME.pdf";


export default function Home() {
  const { isDarkMode } = useTheme();
  const profilePic = isDarkMode ? profilePicDark : profilePicLight;
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);

  const openPdfViewer = () => setIsPdfViewerOpen(true);
  const closePdfViewer = () => setIsPdfViewerOpen(false);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 bg-gradient-to-br from-black to-red-900 text-white relative overflow-hidden pt-20 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 dark:from-white dark:to-red-100 dark:text-black"
    >
      {/* Background Pattern */}
      {}
      <motion.div
        className="w-full lg:w-2/3 text-left z-10 mb-8 lg:mb-0 lg:pr-8 xl:pr-12"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white leading-tight dark:text-black"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Hi, I'm
      </motion.h1>
      <motion.div
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-red-200 leading-tight dark:text-red-600"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <TypeAnimation
          sequence={[
            'John Zyriel Luciano',
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          cursor={true}
        />
      </motion.div>


<motion.div
          className="flex flex-wrap justify-start gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
           <motion.div
            className="flex items-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white dark:text-black"
          >
            <FaCode className="mr-4 text-red-400 text-2xl sm:text-3xl lg:text-4xl dark:text-red-600" />
            <TypeAnimation
              sequence={[
                'Full Stack Web Developer',
                2000,
                '',
                500,
                'IT Instructor',
                2000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-red-400 dark:text-red-600"
            />
          </motion.div>
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 dark:text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 1 }}
        >
          I'm a passionate full stack web developer and IT instructor who loves to explore the world of technology and create innovative solutions. With a strong background in web development, I enjoy building responsive and user-friendly websites that make a positive impact.
         
        </motion.p>

        {}
        <motion.div
          className="space-y-3 sm:space-y-4 mt-6 sm:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
<motion.div
            className="flex items-center justify-start text-base sm:text-lg text-white dark:text-black"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <FaEnvelope className="mr-3 text-red-400 dark:text-red-600" />
            <a href="mailto:johnzyrielluciano@gmail.com">
              johnzyrielluciano@gmail.com
            </a>
          </motion.div>


          <motion.div
            className="flex items-center justify-start text-base sm:text-lg text-white dark:text-black"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            <FaPhone className="mr-3 text-red-400 dark:text-red-600" />
            <a href="tel:+639945690721">
              +63 994 569 0721
            </a>
          </motion.div>

          <motion.div
            className="flex items-center justify-start text-base sm:text-lg text-white dark:text-black"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            <FaMapMarkerAlt className="mr-3 text-red-400 dark:text-red-600" />
            Muntinlupa, Philippines
          </motion.div>

<motion.div
            className="flex items-center justify-start"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
          >
            <motion.button
              onClick={openPdfViewer}
              className="flex items-center px-4 py-2 bg-red-800 bg-opacity-50 text-red-200 border border-red-600 rounded-full text-sm sm:text-base font-medium hover:bg-red-700 hover:bg-opacity-60 hover:text-red-100 transition-all duration-300 dark:bg-red-200 dark:text-red-800 dark:border-red-400 dark:hover:bg-red-300 dark:hover:text-red-900"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEye className="mr-2 text-red-400 dark:text-red-600" />
              View CV
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {}
      <motion.div
        className="w-full lg:w-1/3 flex justify-center lg:justify-end z-10 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            src={profilePic}
            alt="Profile"
            className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full object-cover shadow-2xl border-4 border-gray-600 dark:border-gray-400"
            whileHover={{
              scale: 1.05,
              rotate: 2,
              boxShadow: "0 25px 50px -12px rgba(156, 163, 175, 0.5)"
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
</motion.div>
      </motion.div>

      {/* PDF Viewer Modal */}
      <AnimatePresence>
        {isPdfViewerOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePdfViewer}
          >
            <motion.div
              className="relative w-full max-w-4xl h-[90vh] bg-white rounded-lg overflow-hidden dark:bg-gray-800"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
<motion.div
                className="flex items-center justify-between px-4 py-3 bg-red-800 dark:bg-red-900"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-lg font-bold text-white">My Resume - John Zyriel Luciano</h3>
                <motion.button
                  onClick={closePdfViewer}
                  className="p-2 bg-red-700 hover:bg-red-600 text-white rounded"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaTimes />
                </motion.button>
              </motion.div>
              
              {/* PDF Viewer */}
              <iframe
                src={resumePdf}
                className="w-full h-[calc(90vh-60px)]"
                title="Resume PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
