import { Router, Switch, Route } from "react-router-dom";
import history from "./services/history";

import Login from "./views/login/Login";
import Register from "./views/register/Register";
import Dashboard from "./views/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
