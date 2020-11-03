import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hf4rEJHrt3sCKySkXPVak7Hjx9Zs1dBJjNg168wsZnXDb7Ok8dH7C3UYqoEBUvGvlbooD8eAmaVOpce2uubJGLQ00azpfVyWp";

  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("succesful payment");
      })
      .catch((error) => {
        console.log("Payment Error: ", error);
        alert(
          "There was an issue with your payment! Please make sure you use the provided credit card."
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://www.easyicon.net/api/resizeApi.php?id=1212992&size=72"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

//Test Card 4242 4242 4242 4242 - Expired Date 01/20 - CW: 123

export default StripeCheckoutButton;
