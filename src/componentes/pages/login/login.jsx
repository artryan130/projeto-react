import React from "react";
import axios from "axios";
import { useState } from "react";
import './login.css';
import { useHistory } from "react-router";

const Login = () =>{
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    
    function handleSubmit(event) {
        console.log("Enviando form");
        event.preventDefault();
        axios.post('https://webapp290016.ip-198-58-124-158.cloudezapp.io/users/login', {email, password})
        .then((res) => history.push("/"))
        .catch((err) => console.log(err));
    }
    
    return (
        <div className="login">
            <form method="POST" onSubmit={handleSubmit}>
                <div className="l-text">
                    <h1>Login</h1>
                </div>

                <div className="l-line1">
                    <input className="l-email" type="email" onChange={handleEmailChange} placeholder="Email"/>
                </div>

                <div className="l-line2">
                    <input className="l-password" type="password" onChange={handlePasswordChange} placeholder="Password"/>
                </div>

                <div>
                    <button type="submit" className="l-button">Entrar</button>
                </div>
                
                <div className="l-register">
                    <h2>Não tem uma conta ainda? <a href="/register">Cadastre-se</a></h2>
                </div>
            </form>
        </div>
    )
};

export default Login;