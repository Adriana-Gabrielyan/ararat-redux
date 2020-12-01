import React from 'react';
import './button.scss';

const Button = ({children, className, ...otherProps}) => {
  const Component = otherProps.href ? 'a' : 'button';
  return (
    <Component className={`btn-outline-gold ${className}`} {...otherProps}>
      {children}
    </Component>
  );
};

export default Button;
