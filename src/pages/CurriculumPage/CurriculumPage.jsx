import style from "./CurriculumPage.module.css";
import global from "../../styles/GLOBAL.module.css";
import { TimelineEvent } from "../../components";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export const CurriculumPage = () => {
  const exp = [
    {
      date: "10 Nov - 15 Dic",
      place: "Soy Henry Bootcamp",
      title: "Food Express App",
      description: [
        "Participé en la creación de una plataforma para explorar menús, hacer pedidos personalizados y asegurar pagos seguros, facilitando la interacción del cliente y brindando herramientas administrativas.",
      ],
    },
    {
      date: "Jun - 30 Oct",
      place: "Soy Henry Bootcamp",
      title: "Proyectos",
      description: [
        "Pokemon App: Muestra, filtra, busca detalles y crea su propia lista personalizada de Pokémon.",
        "Rick and Morty: Busca, filtra, guarda tus personajes favoritos y detalla información.",
      ],
    },
    {
      date: "2020 - act.",
      place: "Healthy23 Perú",
      title: "Administrador Wordpress",
      description: ["Gestión y soporte técnico de la aplicación web."],
    },
  ];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={style.container}>
      <h3 className={global.textTitleB}>Experiencia</h3>

 

      <div className={style.containerExp}>
        {exp.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            descriptions={event.description}
            place={event.place}
            title={event.title}
          />
        ))}
      </div>

      <h5 className="mt-3 text-center">
        Formación Académica: 
      </h5>
      <center className="mt-3">
        <strong>
          <span className={global.subtitleB}>
            Full Stack Developer - Soy Henry Bootcamp
          </span>
        </strong>
        <br />
        <strong>
          <span className={global.subtitleB}>
            Bachiller en Ing. Informática - Universidad Nacional de Piura
          </span>
        </strong>
        <br />
      </center>
    </div>
  );
};
