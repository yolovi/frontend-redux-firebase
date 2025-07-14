import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";
import Header from "./components/common/Header/Header";
import { useDispatch } from "react-redux";
import { watchAuthChanges } from "./features/auth/authService";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Arranca la suscripción y guarda la función de limpieza
    const unsubscribe = watchAuthChanges(dispatch);
    return () => unsubscribe(); // Limpieza al desmontar
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
