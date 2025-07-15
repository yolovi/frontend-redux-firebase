import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { watchAuthChanges } from "./features/auth/authService";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import Layout from "./components/common/Layout/Layout";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Arranca la suscripción y guarda la función de limpieza
    const unsubscribe = watchAuthChanges(dispatch);
    return () => unsubscribe(); // Limpieza al desmontar
  }, [dispatch]);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
