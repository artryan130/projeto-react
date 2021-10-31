import React from "react";
import { Switch, Route } from "react-router";

import Register from "../componentes/pages/register/register";
import Login from "../componentes/pages/login/login";

const Routes = () => (
    <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/register" component={Register}/>
    </Switch>
)

export default Routes;
    