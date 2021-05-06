import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/containers/Home";
import Offer from "./containers/Offer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Offer">
          <Offer />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
