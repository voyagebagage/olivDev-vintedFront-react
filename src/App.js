import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "../src/containers/Home";
import Offer from "./containers/Offer";
import Header from "./component/Header";
import Signup from "./containers/Signup";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 3 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Switch>
        <div className="container">
          <Header token={token} setUser={setUser} />
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <Signup setUser={setUser} />
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
