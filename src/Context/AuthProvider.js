import React, { createContext } from 'react';
import useFirebase from '../Hook/useFirebase';
import useServices from '../Hook/useServices';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const {medicines}=useServices();
    const data={allContext,medicines}
    return (
        <AuthContext.Provider value={data}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;