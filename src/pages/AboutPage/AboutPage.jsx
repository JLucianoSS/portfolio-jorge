import style from "./AboutPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { MyIntroProfile, Techs } from "../../components";
import { useEffect } from "react";
import { useLocation} from "react-router-dom";

export const AboutPage = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className={style.containerAbout}>
        <div className={style.containerHome}>
          <h3 className={`global.textTitleB ${style.head}`}>Hola 👋, </h3>
           <div className={`${style.showResponsive} `}>
            <MyIntroProfile/>
          </div>
          <p className={`style.parrafo2 ${style.padding}`}>
            <span className={style.im}>Soy un</span> Bachiller en Ingeniería Informática con experiencia en
            desarrollo web, WordPress y tecnologías modernas, con
            participación clave en la creación exitosa de un sistema llamado <span className={style.enfasis}>Food Express</span>, buscando 
            ampliar habilidades hacia el desarrollo móvil y
            aportar a equipos innovadores.
          </p>
        </div>
        <div className={` ${style.techs}`}>
          <h4 className={global.textTitleB}>
            Tecnologías <span className={global.textTitleC}>que domino</span>
          </h4>
          <Techs />
        </div>
        <div className="mt-3">
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
        
      </div>
    </>
  );
};
