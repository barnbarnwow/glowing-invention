import { motion } from "framer-motion";
import { itemVariants } from "@/utils/animationVariants";

interface BulletItemProps {
  text: string;
}

/**
 * A component for displaying a bullet point item with consistent styling
 */
const BulletItem = ({ text }: BulletItemProps) => {
  return (
    <motion.li className="flex items-start space-x-2" variants={itemVariants}>
      <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] mt-2"></span>
      <span className="text-[var(--foreground-secondary)]">{text}</span>
    </motion.li>
  );
};

export default BulletItem;
