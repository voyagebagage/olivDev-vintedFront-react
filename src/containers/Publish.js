import "./Publish.css";
import { useHistory } from "react-router-dom";
const Publish = ({ token }) => {
  const history = useHistory();
  return (
    <>
      {!token ? (
        history.push("/login")
      ) : (
        <div>
          <h2>Vends ton article</h2>
          <form>
            <div>
              <input type="file" />
            </div>
            <div className="titre-description">
              <input type="text" />
              <input type="text" />
            </div>
            <div className="product-details">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
            <div>
              <input type="text" />
              <input type="checkbox" />
            </div>
            <button type="submit"></button>
          </form>
        </div>
      )}
    </>
  );
};

export default Publish;
