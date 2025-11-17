import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-16 py-4 bg-gradient-to-r from-black to-red-900 bg-opacity-90 backdrop-blur-md text-white border-b border-red-500 border-opacity-20 dark:from-gray-50 dark:to-red-50 dark:bg-opacity-90 dark:text-black dark:border-red-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent dark:from-red-600 dark:to-red-800"
        whileHover={{ scale: 1.05 }}
         transition={{ type: "spring", stiffness: 300 }}
      >
        JZL
      </motion.h1>

      <div className="hidden md:flex items-center justify-center space-x-6 lg:space-x-8">
        {[
          { href: "#home", label: "Home" },
          { href: "#aboutme", label: "About Me" },
          { href: "#about", label: "Education" },
          { href: "#skills", label: "Skills" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" }
        ].map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            className="relative text-sm lg:text-base font-medium text-white hover:text-red-200 transition-colors duration-300 cursor-pointer dark:text-black dark:hover:text-red-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.href.substring(1));
            }}
          >
            {item.label}
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-400 rounded-full dark:bg-red-600"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}

        {/* Theme Toggle Button */}
        <motion.button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-red-800 bg-opacity-50 text-red-200 hover:bg-red-700 hover:bg-opacity-60 hover:text-red-100 transition-all duration-300 dark:bg-red-200 dark:text-red-800 dark:hover:bg-red-300"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-2xl dark:text-black"
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </motion.button>

      {}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-gradient-to-r from-black to-red-900 bg-opacity-95 backdrop-blur-md border-b border-red-500 border-opacity-20 md:hidden dark:from-gray-50 dark:to-red-50 dark:bg-opacity-95 dark:border-red-300"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col space-y-4 px-4 py-6">
            {[
              { href: "#home", label: "Home" },
              { href: "#aboutme", label: "About Me" },
              { href: "#about", label: "Education" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contact" }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-white hover:text-red-200 transition-colors duration-300 py-2 cursor-pointer dark:text-black dark:hover:text-red-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                  setIsOpen(false);
                }}
              >
                {item.label}
              </motion.a>
            ))}
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="flex items-center justify-center p-2 rounded-full bg-red-800 bg-opacity-50 text-red-200 hover:bg-red-700 hover:bg-opacity-60 hover:text-red-100 transition-all duration-300 dark:bg-red-200 dark:text-red-800 dark:hover:bg-red-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <FaSun className="text-lg mr-2" /> : <FaMoon className="text-lg mr-2" />}
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
