import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

export const ContactPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      className="contact-page"
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

      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("contact.title")}
        </motion.h1>

        <motion.div
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="contact-description">
            <p>{t("contact.description.question1")}</p>
            <p>{t("contact.description.question2")}</p>
          </div>
        </motion.div>

        <div className="contact-info">
          <motion.div
            className="contact-item-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>{t("contact.email.label")}</h3>
              <p>{t("contact.email.value")}</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-item-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">🏰</div>
              <h3>{t("contact.social.label")}</h3>
              <p>{t("contact.social.value")}</p>
            </div>
          </motion.div>

          <motion.div
            className="contact-item-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>{t("contact.location.label")}</h3>
              <p>{t("contact.location.value")}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="contact-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="contact-footer-text">{t("contact.footer")}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};
