import React from 'react';
import './index.scss';

const CheckBox = (props) => {
  return (
    <label
      htmlFor={props.id}
      onClick={props.onClick}
      className={props.className}>
      <span>{props.label} </span>
      <span>{props.count} </span>
      <input type="checkbox" id={props.id} />
    </label>
  );
};

export default CheckBox;
