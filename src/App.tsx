import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./App.css";

const cards = [
  {
    title: "¡Próximamente!",
    text: "Prepárate para la batalla definitiva de estrategia y astucia.",
  },
  {
    title: "Caballeros Medievales",
    text: "Un juego de cartas donde la gloria y el honor están en juego.",
  },
  {
    title: "¿Tienes lo que se necesita?",
    text: "Demuestra tu habilidad y conviértete en leyenda.",
  },
  {
    title: "Forja tu destino",
    text: "Cada carta es una decisión, cada jugada una batalla.",
  },
  {
    title: "Desafía a tus rivales",
    text: "Solo los más astutos conquistarán el reino.",
  },
  {
    title: "Colecciona y conquista",
    text: "Reúne caballeros, dragones y hechizos ancestrales.",
  },
  {
    title: "Estrategia y valor",
    text: "¿Serás el héroe de las leyendas o caerás en el olvido?",
  },
  {
    title: "Invoca la gloria",
    text: "El trono espera a quien se atreva a reclamarlo.",
  },
  {
    title: "Cartas con historia",
    text: "Cada mazo es un viaje por la Edad Media fantástica.",
  },
  {
    title: "¡Únete a la aventura!",
    text: "Pronto podrás desafiar a jugadores de todo el reino.",
  },
];

function App() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right

  const nextCard = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="landing-placeholder">
      <h1>Caballeros Medievales</h1>
      <div className="cards-stack">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            className="card-animated"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            initial={{ y: 100, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0, x: 0 }}
            exit={
              direction === 1
                ? { x: -400, opacity: 0, rotate: -20 }
                : { x: 400, opacity: 0, rotate: 20 }
            }
            transition={{ type: "spring", bounce: 0.4, duration: 0.7 }}
            onDragEnd={(_e, info) => {
              if (info.offset.x > 120) nextCard(1);
              else if (info.offset.x < -120) nextCard(-1);
            }}
            style={{ zIndex: 2 }}
          >
            <h2>{cards[current].title}</h2>
            <p>{cards[current].text}</p>
          </motion.div>
          {/* Render la carta siguiente detrás para efecto de stack */}
          <motion.div
            key={"next-" + current}
            className="card-animated card-next"
            initial={{ y: 100, opacity: 0, scale: 0.95, rotate: 5 }}
            animate={{ y: 0, opacity: 0.7, scale: 0.97, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            style={{ zIndex: 1 }}
          >
            <h2>{cards[(current + 1) % cards.length].title}</h2>
            <p>{cards[(current + 1) % cards.length].text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <motion.p
        className="coming-soon-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        ¡Sigue atento para el lanzamiento y sé de los primeros en jugar!
      </motion.p>
      <footer className="copyright-footer">
        www.caballerosmedievales.com © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
