import React from "react";
import './cadastro.css';

const Cadastro = () =>{
    return (
        <div className="cadastro">
            <div className="texto">
                <h1>Cadastro</h1>
            </div>

            <div className="cadastro-email">
                <input className= "cadastro-email-campo" type="text" placeholder="Digite um email"/>
            </div>

            <div className="cadastro-password">
                <input type="text" placeholder="Digite uma senha"/>
            </div>

            <button type="submit">
                Cadastrar 
            </button>

        </div>
    )
}

export default Cadastro;