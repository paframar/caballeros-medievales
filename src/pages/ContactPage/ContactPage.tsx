import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import background5Img from "../../assets/backgrounds/background-5.png";
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
        ←
      </motion.button>

      <div className="contact-container">
        <motion.div
          className="contact-illustration"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src={background5Img} alt="Ilustración medieval de contacto" />
        </motion.div>

        <motion.div
          className="contact-content-wrapper"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h1
            className="contact-title"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t("nav.contact")}
          </motion.h1>

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="contact-description">
              <p>¿Tienes preguntas sobre Caballeros Medievales?</p>
              <p>¿Quieres saber más sobre el juego o cómo conseguirlo?</p>
            </div>

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
                <p>España</p>
              </div>
            </div>

            <p className="contact-footer-text">
              Estamos aquí para ayudarte en tu aventura medieval. ¡No dudes en
              contactarnos!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
