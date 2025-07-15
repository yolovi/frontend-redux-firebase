import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  if (!user) return <p>No has iniciado sesión</p>;

  return (
    <div>
      <h1>Hola, {user.extra || user.email} 👋</h1>
      <p>Bienvenido a tu perfil.</p>
    </div>
  );
};

export default Profile;
