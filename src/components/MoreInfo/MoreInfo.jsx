import styles from "./MoreInfo.module.css";
import global from "../../styles/GLOBAL.module.css";

export const MoreInfo = () => {
  return (
    <div className={styles.containerMoreInfo}>
      <div className={styles.containerCards}>
        <div className={styles.cardd}>
          <strong>Email:</strong>
          <br />
          <span className={global.subtitleB}> jorgelss912345@gmail.com</span>
        </div>
        <div className={styles.cardd}>
          <strong>Teléfono:</strong>
          <br />
          <span className={global.subtitleB}> +51 916 325 058</span>
        </div>
      </div>
      <div className={styles.mapContainer}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.5638659004208!2d-77.05476768946787!3d-12.073500388116026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e3131a9e67%3A0x7d197b6a331aeac6!2sAv.%20Brasil%201419%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015084!5e0!3m2!1ses-419!2spe!4v1703464832734!5m2!1ses-419!2spe"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};
