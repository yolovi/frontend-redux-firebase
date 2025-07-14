import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../../firebase/config";

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

// ----- login simple
export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  // Devuelve el usuario básico
  return {
    uid: user.uid,
    email: user.email,
  };
};



// /* ------------------------------------------------------------------
//    2. LOGIN
//    -----------------------------------------------------------------*/
// export const login = async ({ email, password }) => {
//   const { user } = await signInWithEmailAndPassword(auth, email, password);

//   // Cargar datos extra (name, etc.) si quieres
//   const snap = await getDoc(doc(db, "users", user.uid));
//   const extra = snap.exists() ? snap.data() : {};

//   return { uid: user.uid, email: user.email, ...extra };
// };

// /* ------------------------------------------------------------------
//    3. LOGOUT
//    -----------------------------------------------------------------*/
// export const logout = async () => {
//   await signOut(auth);
// };

// /* ------------------------------------------------------------------
//    4. Mantener sesión tras recarga
//       Llama a esta función UNA sola vez al arrancar (ej: App.jsx)
//    -----------------------------------------------------------------*/
// export const watchAuthChanges = (dispatch) => {
//   return onAuthStateChanged(auth, async (firebaseUser) => {
//     if (firebaseUser) {
//       // Trae info extra de Firestore
//       const snap = await getDoc(doc(db, "users", firebaseUser.uid));
//       const extra = snap.exists() ? snap.data() : {};
//       dispatch(
//         loginUserFromListener({
//           uid: firebaseUser.uid,
//           email: firebaseUser.email,
//           ...extra,
//         })
//       );
//     } else {
//       dispatch(logoutRedux());
//     }
//   });
// };
