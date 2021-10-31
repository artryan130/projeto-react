import React from "react";
import axios from "axios";
import { useState } from "react";
import './login.css';

const Login = () =>{
    return (
        <div className="login">

            <div className="l-text">
                <h1>Login</h1>
            </div>

            <div className="l-line1">
                <input className="l-email" type="email" placeholder="Email"/>
            </div>

            <div className="l-line2">
                <input className="l-password" type="password" placeholder="Password"/>
            </div>

            <div>
                <button type="submit" className="l-button">Entrar</button>
            </div>
            
            <div className="l-register">
                <h2>Não tem uma conta ainda? <a href="/register">Cadastre-se</a></h2>
            </div>

        </div>
    )
};

export default Login;