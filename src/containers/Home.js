import { Link } from "react-router-dom";
import Header from "../component/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Link to="/offer">Offer</Link>
    </div>
  );
};
export default Home;
