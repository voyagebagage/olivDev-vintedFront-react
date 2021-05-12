import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser, setUserId }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    //post axios request (don't forget to async any direct parent function, here=> handleSubmit)
    const response = await axios.post(
      "https://lereacteur-vinted-api.herokuapp.com/user/login",
      {
        //send json to DB
        email,
        //phone: phone,
        password,
      }
    );

    //collect token & id
    const token = response.data.token;
    const id = response.data._id;
    // console.log("I'm the id =>", response.data._id);

    // console.log("I'm the Token =>", token);
    //send token to setUser Func and put it in a cookie there thax to {setUser} in props
    setUser(token);
    //and id for payment
    setUserId(id);
    // console.log("I'm the id =>", id);

    //back to home
    history.push("/");
  };
  return (
    <div>
      <br />
      <br />
      <br />
      Login Page
      <h2>Se connecter</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
