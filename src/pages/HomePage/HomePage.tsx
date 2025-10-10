import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../../components/Card/Card";
import banderaImg from "../../assets/cards/caballeros-medievales-bandera.png";
import castilloImg from "../../assets/cards/caballeros-medievales-castillo.png";
import caballeroImg from "../../assets/cards/caballeros-medievales-caballero.png";
import "./HomePage.css";

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFlagClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    } else {
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
                x: windowWidth < 480 ? -80 : windowWidth < 768 ? -120 : -180,
                y: windowWidth < 480 ? 40 : windowWidth < 768 ? 60 : 80,
                rotate: -15,
                scale: windowWidth < 480 ? 0.7 : windowWidth < 768 ? 0.8 : 1,
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
        <motion.div
          className="card-wrapper card-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: windowWidth < 480 ? 0.7 : windowWidth < 768 ? 0.8 : 1,
          }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card
            imageSrc={banderaImg}
            imageAlt="Bandera"
            onClick={handleFlagClick}
            hoverText={isExpanded ? t("nav.rules") : t("nav.startPlaying")}
            hoverTextPosition="center"
            style={{ zIndex: 10 }}
          />
        </motion.div>

        {/* CARD RIGHT */}
        <AnimatePresence mode="wait">
          {isExpanded && (
            <motion.div
              key="knight-card"
              className="card-wrapper card-right"
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
              animate={{
                opacity: 1,
                x: windowWidth < 480 ? 80 : windowWidth < 768 ? 120 : 180,
                y: windowWidth < 480 ? 40 : windowWidth < 768 ? 60 : 80,
                rotate: 15,
                scale: windowWidth < 480 ? 0.7 : windowWidth < 768 ? 0.8 : 1,
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
                hoverText={t("nav.about")}
                hoverTextPosition="right"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
