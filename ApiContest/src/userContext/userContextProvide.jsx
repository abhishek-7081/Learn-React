import React, { useState } from "react";
import usercontext from "./userContext";

const UserContextProvider=({children})=>{
    const [user, setuser] = useState(null);
    return(
        <usercontext.Provider value={{user,setuser}}>
        {children}
        </usercontext.Provider>
    )

}
export default UserContextProvider;