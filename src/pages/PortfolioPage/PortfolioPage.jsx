import global from "../../styles/GLOBAL.module.css";
import styles from "./PortfolioPage.module.css"

export const PortfolioPage = () => {
  return (
    <div>
      <h3 className={global.textTitleB}>Proyectos</h3>
      <div className={styles["grid-container"]}>
        <div className={styles["grid-item"]}>1</div>
        <div className={styles["grid-item"]}>2</div>
        <div className={styles["grid-item"]}>3</div>
        <div className={styles["grid-item"]}>4</div>
      </div>
    </div>
  );
};
