import style from "./HomePage.module.css";
import global from "../../styles/GLOBAL.module.css";

export const HomePage = () => {
  return (
    <div className={style.containerHome}>
      <h3 className={global.textTitleB}>Hola 👋, </h3>
      <p className="mt-4 text-body-secondary">
        Soy un Bachiller en Ingeniería Informática con experiencia en desarrollo
        web, especializado en WordPress y tecnologías modernas, con
        participación clave en la creación exitosa de un sistema llamado Food
        Express, buscando ampliar habilidades hacia el desarrollo móvil y aportar a
        equipos innovadores.
      </p>
    </div>
  );
};
