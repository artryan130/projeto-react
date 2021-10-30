import React from "react";
import axios from "axios";
import { useState } from "react";
import './cadastro.css';



const Cadastro = () =>{
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
        <div className="cadastro">
            {/* <form method="POST" onSubmit={handleSubmit}> */}

                <div className="texto">
                    <h1>Cadastro</h1>
                </div>

                <div className="linha1">
                    <input className= "nome" type="text" placeholder="Nome" onChange={handleNameChange}/>
                    <input className= "email" type="email" placeholder="Email" onChange={handleEmailChange}/>
                </div>


                <div className="linha2">
                    <input className="password" type="password" placeholder="Senha" onChange={handlePasswordChange}/>
                    <input className="repassword" type="password" placeholder="Repetir Senha" onChange={handlePasswordChange}/>
                </div>

                <button type="submit" className="button">Confirmar</button>
            {/* </form> */}
        </div>
    )
}

export default Cadastro;