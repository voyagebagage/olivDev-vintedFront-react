import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
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
            <button className="whiteBox-button">Commencer à vendre</button>
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
              <p
                className="card-container"
                key={offer._id}
                style={{ border: "2px solid aqua" }}
              >
                <div className="card-avatar-username">
                  {offer.owner.account.avatar && (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt={"B"}
                    />
                  )}
                  <h2>{offer.owner.account.username}</h2>

                  <img
                    className="product-image"
                    src={offer.product_image.secure_url}
                    alt={offer.product_description}
                  />
                </div>
                <div>
                  <span>{offer.product_price}€</span>
                  {offer.product_details.map((productDetail) => {
                    return (
                      <>
                        <br />
                        <span>{productDetail.TAILLE}</span>
                        <br />
                        <span>{productDetail.MARQUE}</span>
                      </>
                    );
                  })}
                </div>
              </p>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default Offer;
