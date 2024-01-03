
import { ButtonA } from "../ButtonA/ButtonA";
import style from "./Card.module.css"

export const Card = ({img="",description="",title="Sin titulo",visit}) => {
  return (
    <div className="card" style={{width: "100%"}}>
      <img src={img} className="card-img-top" alt="img-project" />
      <div className="card-body">
        <h5>{title}</h5>
        <span className={style.parrafo}>{description}</span>
        <div className={`mt-3 ${style.button}`}>
            <ButtonA nameButton="Visitar" redirectUrl={visit} />
        </div>
      </div>
    </div>
  );
};
