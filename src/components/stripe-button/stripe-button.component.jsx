import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51Hf4rEJHrt3sCKySkXPVak7Hjx9Zs1dBJjNg168wsZnXDb7Ok8dH7C3UYqoEBUvGvlbooD8eAmaVOpce2uubJGLQ00azpfVyWp";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
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

export default StripeCheckoutButton;
