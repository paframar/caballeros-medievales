import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import "./RulesPage.css";

export const RulesPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
      <div className="rules-container">
        <motion.h1
          className="rules-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("nav.rules")}
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
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Objetivo</h2>
          <p>{t("rules.objective")}</p>
        </motion.div>

        <motion.div
          className="rules-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
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
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2>Cartas del Juego</h2>
          <div className="cards-list">
            {cardNames.map((cardName, index) => (
              <motion.div
                key={cardName}
                className="card-rule"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
              >
                <h3>{t(`rules.cards.${cardName}.name`)}</h3>
                <p>{t(`rules.cards.${cardName}.description`)}</p>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
