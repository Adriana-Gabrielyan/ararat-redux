import React from 'react';
import Button from '../Button/button';
import './index.scss';
import Price from '../Price/price';

const FeaturedProduct = (props) => {
  return (
    <div className="d-flex position-relative">
      <div className="featured-product-text text-right">
        <img src={props.image} alt="" className="featured-product-img mb-5" />
        <img src={props.logo} alt="" />
        <Price price={props.price} />
        <Button onClick={props.addToCart}>Add to card</Button>
      </div>
    </div>
  );
};
export default FeaturedProduct;
