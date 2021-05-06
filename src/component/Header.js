import "./Header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
// import Signup from "../containers/Signup";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt={"logo"} />
      <div>
        <Link to="/signup">
          <button className="header-button">s'inscrire</button>
        </Link>

        <button className="header-button">se connecter</button>
        <button className="header-button">vends tes articles</button>
        <br />
      </div>
    </div>
  );
};

export default Header;
