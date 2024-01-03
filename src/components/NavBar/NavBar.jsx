import style from "./NavBar.module.css";
import { IoHomeSharp, IoPersonSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { PiBagFill } from "react-icons/pi";
import { FaGraduationCap } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

export const NavBar = () => {

  const location = useLocation();
  return (
    <div className={style.containerNav}>
      {/* <div className={style.tooltip} data-tip="Inicio">
        <NavLink className={`${style.link} ${location.pathname === "/" && style.active}`} to="/">
          <IoHomeSharp size={25} />
        </NavLink>
      </div> */}
      <div className={style.tooltip} data-tip="Sobre mí">
        <NavLink className={`${style.link} ${location.pathname === "/" && style.active}`} to="/">
          <IoPersonSharp size={25} />
          <span className={style.showResponsive}>Sobre mí</span>
        </NavLink>
      </div>
      <div className={style.tooltip} data-tip="Experiencia">
        <NavLink className={`${style.link} ${location.pathname === "/experience" && style.active}`} to="/experience">
          <FaGraduationCap size={25} />
          <span className={style.showResponsive}>Experiencia</span>
        </NavLink>
      </div>
      <div className={style.tooltip} data-tip="Proyectos">
        <NavLink className={`${style.link} ${location.pathname === "/portfolio" && style.active}`} to="/portfolio">
          <PiBagFill size={25} />
          <span className={style.showResponsive}>Proyectos</span>
        </NavLink>
      </div>
      <div className={style.tooltip} data-tip="Contáctame">
        <NavLink className={`${style.link} ${location.pathname === "/contact" && style.active}`} to="/contact">
          <IoIosMail size={25} />
          <span className={style.showResponsive}>Contáctame</span>
        </NavLink>
      </div>
    </div>
  );
};
