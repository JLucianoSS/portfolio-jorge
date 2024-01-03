
import { GiHamburgerMenu } from "react-icons/gi";
import { IoReturnUpBackSharp } from "react-icons/io5";
import style from './Offcanvas.module.css'

export const CustomOffcanvas = ({ id, title, children }) => {
  const offcanvasStyle = {
    background: "#BD34FE"
  };

  return (
    <>
      <button
        className={`${style.btn}`}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target={`#${id}`}
        aria-controls={id}
      >
        <GiHamburgerMenu />
      </button>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id={id}
        aria-labelledby={`${id}Label`}
        style={offcanvasStyle}
      >
        <div className={` ${style.center}`}>
         
          <button type="button" className={style.btnClose} data-bs-dismiss="offcanvas" aria-label="Close"><IoReturnUpBackSharp /></button>
        </div>
        <div className="offcanvas-body">
          {children}
        </div>
      </div>
    </>
  );
};

