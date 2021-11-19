import React from "react";
import './imoveis.css';

const Imoveis = () =>{
    
return (
    <div className="imoveis">

        <div className="i-line1">
            <h1>Imóveis</h1>
            <input className="i-pesquisar" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
            <button className="i-enviar" type="submit">Enviar</button>
        </div>

    </div>

)   
}

export default Imoveis;