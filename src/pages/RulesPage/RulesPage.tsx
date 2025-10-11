import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../components/Modal";
import banderaImg from "../../assets/cards/caballeros-medievales-bandera.png";
import caballeroImg from "../../assets/cards/caballeros-medievales-caballero.png";
import ladronImg from "../../assets/cards/caballeros-medievales-ladron.png";
import hechiceraImg from "../../assets/cards/caballeros-medievales-hechicera.png";
import duendeImg from "../../assets/cards/caballeros-medievales-duende.png";
import hadaImg from "../../assets/cards/caballeros-medievales-hada.png";
import espadaImg from "../../assets/cards/caballeros-medievales-espada.png";
import escudoImg from "../../assets/cards/caballeros-medievales-escudo.png";
import castilloImg from "../../assets/cards/caballeros-medievales-castillo.png";
import catapultaImg from "../../assets/cards/caballeros-medievales-catapulta.png";
import cambioImg from "../../assets/cards/caballeros-medievales-cambio-de-carta.png";
import dadoImg from "../../assets/cards/caballeros-medievales-dado.png";
import "./RulesPage.css";

export const RulesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const cardImages: Record<string, string> = {
    flag: banderaImg,
    knight: caballeroImg,
    thief: ladronImg,
    sorceress: hechiceraImg,
    goblin: duendeImg,
    fairy: hadaImg,
    sword: espadaImg,
    shield: escudoImg,
    castle: castilloImg,
    catapult: catapultaImg,
    card_swap: cambioImg,
    dice: dadoImg,
  };

  const cardNames = [
    "flag",
    "knight",
    "thief",
    "sorceress",
    "goblin",
    "fairy",
    "sword",
    "shield",
    "castle",
    "catapult",
    "card_swap",
    "dice",
  ];

  return (
    <motion.div
      className="rules-page"
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

      <div className="rules-container">
        <motion.h1
          className="rules-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("nav.rules")}
        </motion.h1>

        <motion.div
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2>Objetivo</h2>
          <p>{t("rules.objective")}</p>
        </motion.div>

        <motion.div
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h2>Preparación</h2>
          <ul>
            {(
              t("rules.setup.description", { returnObjects: true }) as string[]
            ).map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>Cartas del Juego</h2>
          <div className="cards-grid">
            {cardNames.map((cardName, index) => (
              <motion.div
                key={cardName}
                className="card-rule-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.25 + index * 0.03, duration: 0.4 }}
                onClick={() => setActiveModal(cardName)}
                whileHover={{
                  scale: 1.15,
                  boxShadow:
                    "0 12px 40px rgba(191, 167, 111, 0.8), 0 4px 16px rgba(230, 201, 122, 0.9), 0 0 24px rgba(191, 167, 111, 0.7)",
                }}
              >
                <motion.div
                  className="card-rule-card"
                  whileHover={{
                    x: [0, -3, 3, -3, 0],
                    y: [0, -2, 2, -2, 0],
                    rotate: [0, -2, 2, -1, 0],
                    scale: [1, 1, 1, 1, 1.05],
                  }}
                  transition={{
                    duration: 0.6,
                    times: [0, 0.2, 0.4, 0.6, 1],
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src={cardImages[cardName]}
                    alt={t(`rules.cards.${cardName}.name`)}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modals */}
      {cardNames.map((cardName) => (
        <Modal
          key={cardName}
          isOpen={activeModal === cardName}
          onClose={() => setActiveModal(null)}
          title={t(`rules.cards.${cardName}.name`)}
        >
          <div className="modal-card-animation">
            <motion.img
              src={cardImages[cardName]}
              alt={t(`rules.cards.${cardName}.name`)}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="modal-card-image"
            />
          </div>
          <p>{t(`rules.cards.${cardName}.description`)}</p>
          {cardName === "dice" && (
            <ul className="dice-effects">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <li key={num}>
                  <strong>{num}:</strong> {t(`rules.cards.dice.effects.${num}`)}
                </li>
              ))}
            </ul>
          )}
        </Modal>
      ))}
    </motion.div>
  );
};
