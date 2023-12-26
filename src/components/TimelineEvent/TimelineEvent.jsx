import styles from "./TimelineEvent.module.css"; // Importa el archivo de estilos CSS como un módulo

export const TimelineEvent = ({
  date = "1996",
  place = "Lugar",
  title = "Función",
  descriptions = [], // Ahora recibe un array de descripciones
}) => {
  return (
    <div className={styles.event}>
      <div className={styles.left}>
        <div className={styles.date}>{date}</div>
        <div className={styles.place}>{place}</div>
      </div>
      
      <div className={styles.line}>
        <div className={styles.dot}>
          <div className={styles.borderdot}/>
        </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.title}>{title}</div>
        <div className={styles.descriptions}>
          {/* Mapeamos cada descripción para renderizarlas */}
          {descriptions.map((description, index) => (
            <span key={index} className={styles.description}>{description}</span>
          ))}
        </div>
      </div>
    </div>
  );
};