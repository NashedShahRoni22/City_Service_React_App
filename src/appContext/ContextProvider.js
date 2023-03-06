import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AppContext = createContext();
const auth = getAuth(app);

const ContextProvider = ({ children }) => {
  const [loading, isLoading] = useState(false);
  const [user, setUser] = useState(null);

  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaVerifier);
  }

  useEffect(() => {
    const unRegistered = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return unRegistered();
  });

  const appInfo = {
    loading,
    isLoading,
    user,
    setUpRecaptcha
  };
  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};

export default ContextProvider;
