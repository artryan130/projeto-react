import "./NewImovel.css";

export default function NewImovel() {
  return (
    <div className="New">
      <div className="title">
        <h1>Novo Imóvel</h1>
      </div>
      <form className="form">
        <h2>*Preenchimento obrigatório</h2>
          <div className="externa">
            <div className="line1">
              <input className="nome" type="text" required placeholder="Nome*" />
            </div>
            <div className="line2">
              <input className="endereco" type="text" required placeholder="Endereço*" />
            </div>
            <div className="line3">
              <input className="tipo" type="text" required placeholder="Tipo*" />
              <input className="preco" type="text" required placeholder="Preço*" />
            </div>
            <div className="line4">
            <input className="url" type="text" placeholder="URL do Anúncio" />
            <input className="telefone" type="text" placeholder="Telefone do Vendedor" />
            </div>
          </div>
      
      </form>
    </div>
  );
}
