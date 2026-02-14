import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const createUser = async (email, password, name, photo, role) => {
    setLoading(true);

    const result = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(result.user, {
      displayName: name,
      photoURL: photo || "https://via.placeholder.com/150",
    });

    
    setUser({ ...result.user, displayName: name, photoURL: photo, role });

    return result;
  };
  // const createUser = (email, password) => {
  //   setLoading(true);

  //   return createUserWithEmailAndPassword(auth, email, password);
  // };
  // log in
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  // use effect / observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // authDaTA
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signInWithGoogle,
    logIn,
    loading,
    setLoading,
    auth,
  };
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
