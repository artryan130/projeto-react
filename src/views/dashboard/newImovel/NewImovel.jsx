import "./NewImovel.css";

export default function NewImovel() {
  return (
    <div className="New">
      <div className="title">
        <h1>Novo Imóvel</h1>
      </div>
      <form className="form">
          <input
            className="nome"
            type="text"
            placeholder="Nome"
          />
      </form>
    </div>
  );
}
