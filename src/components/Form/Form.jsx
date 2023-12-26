

import styles from "./Form.module.css"

export const Form = () => {
  return (
    <div className={styles.contactForm}>
      <h5 className="mb-4">Envíame un mensaje</h5>
      <form onSubmit={(event) => { event.preventDefault() }}>
        <input className="mb-3" type="text" placeholder="Nombre" />
        <input className="mb-3" type="email" placeholder="Email" />
        <input className="mb-3" type="email" placeholder="Asunto" />
        <textarea className="mb-3" placeholder="Mensaje"/>
        <button className={styles.button} type="submit">Enviar</button>
      </form>
    </div>
  )
}
