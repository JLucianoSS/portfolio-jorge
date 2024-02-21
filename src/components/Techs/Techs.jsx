import style from "./Techs.module.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import bootstrap from "../../assets/bootstrap.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import nodejs from "../../assets/nodejs.png";
import posgres from "../../assets/posgres.png";
import typesccript from "../../assets/typescript.png";
import sass from "../../assets/sass.png";
import tailwind from "../../assets/tailwind.png";


export const Techs = () => {
  return (
    <div className={style.containerTechs}>
      <div className={style.tooltip} data-tip="html">
        <img className={style.img} src={html} alt="html" />
      </div>
      <div className={style.tooltip} data-tip="css">
        <img className={style.img} src={css} alt="css" />
      </div>
      <div className={style.tooltip} data-tip="bootstrap">
        <img
          className={style.img2}
          src={bootstrap}
          alt="bootstrap"
        />
      </div>
      <div className={style.tooltip} data-tip="sass">
        <img className={style.img} src={sass} alt="js" />
      </div>
      <div className={style.tooltip} data-tip="tailwind">
        <img className={style.img} src={tailwind} alt="tailwind" />
      </div>
      <div className={style.tooltip} data-tip="javascript">
        <img className={style.img} src={js} alt="js" />
      </div>
      <div className={style.tooltip} data-tip="typescript">
        <img className={style.img} src={typesccript} alt="js" />
      </div>
      <div className={style.tooltip} data-tip="react">
        <img className={style.img} src={react} alt="react" />
      </div>
      <div className={style.tooltip} data-tip="redux">
        <img className={style.img} src={redux} alt="redux" />
      </div>
      <div className={style.tooltip} data-tip="nodejs">
        <img className={style.img} src={nodejs} alt="nodejs" />
      </div>
      <div className={style.tooltip} data-tip="postgreSQL">
        <img style={{ width: "3rem" }} src={posgres} alt="posgres" />
      </div>
    </div>
  );
};
