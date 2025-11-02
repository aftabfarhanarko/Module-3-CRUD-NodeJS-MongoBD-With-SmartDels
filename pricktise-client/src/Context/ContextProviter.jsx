import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const ContextProviter = ({ children }) => {
  const [user, setUser] = useState([]);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUsera = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const ubdeatProfile = (updet) => {
    return updateProfile(auth.currentUser ,updet);
  }
  
  const googlieLogind = () => {
    return signInWithPopup(auth, provider)
  }

  const userLogOut = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubcripet = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubcripet();
    };
  }, []);

  const info = {
    creatUser,
    signinUsera,
    user,
    ubdeatProfile,
    googlieLogind,
    userLogOut
  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default ContextProviter;
