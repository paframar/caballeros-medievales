import { useState } from "react";
import { motion } from "motion/react";
import "./FlippableCard.css";

interface FlippableCardProps {
  frontImage: string;
  backImage: string;
  title: string;
  onClick: () => void;
  isFlipped?: boolean;
  onHover?: boolean;
  showHoverText?: boolean;
}

export const FlippableCard = ({
  frontImage,
  backImage,
  title,
  onClick,
  isFlipped = false,
  onHover = true,
  showHoverText,
}: FlippableCardProps) => {
  const [isHoverFlipped, setIsHoverFlipped] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Si onHover es true, usar el estado interno. Si no, usar el prop isFlipped
  const shouldFlip = onHover ? isHoverFlipped : isFlipped;

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (onHover) {
      setIsHoverFlipped(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (onHover) {
      setIsHoverFlipped(false);
    }
  };

  // Si showHoverText está definido, usarlo. Si no, usar la lógica por defecto
  const showText =
    showHoverText !== undefined ? showHoverText : isHovering || isFlipped;

  return (
    <div className="flippable-card-wrapper">
      <motion.div
        className="flippable-card-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <motion.div
          className="flippable-card"
          animate={{ rotateY: shouldFlip ? 180 : 0 }}
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
      {showText && (
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
