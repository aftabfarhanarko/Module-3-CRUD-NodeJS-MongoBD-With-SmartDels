import React, { useEffect, useState } from "react";
import { AuthContex } from "./AuthContex";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged ,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "../firebase/firebase.config";
const provider = new GoogleAuthProvider();
const AUthProvider = ({ children  }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);


  const userCreat = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updeatUser = (updet) => {
    return updateProfile(auth.currentUser, updet);
  };

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  const logOutUser = () => {
    return signOut(auth);
  }

  useEffect(() => {
    const unsybcripet = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
     setLoding(false)
    });

    return () => {
        unsybcripet()
    };
  }, []);

  const authInfo = {
    userCreat,
    updeatUser,
    googleLogin,
    loding,
    user,
    userLogin,
    logOutUser
  };
  return (
    <div>
      <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>
    </div>
  );
};

export default AUthProvider;
