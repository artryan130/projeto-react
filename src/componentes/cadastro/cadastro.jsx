import React from "react";

import './cadastro.css';

const Cadastro = () =>{
    return (
        <div className="cadastro">

            <div className="texto">
                <h1>Cadastro</h1>
            </div>

            <div className="">
                <input className= "nome" type="text" placeholder="Nome"/>
            </div>

            <div className="">
                <input className= "email" type="email" placeholder="Email"/>
            </div>

            <div className="">
                <input className="password" type="password" placeholder="Senha"/>
            </div>

            <div className="">
                <input className="repassword" type="password" placeholder="Repetir Senha"/>
            </div>

            <button type="submit" className="button">Confirmar</button>

        </div>
    )
}

export default Cadastro;