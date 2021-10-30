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

            <div>
                <button type="submit" className="login-button">Entrar</button>
            </div>
            

            <div className="texto-cadastro">
                <h1>Não tem uma conta ainda? <a href="/register">Cadastre-se</a></h1>
            </div>


        </div>
    )
};

export default Login;