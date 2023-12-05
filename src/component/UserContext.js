import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);



const UserContext = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const createUserGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)

        })

        return () => {
            unsubscribe();
        }

    }, [])





    const propsInfo = { user, createUser, logIn, logOut, createUserGoogle, loading, verifyEmail, resetPassword }
    return (
        <AuthContext.Provider value={propsInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;