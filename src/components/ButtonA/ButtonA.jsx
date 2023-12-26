import style from "./ButtonA.module.css";

export const ButtonA = ({ nameButton, redirectUrl="" }) => {

  const redirigirAUrl = () => {
    const url = redirectUrl;
    console.log(url);
    if(url === ""){
        console.log("Sin url");
    }else{
        window.open(url, "_blank");
    }
  };
  return <button onClick={redirigirAUrl} className={style.button}>{nameButton}</button>;
};