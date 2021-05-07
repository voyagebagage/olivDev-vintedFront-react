import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState({});
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
    <div className="downloading">
      <span>-_D_O_W_N_L_O_A_D_I_N_G_-</span>
      {/* <div className="downloading"></div> */}
      <div
        style={{
          width: "100%",
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
      <Link to="/">Home</Link>
      <section className="header-top">
        <div className="full-length-top-photo">
          <div className="whiteBox"></div>
        </div>
      </section>
      <section className="offers-display">
        {data.offers.map((offer) => {
          return (
            <p
              className="card-container"
              key={offer._id}
              style={{ border: "2px solid aqua" }}
            >
              {/* {console.log(offer.owner.account.avatar.secure_url)}; */}
              {/* {console.log(offer.product_details[0])} */}
              <div className="card-avatar-username">
                <img src={offer.owner.account.avatar.secure_url} alt={"B"} />
                <h2>{offer.owner.account.username}</h2>
                <img
                  src={offer.product_image.secure_url}
                  alt={offer.product_description}
                />
              </div>
              <div>
                <span>{offer.product_price}</span>
                {offer.product_details.map((productDetail) => {
                  {
                    console.log(productDetail.MARQUE);
                  }
                  return <span>{productDetail.MARQUE}</span>;
                })}

                <span></span>
              </div>
            </p>
          );
        })}
      </section>
    </>
  );
};

export default Offer;
