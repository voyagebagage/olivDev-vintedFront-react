import OfferDescription from "../component/OfferDescription";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Offer.css";
import { useEffect, useState } from "react";
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
      // setUserId(data.owner._id);

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
          <OfferDescription data={data} />
          <Link exact to="/payment">
            <button
            // onClick={() => {
            //   setUserId(data.owner._id);
            // }}
            >
              Acheter
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
