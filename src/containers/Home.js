import { Link } from "react-router-dom";

const Home = () => {
  const id = 4323424;
  return (
    <div>
      <Link to={`/offer/${id}`}>Offer</Link>
    </div>
  );
};
export default Home;
