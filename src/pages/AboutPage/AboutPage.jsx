import style from "./AboutPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { Techs } from "../../components";

export const AboutPage = () => {
  return (
    <div className={style.containerAbout}>
      <div className={style.containerHome}>
        <h3 className={global.textTitleB}>Hola 👋, </h3>
        <p className={style.parrafo2}>
          Soy un Bachiller en Ingeniería Informática con experiencia en
          desarrollo web, especializado en WordPress y tecnologías modernas, con
          participación clave en la creación exitosa de un sistema llamado Food
          Express, buscando ampliar habilidades hacia el desarrollo móvil y
          aportar a equipos innovadores.
        </p>
      </div>

      <div className="mt-4">
        <div className={style.aboutme}>
          <h4 className={global.textTitleB}>
            Sobre <span className={global.textTitleC}>Mi</span>
          </h4>
          <p className={style.parrafo}>
            Mi habilidad radica en la creación de interfaces atractivas y
            funcionales gracias a mis conocimientos en HTML, CSS, JavaScript, y
            mi experiencia en tecnologías como React, Redux, Node.js y Express.
            Mi objetivo es brindar soluciones innovadoras y eficaces.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h4 className={global.textTitleB}>
          Tecnologías <span className={global.textTitleC}>que domino</span>
        </h4>
        <Techs />
      </div>
    </div>
  );
};
