import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext=createContext()

export const AllContextProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState ({});

    useEffect(()=>{
     onAuthStateChanged(auth,(user)=>{
        setCurrentUser(user);
        console.log(user);
     })
    },[]);

    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
};