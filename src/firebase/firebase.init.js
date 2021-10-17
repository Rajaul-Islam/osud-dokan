import { initializeApp } from "firebase/app";
import React from 'react';
import firebaseConfig from "./firebase.config";

const firebaseInitialize = () => {

    return initializeApp(firebaseConfig);
};

export default firebaseInitialize;