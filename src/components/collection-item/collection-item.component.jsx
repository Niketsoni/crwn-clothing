import React from "react";
import { connect } from "react-redux";
import "./collection-item.style.scss";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-buttom/custom-buttom.component";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton
        className="custom-button"
        inverted
        onClick={() => addItem(item)}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
