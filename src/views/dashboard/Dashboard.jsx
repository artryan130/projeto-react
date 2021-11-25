import { Router, Switch, Route } from "react-router-dom";
import history from '../../services/history';

import Sidebar from "./sidebar/Sidebar";
import Imoveis from "./imoveis/Imoveis";
import Imovel from "./imovel/Imovel";
import EditImovel from "./editImovel/EditImovel";
import NewImovel from "./newImovel/NewImovel";
import UserList from "./userList/UserList";

import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Router history={history}>
        <Sidebar />
        <div className="PageContent">
          <Switch>
            <Route path="/dashboard/imoveis" component={Imoveis} />
            <Route path="/dashboard/imovel" component={Imovel} />
            <Route path="/dashboard/editimovel" component={EditImovel} />
            <Route path="/dashboard/newimovel" component={NewImovel} />
            <Route path="/dashboard/userlist" component={UserList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Dashboard;
