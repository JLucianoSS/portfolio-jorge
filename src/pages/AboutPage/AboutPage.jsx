import style from "./AboutPage.module.css";
import global from "../../styles/GLOBAL.module.css"
import { Techs } from "../../components";

export const AboutPage = () => {
  return (
    <div className={style.containerAbout}>
      <h3 className={global.textTitleB}>Sobre <span className={global.textTitleC}>Mi</span></h3>

      <div className={style.info1}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
          architecto porro temporibus libero enim commodi ullam suscipit nostrum
          eaque ipsam sit quibusdam maxime eligendi, dolorum, tenetur tempore
          exercitationem corrupti fugit.
        </p>
        <div>
          <span>Edad: 33</span>
          <span>Pais: Perú</span>
          <span>Dirección: Calle los aboles 345 - Sullana</span>
          <span>Correo:jorgelss9@gmail.com</span>
          <span>Teléfono: 956584256</span>
        </div>
      </div>

      <h4 className="mt-3">Tecnologías que domino</h4>
      <Techs/>
    </div>
  );
};
