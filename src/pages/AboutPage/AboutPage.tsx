import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { FlippableCard } from "../../components/FlippableCard";
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
  const [activeSection, setActiveSection] = useState<SectionType>("historia");
  const [hasClickedNext, setHasClickedNext] = useState(false);

  const sections = [
    {
      id: "historia" as const,
      title: "Nuestra Historia",
      backImage: escudoImg,
      cardLegend:
        "Usa el escudo para proteger a tus caballeros de las espadas enemigas.",
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
      cardLegend:
        "¿Intentan robarte una bandera? Usa la hechicera para impedirlo y asegurar tu victoria.",
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
      cardLegend:
        "Ataca los caballeros rivales e impideles a convertirse en bandera.",
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
      cardLegend:
        "Las hadas mantienen a los duendes alejados de los caballeros.",
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

  const currentIndex = sections.findIndex((s) => s.id === activeSection);
  const currentSection = sections[currentIndex];
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < sections.length - 1;

  const handleNext = () => {
    if (canGoNext) {
      setActiveSection(sections[currentIndex + 1].id);
      setHasClickedNext(true);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      setActiveSection(sections[currentIndex - 1].id);
    }
  };

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

      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {t("nav.about")}
      </motion.h1>

      <div className="about-main-container">
        {/* Single Large Card */}
        <motion.div
          className="about-card-large-wrapper"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="about-card-large" style={{ flexDirection: "column" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, rotateY: -180 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <FlippableCard
                  frontImage={dorsoImg}
                  backImage={currentSection.backImage}
                  title=""
                  onClick={() => {}}
                  onHover={false}
                  isFlipped={true}
                />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={activeSection}
                className="about-card-legend"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {currentSection.cardLegend}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Content Container */}
        <motion.div
          className="about-content-container"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="about-content-header">
            {canGoPrev && (
              <motion.button
                className="section-nav-button prev"
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                ←
              </motion.button>
            )}

            <AnimatePresence mode="wait">
              <motion.h2
                key={activeSection}
                className="about-content-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {currentSection.title}
              </motion.h2>
            </AnimatePresence>

            {canGoNext && (
              <motion.button
                className={`section-nav-button next ${
                  !hasClickedNext && currentIndex === 0 ? "pulse" : ""
                }`}
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                →
              </motion.button>
            )}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              className="about-content-text"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentSection.content}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
