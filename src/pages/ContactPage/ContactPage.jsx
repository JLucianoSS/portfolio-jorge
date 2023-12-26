import styles from "./ContactPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { Form, MoreInfo } from "../../components";


export const ContactPage = () => {
  return (
    <div>
      <h3 className={global.textTitleB}>Contacto</h3>
      <div className={styles.containerContact}>
        <Form />
        <MoreInfo/>
      </div>
    </div>
  );
};
