import { useEffect, useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [errors, setErrors] = useState(initialForm);

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrors(
      validate({
        ...formState,
        [name]: value,
      })
    );
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

    useEffect(() => {
      setErrors(validate({
        ...formState,
    }))
    }, [formState])

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    errors,
  };
};

/* VALIDACIONES PARA EL FORMULARIO */
const validate = (inputForm) => {
  const errors = {};

  /* Aqui */

  if ("nombre" in inputForm) {
    if (inputForm.nombre.trim() === "") {
      errors.nombre = "*Campo obligatorio";
    }
  }

  if ("correo" in inputForm) {
    const correoPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputForm.correo.trim() === "") {
      errors.correo = "*Campo obligatorio";
    } else if (!correoPattern.test(inputForm.correo)) {
      errors.correo = "Correo no válido";
    }
  }

  if ("asunto" in inputForm) {
    if (inputForm.asunto.trim() === "") {
      errors.asunto = "*Campo obligatorio";
    }
  }

  if ("mensaje" in inputForm) {
    if (inputForm.mensaje.trim() === "") {
      errors.mensaje = "*Campo obligatorio";
    }
  }

  return errors;
};


