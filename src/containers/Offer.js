// import "./Offer.css";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const Offer = () => {
//   const [data, setData] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(
//         "https://lereacteur-vinted-api.herokuapp.com/offer/:id"
//       );
//       setData(response.data);
//       setIsLoading(false);
//     };
//     fetchData();
//   }, []);
//   return
// isLoading ? (
//   <div className="downloading">
//     <span>-_D_O_W_N_L_O_A_D_I_N_G_-</span>
//     {/* <div className="downloading"></div> */}
//     <div
//       style={{
//         width: "100%",
//         height: "0",
//         paddingBottom: "68%",
//         position: "relative",
//       }}
//     >
//       <img
//         src="https://media.giphy.com/media/curuTbwjOnsRO/giphy.gif"
//         width="100%"
//         height="100%"
//         style={{ position: "absolute" }}
//         frameBorder="0"
//         class="giphy-embed"
//         allowFullScreen
//       ></img>
//     </div>
//     <p>
//       <a href="https://giphy.com/gifs/mrdiv-curuTbwjOnsRO"></a>
//     </p>
//   </div>
// ) : (
// <div>
//   <Link to="/">Home</Link>
// </div>
// );
// };

// export default Offer;
