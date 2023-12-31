import global from "../../styles/GLOBAL.module.css";
import styles from "./PortfolioPage.module.css";
import { Card } from "../../components";
import pf from "../../assets/fE.jpg";
import pi from "../../assets/pi.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const PortfolioPage = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <h3 className={global.textTitleB}>Proyectos</h3>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>
          <Card 
            title="Food Express App" 
            description="Tecnoligías usadas: React, Redux, Bootstrap, Node.js, Express, Sequelize y PostgreSQL"
            img={pf} 
            visit="https://foodexpress-alpha.vercel.app/" 

          />
        </div>
        <div className={styles["grid-item"]}>
          <Card 
            title="Pokemon App" 
            description="Tecnoligías usadas: React, Redux, Node.js, Express, Sequelize y PostgreSQL"
            img={pi} 
            visit="https://pokemon-pi-jorge.netlify.app" 
          />
        </div>
      </div>
    </div>
  );
};
