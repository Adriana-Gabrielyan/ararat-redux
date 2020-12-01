import React from 'react';
import './index.scss';

const FormInput = ({handleChange, ...props}) => {
  return <input onChange={props.handleChange} {...props} />;
};

export default FormInput;
