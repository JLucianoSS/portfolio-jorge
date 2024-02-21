
import { ButtonA } from "../ButtonA/ButtonA";
import { FiYoutube } from "react-icons/fi";
import style from "./Card.module.css"


export const Card = ({img="",description="",title="Sin titulo",visit, video=null}) => {
  return (
    <div className="card" style={{width: "100%"}}>
      <img src={img} className="card-img-top" alt="img-project" />
      <div className="card-body">
        <h5>{title}</h5>
        <span className={style.parrafo}>{description}</span>
        <div className={`mt-3 ${style.button}`}>
            <ButtonA nameButton="Visitar" redirectUrl={visit} />
            {
              (video !== null) 
                ? <a 
                    style={{ display: 'flex', justifyContent:'center', alignItems:'center' }} className="btn btn-danger" 
                    href={video}
                    target="_blank"
                  >
                    <FiYoutube size={25} style={{ width: '50px' }}/>
                  </a> 
                : ''
            }
            
        </div>
      </div>
    </div>
  );
};
