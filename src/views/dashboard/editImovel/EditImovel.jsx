import './EditImovel.css'

export default function EditImovel() {
    return(
        <div className="Edit">
            <div className="title">
                <h1>Editar Imóvel</h1>
            </div>
                <form className="form">
                    <h2>*Preenchimento obrigatório</h2>
                        <div className="externa">
                            <div className="line1">
                                <input className="nome" type="text" required placeholder="Vamos importar os dados*"/>
                            </div>
                            <div className="line2">
                                <input className="endereco" type="text" required />
                            </div>
                            <div className="line3">
                                <input className="tipo" type="text" required />
                                <input className="preco" type="text" required />
                            </div>
                            <div className="line4">
                                <input className="url" type="text" />
                                <input className="telefone" type="text" />
                            </div>
                        </div>
        
                    </form>
            </div>
    )
}