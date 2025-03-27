import { useState } from 'react';
import { motion } from "framer-motion";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState('MERN Stack++');

  const skillCategories = {
    'Lenguajes': ['C', 'HTML5', 'CSS', 'JavaScript'],
    'MERN Stack++': ['Express.js', 'Node.js', 'React', 'MongoDB', 'MySQL', 'Cypress', 'JWT', 'Jest  ', 'Swagger'],
    'Herramientas': ['Git', 'VS Code', 'Postman', 'Docker', 'JMeter']
  };

  return (
    <section className="container mx-auto my-12 p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Habilidades
      </h2>
      <div className="flex justify-center text-center space-x-4 mb-8">
        {Object.keys(skillCategories).map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-t-md cursor-pointer ${activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-800'
              }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        {skillCategories[activeCategory].map(skill => (
          <motion.div
            key={skill}
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-r from-teal-100 to-white100 shadow-md rounded-lg p-4 text-center"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
