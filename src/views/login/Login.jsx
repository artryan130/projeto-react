import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    console.log("Enviando form");
    event.preventDefault();
    axios
      .post(
        "https://webapp290016.ip-198-58-124-158.cloudezapp.io/users/login",
        { email, password }
      )
      .then((res) => history.push("/"))
      .catch((err) => console.log(err));
  }

  return (
    <div className="Login">
      <form method="POST" onSubmit={handleSubmit} className="form">
        <div className="text">
          <h1>Login</h1>
        </div>

        <div className="line1">
          <input
            className="email"
            type="email"
            onChange={handleEmailChange}
            placeholder="Email"
          />
        </div>

        <div className="line2">
          <input
            className="password"
            type="password"
            onChange={handlePasswordChange}
            placeholder="Password"
          />
        </div>

        <div>
          <button type="submit" className="button">
            Entrar
          </button>
        </div>

        <div className="register">
          <h2>
            Não tem uma conta ainda? <a href="/register">Cadastre-se</a>
          </h2>
        </div>
      </form>
    </div>
  );
};
