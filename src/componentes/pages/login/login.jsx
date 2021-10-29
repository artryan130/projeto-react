import React from "react";

import './login.css';

const Login = () =>{
    return (
        <div>
            <div className="texto">
                <h1>Login</h1>
            </div>

            <div>
                <input className= "email" type="text" placeholder="Email"/>
            </div>

            <div>
                <input className= "password" type="text" placeholder="Password"/>
            </div>
        
        </div>
    )
};

export default Login;