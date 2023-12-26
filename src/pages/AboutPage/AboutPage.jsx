import style from "./AboutPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { Techs } from "../../components";

export const AboutPage = () => {
  return (
    <div className={style.containerAbout}>
      <h3 className={global.textTitleB}>
        Sobre <span className={global.textTitleC}>Mi</span>
      </h3>

      <div className={style.info1}>
        <p className={style.parrafo}>
          Mi habilidad radica en la creación de interfaces atractivas y
          funcionales gracias a mis conocimientos en HTML, CSS, JavaScript, y mi
          experiencia en tecnologías como React, Redux, Node.js y Express. Mi objetivo es brindar soluciones
          innovadoras y eficaces.
        </p>
        <div className={style.datos}>
          <b>Edad: </b><span>33</span><br />
          <b>Pais: </b><span>Perú</span><br />
        </div>
      </div>

      <h4 className="mt-3">Tecnologías que domino</h4>
      <Techs />
    </div>
  );
};
