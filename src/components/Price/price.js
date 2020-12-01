import React from 'react';
import './price.scss';

const Price = (props) => {
  function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <div className={`price d-flex align-items-center ${props.className}`}>
      <span>Price </span>
      <span> {numberWithSpaces(props.price)} AMD</span>
    </div>
  );
};

export default Price;
