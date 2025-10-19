import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import alphaShieldImg from "../../assets/alpha/alpha-shield.png";
import alphaSorceressImg from "../../assets/alpha/alpha-sourceress.png";
import alphaSwordImg from "../../assets/alpha/alpha-sword.png";
import alphaFairyImg from "../../assets/alpha/alpha-fairy.png";
import "./AboutPage.css";

export const AboutPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const sections = [
    {
      id: "history",
      title: t("about.history.title"),
      image: alphaShieldImg,
      content: <p>{t("about.history.content")}</p>,
    },
    {
      id: "mission",
      title: t("about.mission.title"),
      image: alphaSorceressImg,
      content: <p>{t("about.mission.content")}</p>,
    },
    {
      id: "team",
      title: t("about.team.title"),
      image: alphaSwordImg,
      content: <p>{t("about.team.content")}</p>,
    },
    {
      id: "why",
      title: t("about.why.title"),
      image: alphaFairyImg,
      content: <p>{t("about.why.content")}</p>,
    },
  ];

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.button
        className="back-button-icon"
        onClick={() => navigate("/")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        {window.innerWidth <= 768 ? "×" : "←"}
      </motion.button>

      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("about.title")}
        </motion.h1>

        <div className="about-sections-list">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="about-section-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div className="about-section-card">
                <img
                  src={section.image}
                  alt={section.title}
                  className="about-section-image"
                />
              </div>
              <div className="about-section-content">
                <h2 className="about-section-title">{section.title}</h2>
                <div className="about-section-text">{section.content}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
