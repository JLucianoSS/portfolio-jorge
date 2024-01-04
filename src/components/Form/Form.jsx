import { useForm } from "../../hooks/useForm";
import { areThereErrors } from "../../utils/areThereErrors";
import { useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import styles from "./Form.module.css";

export const Form = () => {

  const form = useRef();

  const { formState, onInputChange, onResetForm, errors } = useForm({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (areThereErrors(errors)){
      try {
        // Mostrar el toast de carga mientras se procesa la promesa
        const promise = emailjs.sendForm('service_n9vhm3n', 'template_z8krgps', form.current, 'gJXE1l38bsv4rUp9i');
        toast.promise(promise, {
          loading: 'Enviando mensaje...',
          success: '¡El mensaje se ha enviado!',
          error: (error) => `Error al enviar el mensaje: ${error}`,
        });
  
        const result = await promise;
        console.log(result.text);
        onResetForm();
      } catch (error) {
        console.error(error.text);
      }
    }
  };

  return (
    <>
      <div className={styles.contactForm}>
        <h5 className="mb-4">Envíame un mensaje</h5>
        <form ref={form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            name="nombre"
            value={formState.nombre}
            onChange={onInputChange}
          />
          {errors.nombre && (<p className={`text-danger ${styles.errorsSize}`}>{errors.nombre}</p>)}
          <input
            className="mt-3"
            type="email"
            placeholder="Correo"
            name="correo"
            value={formState.correo}
            onChange={onInputChange}
          />
          {errors.correo && (<p className={`text-danger ${styles.errorsSize}`}>{errors.correo}</p>)}
          <input
            className="mt-3"
            type="text"
            placeholder="Asunto"
            name="asunto"
            value={formState.asunto}
            onChange={onInputChange}
          />
          {errors.asunto && (<p className={`text-danger ${styles.errorsSize}`}>{errors.asunto}</p>)}
          <textarea
            className="mt-3"
            placeholder="Mensaje"
            name="mensaje"
            value={formState.mensaje}
            onChange={onInputChange}
          />
          {errors.mensaje && (<p className={`text-danger ${styles.errorsSize}`}>{errors.mensaje}</p>)}
          <button className={`${!areThereErrors(errors) ? styles.buttonDisabled : styles.button}`} type="submit" disabled={!areThereErrors(errors)}>
            Enviar
          </button>
        </form>
      </div>
      <Toaster />
    </>
  );
};
