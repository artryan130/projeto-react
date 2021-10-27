import React from "react";
import './cadastro.css';

const Cadastro = () =>{
    return (
        <div className="cadastro">
            <h1>Cadastro</h1>


            <div className="cadastro-email">
                <input type="text" placeholder="Digite um email">
                </input>
            </div>

            <div className="cadastro-password">
                <input type="text" placeholder="Digite uma senha">
                </input>
            </div>

            <button type="submit">
                Cadastrar 
            </button>

        </div>
    )
}

export default Cadastro;