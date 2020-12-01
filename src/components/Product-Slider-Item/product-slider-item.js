import React from 'react';
import Price from '../Price';
import Button from '../Button';
import {addToCart} from '../../utils/helper';

const ProductSliderItem = (props) => {
  return (
    <div className="d-flex justify-content-center">
      <a
        href={`/product/${props.id}`}
        className="slider-div d-block text-decoration-none">
        <img src={props.image} alt="" className="bottle-img" />
        <div className="remove-on-hover">
          <img src={props.logo} alt="" className="logo" />
          <Price className={'justify-content-center'} price={props.price} />
        </div>
        <Button
          className="btn-outline-gold"
          href={'#'}
          onClick={() => addToCart(props.id)}>
          ADD TO CART
        </Button>
      </a>
    </div>
  );
};

export default ProductSliderItem;
