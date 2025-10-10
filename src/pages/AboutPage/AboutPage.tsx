import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

export const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("nav.about")}
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
          className="about-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <section className="about-section">
            <h2>Nuestra Historia</h2>
            <p>
              Caballeros Medievales nació de la pasión por los juegos de
              estrategia y la fascinación por la época medieval. Creado por
              entusiastas del juego de mesa, este proyecto busca transportar a
              los jugadores a un mundo de honor, astucia y batallas épicas.
            </p>
          </section>

          <section className="about-section">
            <h2>Nuestra Misión</h2>
            <p>
              Crear experiencias de juego memorables que combinen estrategia,
              azar y diversión. Queremos que cada partida sea una nueva
              aventura, donde cada decisión cuenta y cada jugador puede
              demostrar su valor.
            </p>
          </section>

          <section className="about-section">
            <h2>El Equipo</h2>
            <p>
              Somos un equipo de diseñadores, ilustradores y jugadores
              apasionados que trabajamos para crear la mejor experiencia
              medieval posible. Cada carta, cada regla y cada detalle ha sido
              cuidadosamente pensado para ofrecerte un juego equilibrado y
              emocionante.
            </p>
          </section>

          <section className="about-section">
            <h2>¿Por qué Caballeros Medievales?</h2>
            <ul>
              <li>⚔️ Estrategia profunda con reglas simples</li>
              <li>🏰 Arte medieval detallado y atmosférico</li>
              <li>🎲 Perfecta combinación de táctica y azar</li>
              <li>👥 Ideal para jugar en familia o con amigos</li>
              <li>🏆 Cada partida es diferente y emocionante</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </motion.div>
  );
};
