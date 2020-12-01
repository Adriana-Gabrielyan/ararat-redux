import React from 'react';
import './index.scss';

const Count = (props) => {
  return (
    <div className="count d-flex justify-content-end align-items-center position-relative">
      <span>Quantity</span>
      <span className="sub" onClick={() => props.decCount()}>
        {' '}
      </span>
      <input type="number" value={props.count} readOnly />
      <span className="add" onClick={() => props.incCount()}>
        {' '}
      </span>
    </div>
  );
};

const CountSingle = (props) => {
  return (
    <div className="count-buttons d-flex align-items-center">
      <button
        className="sub bg-transparent"
        type="button"
        aria-label="sub"
        onClick={() => props.DecTotalPrice()}
        data-min="1">
        <span>-</span>
      </button>
      <input
        type="number"
        value={props.count}
        name="adults"
        aria-label="number"
        readOnly
      />
      <button
        className="add bg-transparent"
        type="button"
        aria-label="add"
        onClick={() => props.IncTotalPrice()}>
        +
      </button>
    </div>
  );
};

export default Object.assign(Count, {CountSingle});
