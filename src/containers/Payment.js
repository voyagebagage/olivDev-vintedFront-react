import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../component/CheckoutForm";
import { useState } from "react";
import Cookies from "js-cookie";

const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");

const Payment = ({ id }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id} />
      </Elements>
    </div>
  );
};
export default Payment;
