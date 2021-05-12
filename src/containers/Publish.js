import "./Publish.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [size, setSize] = useState();
  const [brand, setBrand] = useState();
  const [color, setColor] = useState();
  const [city, setCity] = useState();
  const [condition, setCondition] = useState();
  const [price, setPrice] = useState();
  const [data, setData] = useState();
  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data._id) {
        history.push(`/offer/${response.data._id}`);
      } else {
        alert("Une erreur est survenue");
      }
      setData(response.data);
      alert(JSON.stringify(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {!token ? (
        history.push("/login")
      ) : (
        <div>
          <h2>Vends ton article</h2>
          <form onChange={handleSubmit}>
            <div>
              <input
                type="file"
                onChange={(event) => setPicture(event.target.files[0])}
              />
              {picture && <img src={URL.createObjectURL(picture)} />}
            </div>
            <div className="title-description">
              <input
                type="text"
                onChange={(event) => setTitle(event.target.value)}
              />
              <input
                type="text"
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="product-details">
              <input
                type="text"
                onChange={(event) => setBrand(event.target.value)}
              />
              <input
                type="text"
                onChange={(event) => setSize(event.target.value)}
              />
              <input
                type="text"
                onChange={(event) => setColor(event.target.value)}
              />
              <input
                type="text"
                onChange={(event) => setCondition(event.target.value)}
              />
              <input
                type="text"
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                onChange={(event) => setPrice(event.target.value)}
              />
              <label>Je suis intéressé(e) par les échanges</label>
              <input type="checkbox" />
            </div>
            <button type="submit">Ajouter</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Publish;

{
  /* <div className="dl"> */
}
{
  /* <span>-_D_O_W_N_L_O_A_D_I_N_G_-</span> */
}
{
  /* <div className="downloading"></div> */
}
{
  /* <div
            className="gif"
            style={{
              width: "80%",
              height: "0",
              paddingBottom: "68%",
              position: "relative",
            }}
          > */
}
{
  /* <img
              src="https://media.giphy.com/media/NXp9HM6YeuS0U/giphy.gif"
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              frameBorder="0"
              allowFullScreen
              alt={"DL"}
            /> */
}
{
  /* </div>
        </div> */
}
