import React, {useState,createContext} from "react";
import 


//export const AuthContext=createContext();

export default function AuthContextProvider(props){

    const [user,setUser]=useState("");



    return(
        <AuthContext.Provider value={user}>
            {props.children}
        </AuthContext.Provider>
    )
}