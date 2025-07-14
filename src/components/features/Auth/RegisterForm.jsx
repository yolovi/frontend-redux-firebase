import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, resetAuthError } from "../../../features/auth/authSlice";
import styles from "./Form.module.css";

const RegisterForm = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  // const { name, email, password } = form; //podemos desestrucutrar para no tener que escribir form.name, etc.
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData", form); //comprobar siempre antes de continuar.
    dispatch(registerUser(form));
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        name="name"
        placeholder="Nombre"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
      />
      <input
        name="password"
        placeholder="Contraseña"
        type="password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      {error && (
        <p className={styles.error} onClick={() => dispatch(resetAuthError())}>
          {error}
        </p>
      )}
    </form>
  );
};

export default RegisterForm;
