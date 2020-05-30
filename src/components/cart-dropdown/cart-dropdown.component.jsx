import React from "react";
import { connect } from "react-redux";
import "./cart-dropdown.styles.scss";
import CartItem from "../card-item/card-item.component";
import CustomButton from "../custom-buttom/custom-buttom.component";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProp = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProp)(CartDropdown);
