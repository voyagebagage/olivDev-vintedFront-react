import { useParams } from "react";
import "./Offer.css";
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
    <div classnName="offer-body">
      {/* <Link to="/">Home</Link> */}
      <div className="offer-container">
        <div>
          <img
            className="offer-picture"
            src={data.product_image.secure_url}
            alt={"image"}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Offer;
