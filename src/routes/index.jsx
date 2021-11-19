import React from "react";
import { Switch, Route } from "react-router";

import Register from "../componentes/pages/register/register";
import Login from "../componentes/pages/login/login";
import Imoveis from "../componentes/pages/imoveis/imoveis";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/imoveis" component={Imoveis}/>
    </Switch>
)

export default Routes;
    