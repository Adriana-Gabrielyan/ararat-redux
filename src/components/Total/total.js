import React from 'react';
import Button from '../Button';
import Price from '../Price';

const Total = (props) => {
  return (
    <div className="selected-product-content">
      <div className="d-flex justify-content-between">
        <div className="total">Total</div>

        <div className="d-flex flex-column justify-content-end">
          <Price className={'mt-0'} price={props.total} />
          <div className="text-right product-count">
            {props.productCount} product
          </div>
          <Button href="#" className="w-165 mt-auto">
            buy
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Total;
