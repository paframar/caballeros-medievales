import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import castilloImg from "../../assets/cards/caballeros-medievales-castillo.png";
import banderaImg from "../../assets/cards/caballeros-medievales-bandera.png";
import caballeroImg from "../../assets/cards/caballeros-medievales-caballero.png";

import "./HomePage.css";

export const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: "contact",
      image: castilloImg,
      alt: "Castillo",
      label: t("nav.contact"),
      path: "/contact",
    },
    {
      id: "rules",
      image: banderaImg,
      alt: "Bandera",
      label: t("nav.rules"),
      path: "/rules",
    },
    {
      id: "about",
      image: caballeroImg,
      alt: "Caballero",
      label: t("nav.about"),
      path: "/about",
    },
  ];

  return (
    <div className="home-page">
      <div className="home-content">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {t("home.title")}
        </motion.h1>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="menu-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              onClick={() => navigate(item.path)}
              whileTap={{ scale: 0.95 }}
            >
              <div className="menu-item-image-wrapper">
                <img src={item.image} alt={item.alt} className="menu-image" />
              </div>
              <p className="menu-label">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.footer
        className="home-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {t("home.copyright")}
      </motion.footer>
    </div>
  );
};
