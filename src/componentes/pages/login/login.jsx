import React from "react";

import './login.css';

const Login = () =>{
    return (
        <div className="body">
            <div className="login-texto">
                <h1>Login</h1>
            </div>

            <div>
                <input className="login-email" type="text" placeholder="Email"/>
            </div>

            <div>
                <input className="login-password" type="text" placeholder="Password"/>
            </div>
        
            <button type="submit" className="login-button">Entrar</button>



        </div>
    )
};

export default Login;