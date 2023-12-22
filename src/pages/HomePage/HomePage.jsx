import style from "./HomePage.module.css";
import global from "../../styles/GLOBAL.module.css";

export const HomePage = () => {
  return (
    <div className={style.containerHome}>
      <h3 className={global.textTitleB}>Hola 👋, </h3>
      <p className="mt-4 text-body-secondary">
        Soy lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
        explicabo omnis nam error ex! Provident, quae vel odio tempore possimus
        non a? Quibusdam soluta, incidunt aliquid adipisci nobis explicabo
        earum.
      </p>
    </div>
  );
};
