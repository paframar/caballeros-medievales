import { motion } from "motion/react";
import { useState } from "react";
import "./Card.css";

interface CardProps {
  imageSrc: string;
  imageAlt: string;
  onClick?: () => void;
  hoverText?: string;
  hoverTextPosition?: "center" | "left" | "right";
  className?: string;
  style?: React.CSSProperties;
  initial?: any;
  animate?: any;
  transition?: any;
}

export const Card = ({
  imageSrc,
  imageAlt,
  onClick,
  hoverText,
  hoverTextPosition = "center",
  className = "",
  style,
  initial,
  animate,
  transition,
}: CardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card-container">
      <motion.div
        className={`game-card ${className}`}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={initial}
        animate={animate}
        transition={transition}
        style={style}
        whileHover={{
          scale: 1.05,
          boxShadow:
            "0 12px 40px rgba(191, 167, 111, 0.8), 0 4px 16px rgba(230, 201, 122, 0.9), 0 0 24px rgba(191, 167, 111, 0.7)",
        }}
      >
        {isHovered && hoverText && <div className="card-overlay" />}
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={imageAlt} className="card-image" />
        </div>
      </motion.div>
      {isHovered && hoverText && (
        <motion.div
          className={`card-hover-text card-hover-text--${hoverTextPosition}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {hoverText}
        </motion.div>
      )}
    </div>
  );
};
