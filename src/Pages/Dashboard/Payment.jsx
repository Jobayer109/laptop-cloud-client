import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const booked = useLoaderData();
  const { customer, laptopName, price } = booked;
  console.log(booked);
  const stripePromise = loadStripe(
    "pk_test_51M6ARNB16mRcRBwtyRxu93ud5k8HT6ANNdfIOezd9oiy221Cok6t00vbmD5tXhUpqxhYtPk408ruJRwfyT0f6Zfl00WvUUXsUA"
  );

  return (
    <section>
      <div>
        <h3>
          Hello {customer}, <br /> Pay <span className="font-bold">$ {price}</span> for{" "}
          <span className="font-bold">{laptopName}</span>.
        </h3>
      </div>

      <div className="card w-80 lg:w-96 border border-green-500 mt-10 h-60 bg-black">
        <div className="card-body">
          <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm booked={booked} />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
