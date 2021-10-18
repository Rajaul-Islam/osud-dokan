import firebaseInitialize from "../firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile,FacebookAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
firebaseInitialize();


const auth = getAuth();

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState("")
    const [name,setName]=useState('')


    useEffect(()=>{
        setTimeout(()=>{
            setError('');
        },5000)
    },[error])

    // google signup
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


    // facebook signin
    const signInWithFacebook = () => {
        signInWithPopup(auth,FacebookProvider)
            .then(result => {
                setUser(result.user)
                console.log(result.user);

            })
            .catch((error) => {
                setError(error.message)
            })

    }
    // sign in with and password 
    const signInWithEmail = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                alert('loged in successfully')

            })
            .catch((error) => {
                setError(error.message)
            })

    }
    //update user name
         const updateName=()=>{
            updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
                
              }).catch((error) => {
               setError(error.message)
              });
         }

//get username
const getName=e=>{
    const name=e?.target?.value
    setName(name);
    console.log(name);
}


    // get email 
    const getEmail = e => {
        const text=e?.target?.value
        setEmail(text);
        console.log(email)
    }

    //get password
    const getPassword = e => {
        const pass=e?.target?.value;
        setPassword(pass);
        console.log(password)
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {

                setUser({})
            }
        });
        return () => unsubscribed;
    }, [])

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {

                alert('user created')

            })
            .catch((error) => {
                setError(error.message);

            });

    }

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
        logOut,
        signInWithEmail,
        getEmail,
        getPassword,
        signUp,
        getName,
        signInWithFacebook


    };
};

export default useFirebase;