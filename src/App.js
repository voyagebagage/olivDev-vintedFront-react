import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/containers/Home";
import Offer from "./containers/Offer";
import Header from "./component/Header";
import Signup from "./containers/Signup";
// import Signup from "./containers/Signup";

function App() {
  return (
    <Router>
      <Switch>
        <div className="container">
          <Header />
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
