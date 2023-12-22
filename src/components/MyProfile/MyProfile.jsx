
import { MayLnGit,Button } from "../../components";
import style from "./MyProfile.module.css";



export const MyProfile = () => {
  return (
    <div className={style.containerProfile}>

      <div className={style.profile}>
          <img className={style.img} src="https://i.pinimg.com/736x/df/1c/08/df1c0858bb97725d4156994406801661.jpg" alt="my-profile" />
          <span className={style.textTitle} >Jorge Luciano</span>
          <span className={style.subtitle}>Desarrollador Full Stack</span>
          <MayLnGit/>
      </div>

      <Button/>
      <div className={style.copyright}>
        <span className={style.subtitle}>© 2024 Jorge Luciano </span>
      </div>
      
    </div>
  );
};
