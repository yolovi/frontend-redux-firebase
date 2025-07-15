import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutService } from "@/features/auth/authService"; //el alias @ corresponde a src --> configurado en vite.config.js
import { logoutRedux } from "@/features/auth/authSlice";

const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await logoutService();
    dispatch(logoutRedux());
  };

  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
        <Link to="/">Inicio</Link>
        {user ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/register">Registrarse</Link>
          </>
        )}
      </nav>

      <main style={{ padding: "1rem" }}>{children}</main>
    </div>
  );
};

export default Layout;
