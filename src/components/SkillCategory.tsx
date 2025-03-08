import { motion } from "framer-motion";
import { itemVariants, cardVariants } from "@/utils/animationVariants";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

/**
 * A component that displays a category of skills in a card format
 */
const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <motion.div
      className="card bg-[var(--background-secondary)] p-6 rounded-xl shadow-md border border-[var(--border-color)] hover:shadow-lg transition-shadow"
      variants={cardVariants}
    >
      <h3 className="text-xl font-medium mb-4 text-[var(--foreground-primary)]">
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className="flex items-center space-x-2"
            variants={itemVariants}
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)]"></span>
            <span className="text-[var(--foreground-secondary)]">{skill}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
