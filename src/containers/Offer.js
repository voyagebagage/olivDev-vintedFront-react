import { useParams } from "react-router-dom";
import "./Offer.css";
// import "./Home.css";

import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

import axios from "axios";

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
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
          src="https://media.giphy.com/media/mPPGKOhoy5Dd6/giphy.gif"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          allowFullScreen
          alt={"Dl"}
        />
      </div>
    </div>
  ) : (
    <div className="offer-body">
      <div className="offer-container">
        <div>
          <img
            className="offer-picture"
            src={data.product_image.secure_url}
            alt={"image"}
          />
        </div>
        <div className="offer-infos">
          <div>
            <span>{data.product_price}&nbsp;€</span>
            <ul className="offer-list">
              <li>{data.product_details[0].MARQUE}</li>
              <li>{data.product_details[1].TAILLE}</li>
              <li>{data.product_details[2].ÉTAT}</li>
              <li>{data.product_details[3].COULEUR}</li>
              <li>{data.product_details[4].EMPLACEMENT}</li>
              <li>PAIEMENT</li>
            </ul>
          </div>
          <div className="line"></div>
          <div>
            <div className="name">{data.product_name}</div>
            <div className="descritpion">{data.product_description}</div>
            <div className="offer-avatar-username">
              <img src={data.owner.account.avatar.secure_url} alt={"B"} />
              <h2>{data.owner.account.username}</h2>
            </div>
            <button>Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
