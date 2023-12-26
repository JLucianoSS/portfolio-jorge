import React from "react";
import { ButtonA } from "../ButtonA/ButtonA";

export const Card = ({img="",title="Sin titulo",visit}) => {
  return (
    <div className="card" style={{width: "100%"}}>
      <img src={img} className="card-img-top" alt="img-project" />
      <div className="card-body">
        <h5>{title}</h5>
        <div className="mt-3" style={{display:"flex"}}>
            <ButtonA nameButton="Visitar" redirectUrl={visit} />
     
        </div>
      </div>
    </div>
  );
};
