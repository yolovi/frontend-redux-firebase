import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/config";
import { loginUserFromListener, logoutRedux } from "./authSlice";

export const register = async ({ email, password, name }) => {
  // 1) Alta en Firebase Auth
  const { user } = await createUserWithEmailAndPassword(auth, email, password);

  // 2) Documento en Firestore con datos extra
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    email: user.email,
    name, // dato extra
    createdAt: serverTimestamp(),
  });

  return { uid: user.uid, email: user.email, name };
};

// ----- LOGIN con name
export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  // Buscar datos extra del usuario (como nombre)
  const snap = await getDoc(doc(db, "users", user.uid));
  const extra = snap.exists() ? snap.data() : {};

  // Devuelve el usuario básico
  return {
    uid: user.uid,
    email: user.email,
    name: extra.name || null,
  };
};

// ----- LOGOUT
export const logout = async () => {
  await signOut(auth);
};

// ----- MANTENER SESIÓN tras recarga
// Llama a esta función UNA sola vez al arrancar (ej: App.jsx)
// onAuthStateChanged crea un listener que se dispara cada vez que Firebase detecta un cambio de sesión.
export const watchAuthChanges = (dispatch) => {
  return onAuthStateChanged(auth, async (firebaseUser) => {
    //console.log(firebaseUser)
    if (firebaseUser) {
      // Trae info extra de Firestore si hay usuario
      const snap = await getDoc(doc(db, "users", firebaseUser.uid));
      const extra = snap.exists() ? snap.data() : {};
      //Enviamos esos datos a Redux para que `state.auth.user` se rellene sin pasar por el flujo normal de login:
      dispatch(
        loginUserFromListener({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          extra: extra.name,
        })
      );
      //Si NO hay usuario (cerró sesión o cookie caducó) reseteamos Redux:
    } else {
      dispatch(logoutRedux());
    }
  });
};
