import { Router, Switch, Route } from "react-router-dom";
import history from "../../services/history";

import Sidebar from "./sidebar/Sidebar";
import Imoveis from "./imoveis/Imoveis";
import Imovel from "./imovel/Imovel";
import EditImovel from "./editImovel/EditImovel";
import NewImovel from "./newImovel/NewImovel";
import UserList from "./userList/UserList";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="Dashboard">
      <Router history={history}>
        <div className="Sidebar">
          <Sidebar />
        </div>
        <div className="PageContent">
          <Switch>
            <Route exact path="/dashboard" component={Imoveis} />
            <Route exact path="/dashboard/newimovel" component={NewImovel} />
            <Route exact path="/dashboard/userlist" component={UserList} />
            <Route exact path="/dashboard/imovel" component={Imovel} />
            <Route exact path="/dashboard/editimovel" component={EditImovel} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Dashboard;
