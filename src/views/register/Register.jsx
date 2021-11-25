import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

import "./Register.css";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    console.log("Enviar formulario");
    event.preventDefault();
    axios
      .post("https://webapp290016.ip-198-58-124-158.cloudezapp.io/users", {
        name,
        email,
        password,
      })
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="Register">
      <div className="arrow">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="64px"
            viewBox="0 0 24 24"
            width="64px"
            fill="#1D3557"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </a>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div className="title">
          <h1>Cadastro</h1>
        </div>

        <div className="line1">
          <input
            className="name"
            type="text"
            placeholder="Nome"
            onChange={handleNameChange}
          />
          <input
            className="email"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </div>

        <div className="line2">
          <input
            className="password"
            type="password"
            placeholder="Senha"
            onChange={handlePasswordChange}
          />
          <input
            className="repassword"
            type="password"
            placeholder="Repetir Senha"
            onChange={handlePasswordChange}
          />
        </div>

        <button type="submit" className="button">
          Confirmar
        </button>
      </form>
    </div>
  );
};