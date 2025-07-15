import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuthError } from "../../../features/auth/authSlice";
import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  // const { email, password } = form; //podemos desestrucutrar para no tener que escribir form.name, etc.
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, user } = useSelector((state) => state.auth);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("formData", form); //comprobar siempre antes de continuar.
    dispatch(loginUser(form));
  };

  useEffect(() => {
    if (user) {
      // console.log("user", user);
      navigate("/profile");
    }
  }, [user, navigate]);

  //  .unwrap() te ayuda a capturar errores directamente en el componente, sin depender solo del slice.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("formData", form); //comprobar siempre antes de continuar.
  //   dispatch(loginUser(form))
  //     .unwrap()
  //     .then((payload) => console.log("fulfilled:", payload))
  //     .catch((err) => console.log("rejected:", err));
  // };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
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
        {loading ? "Iniciando Sesión..." : "Iniciar Sesión"}
      </button>

      {error && (
        <p className={styles.error} onClick={() => dispatch(resetAuthError())}>
          {error}
        </p>
      )}
    </form>
  );
};

export default LoginForm;
