import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ setUserId, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      // Récupérer les données du formulaire
      const cardElements = elements.getElement(CardElement);
      console.log("cardElemnt", cardElements);

      setUserId(id);
      console.log("id", id);
      // Envoyer ces données à l'API Stripe
      const stripeResponse = await stripe.createToken(cardElements, {
        name: id,
      });
      console.log("stResponse=>", stripeResponse);
      const stripeToken = stripeResponse.token.id;
      // Envoyer le token au serveur
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
        }
      );
      console.log("Response=>", response.data);
      if (response.status === 200) {
        setSuccessMessage("Paiement Validé");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <form onSubmit={handleSubmit} style={{ height: "50vh" }}>
        {/* <label>Name</label>
        <input type="text" /> */}
        {/* <CardNumberElement /> */}
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <input type="submit" />
      </form>
      {successMessage}
    </div>
  );
};

export default CheckoutForm;
