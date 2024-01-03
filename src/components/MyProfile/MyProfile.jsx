
import { useLocation } from "react-router-dom";
import { MayLnGit,Button, CustomOffcanvas } from "../../components";
import style from "./MyProfile.module.css";
import global from "../../styles/GLOBAL.module.css";



export const MyProfile = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      <div className={`${style.containerProfile} ${style.hideResponsive}`}>
        <div className={style.profile}>
            <div className={style.head}>
              <img className={style.img} src="https://i.pinimg.com/736x/df/1c/08/df1c0858bb97725d4156994406801661.jpg" alt="my-profile" />
              <span className={`mt-3 ${global.textTitleA}`} >Jorge Luciano</span>
            </div>
            <span className={`${global.subtitleC} ${style.span}`}>Desarrollador Full Stack</span>
            <span className={global.subtitleA}><b>Edad: </b> 27 años</span>
            <span className={global.subtitleA}><b>Pais: </b>Perú</span>
            <MayLnGit/>
        </div>
        <div className={style.btn}><Button/></div>
        <div className={style.copyright}>
          <span className={global.subtitleA}>© 2024 Jorge Luciano </span>
        </div>
      </div>


      {
        !isHomePage && (
          <div className={style.showResponsive}>
            <CustomOffcanvas id="offcanvasRight" title="">
              <div className={style.containerProfile}>
                <div className={style.profile}>
                    <div className={style.head}>
                      <img className={style.img} src="https://i.pinimg.com/736x/df/1c/08/df1c0858bb97725d4156994406801661.jpg" alt="my-profile" />
                      <span className={`mt-3 ${global.textTitleA}`} >Jorge Luciano</span>
                    </div>
                    <span className={`${global.subtitleC} ${style.span}`}>Desarrollador Full Stack</span>
                    <span className={global.subtitleA}><b>Edad: </b> 27 años</span>
                    <span className={global.subtitleA}><b>Pais: </b>Perú</span>
                    <MayLnGit/>
                </div>
                <Button/>
                <div className={style.copyright}>
                  <span className={global.subtitleA}>© 2024 Jorge Luciano </span>
                </div>
              </div>
            </CustomOffcanvas>
          </div>
        )
      }
      
    </>
  );
};
