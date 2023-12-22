
import { MayLnGit,Button } from "../../components";
import style from "./MyProfile.module.css";
import global from "../../styles/GLOBAL.module.css";



export const MyProfile = () => {
  return (
    <div className={style.containerProfile}>

      <div className={style.profile}>
          <img className={style.img} src="https://i.pinimg.com/736x/df/1c/08/df1c0858bb97725d4156994406801661.jpg" alt="my-profile" />
          <span className={`mt-3 ${global.textTitleA}`} >Jorge Luciano</span>
          <span className={global.subtitleA}>Desarrollador Full Stack</span>
          <MayLnGit/>
      </div>

      <Button/>
      <div className={style.copyright}>
        <span className={global.subtitleA}>© 2024 Jorge Luciano </span>
      </div>
      
    </div>
  );
};
