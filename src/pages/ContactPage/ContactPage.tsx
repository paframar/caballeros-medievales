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
      <div className="contact-container">
        <motion.h1
          className="contact-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("nav.contact")}
        </motion.h1>

        <motion.button
          className="back-button"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Volver al inicio
        </motion.button>

        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="contact-description">
            ¿Tienes preguntas sobre Caballeros Medievales? ¿Quieres saber más
            sobre el juego o cómo conseguirlo?
          </p>

          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <p>contacto@caballerosmedievales.com</p>
            </div>

            <div className="contact-item">
              <h3>🏰 Redes Sociales</h3>
              <p>@caballerosmedievales</p>
            </div>

            <div className="contact-item">
              <h3>📍 Ubicación</h3>
              <p>Reino Medieval Digital</p>
            </div>
          </div>

          <p className="contact-footer-text">
            Estamos aquí para ayudarte en tu aventura medieval. ¡No dudes en
            contactarnos!
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
