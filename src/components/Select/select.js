import React from 'react';
import './index.scss';

const Select = (props) => {
  return (
    <select id={props.id} onChange={props.onChange}>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
