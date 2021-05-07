import "/Users/sedatif2/Documents/REACTEUR/04-React/week-2/08/vinted-front/src/containers/Signup.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //post axios request (don't forget to async any direct parent function, here=> handleSubmit)
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      {
        //send json to DB
        email,
        username,
        //phone: phone,
        password,
      }
    );
    //collect token
    const token = response.data.token;
    // console.log("I'm the Token =>", token);
    //send token to setUser Func and put it in a cookie there thax to {setUser} in props
    setUser(token);
    //back to home
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
        <input
          type="text"
          onChange={(event) => setUsername(event.target.value)}
        />
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
      </form>
    </div>
  );
};

export default Signup;
