import "./NewImovel.css";

export default function NewImovel() {
  return (
    <div className="New">
      <div className="title">
        <h1>Novo Imóvel</h1>
      </div>
      <form className="form">
        <h2>*Preenchimento obrigatório</h2>
        <input className="nome" type="text" required placeholder="Nome" />
        <input className="nome" type="text" required placeholder="Endereço" />
        <input className="nome" type="text" required placeholder="Tipo" />
        <input className="nome" type="text" required placeholder="Preço" />
        <input className="nome" type="text" placeholder="URL do Anúncio" />
        <input className="nome" type="text" placeholder="Telefone do Vendedor" />
      </form>
    </div>
  );
}
