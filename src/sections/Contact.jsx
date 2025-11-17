import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden dark:from-gray-100 dark:to-white dark:text-black"
    >
      {/* Background Pattern */}
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
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </motion.p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center lg:items-start">
          {/* Social Media Links */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center lg:justify-start lg:pr-10 h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white dark:text-black text-center lg:text-left">Follow Me</h3>

            <div className="space-y-4">
              <motion.a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-red-600 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:bg-red-600 dark:hover:border-red-500"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook className="text-2xl text-blue-500 flex-shrink-0" />
                <span className="text-white dark:text-black font-semibold">Facebook</span>
              </motion.a>

              <motion.a
                href="https://instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-red-600 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:bg-red-600 dark:hover:border-red-500"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaInstagram className="text-2xl text-pink-500 flex-shrink-0" />
                <span className="text-white dark:text-black font-semibold">Instagram</span>
              </motion.a>

              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-red-600 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:bg-red-600 dark:hover:border-red-500"
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="text-2xl text-gray-300 dark:text-gray-700 flex-shrink-0" />
                <span className="text-white dark:text-black font-semibold">GitHub</span>
              </motion.a>
            </div>
          </motion.div>

           {/* Location Section */}
          <motion.div
            className="lg:col-span-1 flex flex-col justify-center lg:pl-10"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white dark:text-black text-center lg:text-left">
              Find Me Here
            </h3>

            <div className="w-full lg:w-[120%] lg:-ml-16 h-[200px] lg:h-[400px] rounded-xl overflow-hidden border border-gray-700 dark:border-gray-300 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.0000!2d120.9842!3d14.4081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d1b0b0b0b0b%3A0x0!2zMTTCsDI0JzI5LjAiTiAxMjDCsDU5JzAzLjEiRQ!5e0!3m2!1sen!2sph!4v1234567890123!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Muntinlupa City Map"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          className="mt-16 pt-8 border-t border-gray-700 dark:border-gray-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <p className="text-gray-400 dark:text-gray-600 text-sm">
            © 2025 John Zyriel Luciano. All rights reserved.
          </p>
        </motion.footer>

      </div>
    </section>
  );
}
