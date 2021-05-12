import "./Home.css";
import HomeOffers from "../component/HomeOffers";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return isLoading ? (
    <div className="dl">
      <span>-_D_O_W_N_L_O_A_D_I_N_G_-</span>
      {/* <div className="downloading"></div> */}
      <div
        style={{
          width: "80%",
          height: "0",
          paddingBottom: "68%",
          position: "relative",
        }}
      >
        <img
          src="https://media.giphy.com/media/curuTbwjOnsRO/giphy.gif"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
          alt={"DL"}
        />
      </div>
    </div>
  ) : (
    <>
      <section className="header-top">
        <div className="full-length-top-photo">
          <div className="whiteBox">
            <span>Prêts à faire du tri dans vos placards ?</span>

            <button
              onClick={() => {
                history.push("/offer/publish");
              }}
              className="whiteBox-button"
            >
              Commencer à vendre
            </button>
          </div>
          <img
            className="torn-effect"
            src={
              "https://lereacteur-vinted.netlify.app/static/media/tear.42d6cec6.svg"
            }
            alt={"torn effect"}
          />
        </div>
      </section>
      <section className="offers-display">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offer/${offer._id}`}>
              <HomeOffers offer={offer} />
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Offer;
