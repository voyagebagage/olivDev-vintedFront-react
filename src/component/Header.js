import "./Header.css";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";
import ReactSlider from "react-slider";

const Header = ({ token, setUser }) => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt={"logo"} />
      </Link>
      <div className="search-container">
        <label for="search">Search</label>
        <input id="search"></input>
        <ReactSlider
          className="horizontal-slider"
          thumbClassName="example-thumb"
          trackClassName="example-track"
          defaultValue={[0, 100]}
          ariaLabel={["Lower thumb", "Upper thumb"]}
          ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
          renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
          pearling
          minDistance={10}
        />
      </div>
      {/* if token made it here then on click disconnect otherwise display connect/signup */}
      <div>
        {token ? (
          <button
            className="header-button-disconnect"
            onClick={() => {
              setUser(null);
              setUserId(null);
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
        <Link to="/offer/publish">
          <button className="header-button">vends tes articles</button>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Header;
