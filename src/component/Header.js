import "./Header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <img src={logo} alt={"logo"} />
      <label for="search">Search</label>
      <input id="search"></input>
      {/* if token made it here then on click disconnect otherwise display connect/signup */}
      <div>
        {token ? (
          <button
            className="header-button"
            onClick={() => {
              setUser(null);
            }}
          >
            se déconnecter
          </button>
        ) : (
          <>
            <Link to="/signup">
              <button className="header-button">s'inscrire</button>
            </Link>

            <Link to="/login">
              <button className="header-button">se connecter</button>
            </Link>
          </>
        )}
        {/* <button className="header-button">vends tes articles</button> */}
        <br />
      </div>
    </div>
  );
};

export default Header;
