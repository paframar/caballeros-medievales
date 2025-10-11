import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FlippableCard } from "../../components/FlippableCard";
import { Modal } from "../../components/Modal";
import dorsoImg from "../../assets/cards/caballeros-medievales-dorso.png";
import escudoImg from "../../assets/cards/caballeros-medievales-escudo.png";
import hechiceraImg from "../../assets/cards/caballeros-medievales-hechicera.png";
import espadaImg from "../../assets/cards/caballeros-medievales-espada.png";
import hadaImg from "../../assets/cards/caballeros-medievales-hada.png";
import "./AboutPage.css";

type SectionType = "historia" | "mision" | "equipo" | "porque" | null;

export const AboutPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState<SectionType>(null);

  const sections = [
    {
      id: "historia" as const,
      title: "Nuestra Historia",
      backImage: escudoImg,
      content: (
        <p>
          Caballeros Medievales nació de la imaginación y creatividad de una
          niña apasionada por los juegos de cartas y el fascinante mundo
          medieval. Inspirada por otros juegos de estrategia, ella concibió un
          universo único donde caballeros, hechiceras y criaturas místicas se
          enfrentan en batallas épicas. Esta aventura familiar ha dado sus
          primeros pasos, llevando la magia del juego más allá de amigos y
          familiares con su primera venta a jugadores que han descubierto el
          encanto de este reino medieval.
        </p>
      ),
    },
    {
      id: "mision" as const,
      title: "Nuestra Misión",
      backImage: hechiceraImg,
      content: (
        <p>
          Compartir la pasión por el juego de mesa y crear momentos inolvidables
          en familia. Queremos que Caballeros Medievales sea más que un juego:
          una experiencia que une generaciones, donde la estrategia se combina
          con la diversión y cada partida cuenta una historia diferente. Nuestro
          compromiso es mantener vivo el espíritu familiar que nos dio origen,
          creciendo paso a paso con la misma ilusión y dedicación del primer
          día.
        </p>
      ),
    },
    {
      id: "equipo" as const,
      title: "El Equipo",
      backImage: espadaImg,
      content: (
        <p>
          Somos una empresa familiar que trabaja con amor y dedicación para dar
          vida a este proyecto. Cada carta ha sido diseñada con esmero, cada
          regla ha sido probada en incontables partidas familiares, y cada
          detalle refleja nuestra pasión por el mundo medieval y los juegos de
          estrategia. Estamos en los inicios de esta aventura, aprendiendo y
          creciendo con cada paso, pero siempre manteniendo la esencia artesanal
          y el cariño que caracteriza a los proyectos familiares.
        </p>
      ),
    },
    {
      id: "porque" as const,
      title: "¿Por qué Caballeros Medievales?",
      backImage: hadaImg,
      content: (
        <ul>
          <li>⚔️ Diseñado con amor desde una perspectiva familiar</li>
          <li>🏰 Arte medieval cuidadosamente elaborado</li>
          <li>🎲 Perfecto equilibrio entre estrategia y diversión</li>
          <li>👥 Ideal para unir a la familia en partidas épicas</li>
          <li>🏆 Un proyecto que crece con la pasión de sus creadores</li>
        </ul>
      ),
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
        ←
      </motion.button>

      <div className="about-container">
        <motion.h1
          className="about-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t("nav.about")}
        </motion.h1>

        <motion.div
          className="about-cards-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              <motion.div
                whileHover={{
                  x: [0, -3, 3, -3, 0],
                  y: [0, -2, 2, -2, 0],
                  rotate: [0, -2, 2, -1, 0],
                }}
                transition={{
                  duration: 0.6,
                  times: [0, 0.2, 0.4, 0.6, 1],
                  ease: "easeInOut",
                }}
              >
                <FlippableCard
                  frontImage={dorsoImg}
                  backImage={section.backImage}
                  title={section.title}
                  onClick={() => setActiveModal(section.id)}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modals */}
      {sections.map((section) => (
        <Modal
          key={section.id}
          isOpen={activeModal === section.id}
          onClose={() => setActiveModal(null)}
          title={section.title}
        >
          {section.content}
        </Modal>
      ))}
    </motion.div>
  );
};
