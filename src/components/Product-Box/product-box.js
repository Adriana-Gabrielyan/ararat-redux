import React from 'react';
import {connect} from 'react-redux';
import './product-box.scss';
import Button from '../Button/button';
import Price from '../Price/price';
import {addItem} from '../../redux/cart/cart.actions';
import {addToCart} from '../../utils/helper';

const ProductBox = ({item}) => {
  const {id, image, logo, price} = item;

  const handleButtonClick = (event) => {
    event.stopPropagation();
    addToCart(item.id);
  };

  return (
    <a href={`/product/${id}`} className="product-box">
      <div className="product-img-div">
        <img src={image} alt="" className="product-img img-fluid" />
      </div>

      <img src={logo} alt="" className="img-fluid" />
      <Price price={price} className="justify-content-center" />
      <Button href={'#'} onClick={handleButtonClick}>
        ADD TO CART
      </Button>
    </a>
  );
};
const mapStateToProps = (store) => {
  return {
    cartItem: store.cartItem,
  };
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
