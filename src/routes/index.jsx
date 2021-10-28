import React from "react";
import { Switch, Route } from "react-router";

import Cadastro from "../componentes/pages/cadastro/cadastro";
import Login from "../componentes/pages/login/login";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Cadastro}/>
    </Switch>
)

export default Routes;
    