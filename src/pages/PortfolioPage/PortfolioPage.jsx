import global from "../../styles/GLOBAL.module.css";
import styles from "./PortfolioPage.module.css";
import { Card } from "../../components";
import pf from "../../assets/fE.jpg";
import pi from "../../assets/pi.jpg";

export const PortfolioPage = () => {
  return (
    <div>
      <h3 className={global.textTitleB}>Proyectos</h3>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>
          <Card 
            title="Food Express App" 
            img={pf} 
            visit="https://foodexpress-alpha.vercel.app/" 

          />
        </div>
        <div className={styles["grid-item"]}>
          <Card 
            title="Pokemon App" 
            img={pi} 
            visit="https://pokemon-pi-jorge.netlify.app" 
          />
        </div>
      </div>
    </div>
  );
};
