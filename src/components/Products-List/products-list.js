import React from 'react';
import './index.scss';
import ProductBox from '../Product-Box/product-box';
import {addToCart} from '../../utils/helper';

const ProductsList = (props) => {
  return (
    <div className="products ml-auto d-flex flex-wrap">
      {props.products.map((item) => (
        <ProductBox
          key={item.id}
          addToCart={() => addToCart(item.id)}
          item={item}
        />
      ))}
    </div>
  );
};

export default ProductsList;
