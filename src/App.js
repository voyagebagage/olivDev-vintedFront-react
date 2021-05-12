import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Cookies from "js-cookie";
import Home from "../src/containers/Home";
import Offer from "./containers/Offer";
import Header from "./component/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const [id, setId] = useState(Cookies.get("id") || null);

  const setUserId = (id) => {
    if (id) {
      Cookies.set("id", id, { expires: 3 });
      setId(id);
    } else {
      Cookies.remove("id");
      setId(null);
    }
  };
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
      {/* <div className="container"> */}

      <Header token={token} setUser={setUser} setUserId={setUserId} />
      <Switch>
        <Route path="/offer/publish">
          <Publish token={token} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route exact path="/payment">
          <Payment id={id} />
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      {/* </div> */}
    </Router>
  );
}

export default App;
