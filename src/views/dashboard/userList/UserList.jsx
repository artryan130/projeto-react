import Trash from '../../../assets/trash.png'

import './UserList.css'

export default function UserList() {
  return (
    <div className="User">
      <div className="title">
        <h1>Usuários</h1>
        <input placeholder="Pesquisar" className="pesquisar"></input>
      </div>
      <div className="content">
        <div className="titles">
          <p>Nome</p>
          <p>Email</p>
          <p>Imóveis</p>
          <p></p>
        </div>
        <hr id="divider" />
        <div className="line">
          <p>Fulano da Silva</p>
          <p>fulano@gmail.com</p>
          <p>6</p>
          <img src={Trash} alt="Deletar" />
        </div>
        <div className="line">
          <p>Fulano da Silva</p>
          <p>fulano@gmail.com</p>
          <p>6</p>
          <img src={Trash} alt="Deletar" />
        </div>
        <div className="line">
          <p>Fulano da Silva</p>
          <p>fulano@gmail.com</p>
          <p>6</p>
          <img src={Trash} alt="Deletar" />
        </div>
        <div className="line">
          <p>Fulano da Silva</p>
          <p>fulano@gmail.com</p>
          <p>6</p>
          <img src={Trash} alt="Deletar" />
        </div>
      </div>
    </div>
  )
}
