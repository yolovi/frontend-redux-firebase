import { useDispatch } from "react-redux";
import { logoutUser } from "../../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h3>Header</h3>
      <button onClick={() => dispatch(logoutUser())}>Logout</button>
    </>
  );
};

export default Header;
