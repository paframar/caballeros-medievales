import { useState } from "react";
import { motion } from "motion/react";
import "./FlippableCard.css";

interface FlippableCardProps {
  frontImage: string;
  backImage: string;
  title: string;
  onClick: () => void;
}

export const FlippableCard = ({
  frontImage,
  backImage,
  title,
  onClick,
}: FlippableCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flippable-card-wrapper">
      <motion.div
        className="flippable-card-container"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className="flippable-card"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front (dorso) */}
          <div className="card-face card-front">
            <img src={frontImage} alt="Carta dorso" />
          </div>

          {/* Back (carta específica) */}
          <div className="card-face card-back">
            <img src={backImage} alt={title} />
          </div>
        </motion.div>
      </motion.div>

      {/* Hover text */}
      {isFlipped && (
        <motion.div
          className="flippable-card-hover-text"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.div>
      )}
    </div>
  );
};
