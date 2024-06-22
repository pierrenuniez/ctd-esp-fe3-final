import React , {useState} from "react";
import { useContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  const { state } = useContextGlobal();

  const [formData, setFormData] = useState({name: "", email: ""});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 5) newErrors.name = "Nombre debe tener mas de 5 caracteres.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Email no es valido.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
      setSuccess(`Gracias ${formData.name}, te contactaremos cuanto antes via email.`);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre completo" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
        {errors.name && <p>{errors.name}</p>}
        <input type="text" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
        {errors.email && <p>{errors.email}</p>}
        <button type="submit">Enviar</button>
      </form>
      {success && <p>{success}</p>}
    </div>
  );
};

export default Form;
