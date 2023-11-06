import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../configs/firebase.config";

export const AuthContext = createContext()


const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const createUser = (email, password)=> {
        setIsLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleProvider = new GoogleAuthProvider()

    const googleSignIn = ()=> {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const logout = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
            setIsLoading(false)

            return ()=> {
                return unSubscribe();
            }
        })
    },[])

    const values = {user, isLoading, createUser, signIn, googleSignIn, logout}

    return(
        <AuthContext.Provider value={values}>
             {children}
        </AuthContext.Provider>
    )}
export default AuthProviders;