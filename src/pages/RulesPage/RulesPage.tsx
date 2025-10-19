import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
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
        {window.innerWidth <= 768 ? "×" : "←"}
      </motion.button>

      <div className="rules-container">
        <motion.h1
          className="rules-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("rules.title")}
        </motion.h1>

        <motion.div
          className="rules-section rules-objective"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h2>{t("rules.objective.title")}</h2>
          <p>{t("rules.objective.content")}</p>
        </motion.div>

        <motion.div
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          <h2>{t("rules.setup.title")}</h2>
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
          <h2>{t("rules.cardsTitle")}</h2>
          <div className="cards-list">
            {cardNames.map((cardName, index) => (
              <motion.div
                key={cardName}
                className="card-list-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
              >
                <div className="card-list-image-wrapper">
                  <img
                    src={cardImages[cardName]}
                    alt={t(`rules.cards.${cardName}.name`)}
                    className="card-list-image"
                  />
                </div>
                <h3 className="card-list-title">
                  {t(`rules.cards.${cardName}.name`)}
                </h3>
                <p className="card-list-hint">
                  {t(`rules.cards.${cardName}.hint`)}
                </p>
                <div className="card-list-content">
                  <p className="card-list-description">
                    {t(`rules.cards.${cardName}.description`)}
                  </p>
                  {cardName === "dice" && (
                    <ul className="dice-effects">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <li key={num}>
                          <strong>{num}:</strong>{" "}
                          {t(`rules.cards.dice.effects.${num}`)}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
