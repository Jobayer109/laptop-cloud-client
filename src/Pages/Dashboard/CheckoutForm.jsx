import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import swal from "sweetalert";

const CheckoutForm = ({ booked }) => {
  const { price, email, customer, _id } = booked;
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [transaction, setTransaction] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccess("");
    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: customer,
          email: email,
        },
      },
    });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const payment = {
        bookingId: _id,
        transactionId: paymentIntent.id,
        email,
        price,
      };

      fetch(`http://localhost:5000/payments`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setSuccess("Congrats! Payment Successful");
            setTransaction(paymentIntent.id);
            setProcessing(false);
            swal("Very nice!", "Payment Successful!", "success");
          }
          console.log(data);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement className="p-10 bg-green-100 rounded-lg" />
        <button
          type="submit"
          className="btn btn-sm border w-20 mt-3 bg-green-600 text-white px-2 rounded-md font-semibold hover:bg-green-700 translate duration-300 ease-in cursor-pointer"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-600">
        <small>{cardError}</small>
      </p>
      <div>
        {success && (
          <>
            {" "}
            <p className="text-green-600">
              <small>{success}</small>
            </p>{" "}
            <small className="text-green-600">
              Transaction id: <span className="text-black">{transaction}</span>
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
