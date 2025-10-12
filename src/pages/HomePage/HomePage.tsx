import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../../components/Card/Card";
import { FlippableCard } from "../../components/FlippableCard";
import banderaImg from "../../assets/cards/caballeros-medievales-bandera.png";
import dorsoImg from "../../assets/cards/caballeros-medievales-dorso.png";
import castilloImg from "../../assets/cards/caballeros-medievales-castillo.png";
import caballeroImg from "../../assets/cards/caballeros-medievales-caballero.png";
import "./HomePage.css";

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Función para calcular valores de animación basados en el tamaño de la ventana
  const getAnimationValues = () => {
    if (windowWidth < 480) {
      return { x: 70, y: 0, rotate: 8, scale: 0.85 };
    } else if (windowWidth < 600) {
      return { x: 90, y: 10, rotate: 10, scale: 0.9 };
    } else if (windowWidth < 768) {
      return { x: 110, y: 15, rotate: 11, scale: 0.95 };
    } else if (windowWidth < 1024) {
      return { x: 150, y: 25, rotate: 12, scale: 0.98 };
    } else {
      return { x: 190, y: 35, rotate: 13, scale: 1 };
    }
  };

  const animValues = getAnimationValues();

  const handleFlagClick = () => {
    if (!isFlipped) {
      // Primera fase: voltear la carta
      setIsFlipped(true);

      // Después del flip, expandir las otras cartas
      setTimeout(() => {
        setIsExpanded(true);
      }, 600); // Duración de la animación de flip
    } else if (isFlipped && isExpanded) {
      // Si ya está todo expandido, navegar a las reglas
      navigate("/rules");
    }
  };

  const handleCastleClick = () => {
    navigate("/contact");
  };

  const handleKnightClick = () => {
    navigate("/about");
  };

  return (
    <div className="home-page">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {t("home.title")}
      </motion.h1>

      <div className="cards-container">
        {/* CARD LEFT */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="castle-card"
              className="card-wrapper card-left"
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                x: -animValues.x,
                y: animValues.y,
                rotate: -animValues.rotate,
                scale: animValues.scale,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.6,
              }}
            >
              <Card
                imageSrc={castilloImg}
                imageAlt="Castillo"
                onClick={handleCastleClick}
                hoverText={t("nav.contact")}
                hoverTextPosition="left"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CARD CENTER */}
        <AnimatePresence mode="wait">
          {!isFlipped ? (
            <motion.div
              key="flippable-card"
              className="card-wrapper card-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: animValues.scale,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FlippableCard
                frontImage={dorsoImg}
                backImage={banderaImg}
                title={t("nav.startPlaying")}
                onClick={handleFlagClick}
                isFlipped={false}
                onHover={false}
              />
            </motion.div>
          ) : (
            <motion.div
              key="regular-card"
              className="card-wrapper card-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: animValues.scale,
              }}
              transition={{ duration: 0.5 }}
            >
              <Card
                imageSrc={banderaImg}
                imageAlt="Bandera"
                onClick={handleFlagClick}
                hoverText="Las Reglas"
                hoverTextPosition="center"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* CARD RIGHT */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="knight-card"
              className="card-wrapper card-right"
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                x: animValues.x,
                y: animValues.y,
                rotate: animValues.rotate,
                scale: animValues.scale,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
                duration: 0.6,
              }}
            >
              <Card
                imageSrc={caballeroImg}
                imageAlt="Caballero"
                onClick={handleKnightClick}
                hoverText="El Juego"
                hoverTextPosition="right"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
