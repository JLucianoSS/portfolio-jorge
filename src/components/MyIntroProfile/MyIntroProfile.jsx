import style from "./MyIntroProfile.module.css";
import global from "../../styles/GLOBAL.module.css";
import { MayLnGit, Button } from "../../components";

export const MyIntroProfile = () => {
  return (
    <div className={`${style.containerProfile} ${style.hideResponsive}`}>
      <div className={style.profile}>
        <div className={style.head}>
          <small className={style.text}>Me llamo</small>
          <span className={`${global.textTitleA}`}>Jorge Luciano</span>
          <img
            className={style.img}
            src="https://i.pinimg.com/736x/df/1c/08/df1c0858bb97725d4156994406801661.jpg"
            alt="my-profile"
          />
        </div>

        <div className={style.info}>
            <span className={`${global.subtitleC} ${style.span}`}>
              Desarrollador Full Stack
            </span>
            <span className={global.subtitleA}>
              <b>Edad: </b> 27 años
            </span>
            <span className={global.subtitleA}>
              <b>Pais: </b>Perú
            </span>
        </div>
        <div className={style.redes}>
            <MayLnGit />
            <br />
            <Button />
        </div>
      </div>
    </div>
  );
};
