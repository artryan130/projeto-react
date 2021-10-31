import React from "react";
import axios from "axios";
import { useState } from "react";
import './register.css';


const Register = () =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    function handleNameChange(event) {
        setName(event.target.value);
    }
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    
    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    // function handleSubmit(event) {
    //     console.log("Enviar formulario");
    //     event.preventDefault();
    //     axios
    //         .post("/users", { name, email, password })
    //         .then((res) => history.push("/"))
    //         .catch((err) => console.log(err));
    // }

    return (
        <div className="register">
            {/* <form method="POST" onSubmit={handleSubmit}> */}

                <div className="r-title">
                    <h1>Cadastro</h1>
                </div>

                <div className="r-line1">
                    <input className= "r-name" type="text" placeholder="Nome" onChange={handleNameChange}/>
                    <input className= "r-email" type="email" placeholder="Email" onChange={handleEmailChange}/>
                </div>

                <div className="r-line2">
                    <input className="r-password" type="password" placeholder="Senha" onChange={handlePasswordChange}/>
                    <input className="r-repassword" type="password" placeholder="Repetir Senha" onChange={handlePasswordChange}/>
                </div>

                <button type="submit" className="r-button">Confirmar</button>
                
            {/* </form> */}
        </div>
    )
}

export default Register;