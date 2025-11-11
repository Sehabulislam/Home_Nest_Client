import { Children, createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
  },[])
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
