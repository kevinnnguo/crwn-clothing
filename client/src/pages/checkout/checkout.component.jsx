import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  SelectCartItems,
  SelectCartTotal,
} from "../../redux/cart/cart.selector";
import { CheckoutContainer, HeaderContainer, HeaderBlockContainer, TotalContainer, TextWarningContainer } from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <HeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </HeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: ${total}</span>
    </TotalContainer>

    <TextWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 CVV: 123
    </TextWarningContainer>
    <StripeCheckoutButton price={total}/>
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: SelectCartItems,
  total: SelectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
