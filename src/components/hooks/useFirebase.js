import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth();
  const signInWithGoogle = () => {
    setLoading(true);
    const GoogleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  //observe user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return () => unsubscribe;
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    user,
    loading,
    signInWithGoogle,
    logOut,
  };
};

export default useFirebase;
