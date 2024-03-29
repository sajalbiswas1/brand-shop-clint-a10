import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true);
    
    const googleProvider = new GoogleAuthProvider();
    const [dark,setDark]=useState(false)
    console.log(dark)

    const darkMod = ()=>{
        setDark(localStorage.getItem("theme"))
    }

    // create user 
    const userSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login User
    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //login with google 
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // user profile update
    const userProfileUpdate =(obj)=>{
        return updateProfile(auth.currentUser,obj)
    }
    //uer signOut
    const userSignOut = () => {
        setLoading(true);
        return signOut(auth)
    }
    // objervation
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false);
        })
        return () => {
            return unsubscribe;
        }
    }, [])



    const authInfo = {
        userSignIn,
        userLogin,
        googleLogin,
        userSignOut,
        userProfileUpdate,
        darkMod,
        user,
        loading,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;