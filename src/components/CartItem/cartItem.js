import React from 'react';
import './index.scss';
import Count from '../Cout';
import Price from '../Price';

const CartItem = ({id, onDelete, ...props}) => {
  return (
    <div className="selected-product-content mb-4">
      <div className="d-flex flex-wrap">
        <div className="payment-img">
          <img src={props.image} className="img-fluid" alt="" />
        </div>
        <div>
          <img src={props.logo} alt="" className="logo-img" />
        </div>

        <div className="ml-auto d-flex flex-column">
          <Count
            count={props.count}
            decCount={props.decCount}
            incCount={props.incCount}
          />
          <Price price={props.price} />
          <div className="text-right mt-auto">
            <button
              className="delete bg-transparent border-0"
              onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
