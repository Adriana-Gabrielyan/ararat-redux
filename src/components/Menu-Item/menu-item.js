import React from 'react';

const MenuItem = (props) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.link}>
        {props.name}
      </a>
    </li>
  );
};

const MenuItemImage = ({children, ...props}) => {
  return (
    <li className="nav-item item-icon position-relative">
      <a
        className="nav-link d-flex align-items-center"
        href={props.link}
        onClick={props.onClick}>
        <img src={props.image} alt="" />
        <span> {props.name}</span>
        {children}
      </a>
    </li>
  );
};

export default Object.assign(MenuItem, {MenuItemImage});
