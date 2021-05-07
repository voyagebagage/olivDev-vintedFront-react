import "/Users/sedatif2/Documents/REACTEUR/04-React/week-2/08/vinted-front/src/containers/Signup.css";
import { useState } from "react";
import { useEffect } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  //   const [data, setData] = useState();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await axios.post(
  //         "https://lereacteur-vinted-api.herokuapp.com/user/signup"
  //       );
  //       console.log(response.data);
  //     };
  //     fetchData();
  //   }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: "olivier@lereacteur.io",
          username: "Olivier",
          phone: "012070823010",
          password: "azerhgfy",
        }
      );
      console.log(response.data.token);
    };
    fetchData();
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/");
  };

  return (
    <div
      className="signup"
      style={{
        backgroundColor: "aqua",
        height: "100vh",
        width: "100vw",
      }}
    >
      <h2>S'inscrire</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="name" onChange={(event) => setName(event.target.value)} />
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="checkbox" />
        <input type="submit" />
        {/* <Redirect onChange={handleSubmit} /> */}
      </form>
    </div>
  );
};

export default Signup;
