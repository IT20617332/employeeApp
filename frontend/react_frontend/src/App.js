import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./components/listEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //after installation of react-router-dom

//Switch has been replaced by Routes so get old version, uninstalled and re installed dom@5.2.0

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListEmployeeComponent}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route
              path="/add-employee/:id"
              component={CreateEmployeeComponent}
            ></Route>
            <Route
              path="/view-employee/:id"
              component={ViewEmployeeComponent}
            ></Route>
            {/* <Route
              path="/update-employee/:id"
              component={UpdateEmployeeComponent}
            ></Route> */}
            {/* <ListEmployeeComponent /> */}
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
