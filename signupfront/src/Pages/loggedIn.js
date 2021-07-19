import React from 'react';
import {Redirect} from "react-router-dom";

function loggedIn({authorized}){
    
    if(!authorized){
        return <Redirect to="/login" />;
    }
    return <div>Logged In</div>
}

export default loggedIn