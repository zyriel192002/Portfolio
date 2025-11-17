import { motion } from "framer-motion";
import { FaChess, FaBasketballBall, FaBiking, FaGamepad } from "react-icons/fa";
import { useState, useEffect } from "react";
import aboutme1 from "../assets/aboutme1.jpg";
import aboutme2 from "../assets/aboutme2.jpg";
import aboutme3 from "../assets/aboutme3.jpg";
import aboutme4 from "../assets/aboutme4.jpg";

const images = [aboutme1, aboutme2, aboutme3, aboutme4];


export default function AboutMe() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const hobbies = [
    {
      name: "Chess",
      icon: <FaChess className="text-3xl" />,
      description: "Strategic thinking and mental challenges"
    },
    {
      name: "Basketball",
      icon: <FaBasketballBall className="text-3xl" />,
      description: "Team sports and physical activity"
    },
    {
      name: "Motorcycle Biking",
      icon: <FaBiking className="text-3xl" />,
      description: "Adventure and freedom on the road"
    },
    {
      name: "Mobile Gaming",
      icon: <FaGamepad className="text-3xl" />,
      description: "Casual entertainment and quick challenges"
    }
  ];

  return (
    <section
      id="aboutme"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-16 py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden dark:from-gray-100 dark:to-white dark:text-black"
    >
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
            About Me
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto dark:text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Get to know me better - my background, interests, and what drives my passion for technology.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Personal Description */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-white dark:text-black mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              Who I Am
            </motion.h3>
            <motion.p
              className="text-gray-300 dark:text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              I'm John Zyriel Luciano, a passionate web developer and graduated IT student at Lyceum of Alabang.
              I love creating innovative digital solutions that make a difference. My journey in tech has been driven
              by curiosity and the desire to solve real-world problems through code.
            </motion.p>
            <motion.p
              className="text-gray-300 dark:text-gray-700 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
            >
              When I'm not coding, you can find me playing chess, shooting hoops, exploring on my motorcycle,
              or enjoying some mobile gaming. These hobbies keep me balanced and inspired in my tech journey.
            </motion.p>
          </motion.div>

          {/* Image Slideshow */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0, duration: 1 }}
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Personal photo ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentImage ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>

            {/* Slideshow Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImage
                      ? "bg-red-500 dark:bg-red-600"
                      : "bg-gray-500 dark:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hobbies Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center text-white dark:text-black mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            My Hobbies & Interests
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.name}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-all duration-300 dark:bg-gray-200 dark:bg-opacity-50 dark:border-gray-300 dark:hover:border-red-600 text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.0 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-red-400 dark:text-red-600 mb-4 flex justify-center">
                  {hobby.icon}
                </div>
                <h4 className="text-xl font-bold text-white dark:text-black mb-2">
                  {hobby.name}
                </h4>
                <p className="text-gray-300 dark:text-gray-700 text-sm">
                  {hobby.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

