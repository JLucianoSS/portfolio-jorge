import styles from "./ContactPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { Form, MoreInfo } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


export const ContactPage = () => {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <h3 className={global.textTitleB}>Contacto</h3>
      <div className={styles.containerContact}>
        <Form />
        <MoreInfo/>
      </div>
    </div>
  );
};
