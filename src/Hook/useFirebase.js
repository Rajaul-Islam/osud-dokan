import firebaseInitialize from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize();


const auth = getAuth();

const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const signInWithGoogle = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);

            })
            .catch((error) => {
                setError(error.message)
            })

    }
    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            
            } else {
               
             setUser({})
            }
          });
          return ()=> unsubscribed;
    },[])

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error)
        });
    }

    return {
        signInWithGoogle,
        user,
        error,
        logOut

    };
};

export default useFirebase;