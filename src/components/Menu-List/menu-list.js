import React from 'react';
import MenuItem from '../Menu-Item/menu-item';
import './index.scss';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from 'api/auth';
import useLocalStorage from '../../effects/useLocalStorage.effect';

const MenuList = () => {
  const {isAuthenticated} = useSelector((state) => state.user);
  const [cartIds, setCartIds] = useLocalStorage('cart', []);
  const dispatch = useDispatch();
  return (
    <ul className="navbar-nav ml-auto">
      <MenuItem name="ABOUT" link="/about" />
      <MenuItem name="PRODUCTS" link="/products" />
      <MenuItem.MenuItemImage
        name="Cart"
        link="/cart"
        image="/img/shopping-bag.svg">
        {Object.keys(cartIds).length > 0 ? (
          <span className="basket-product-count">
            {Object.keys(cartIds).length}
          </span>
        ) : (
          ''
        )}
      </MenuItem.MenuItemImage>
      <MenuItem.MenuItemImage
        onClick={() => dispatch(logout())}
        name={isAuthenticated ? 'Logout' : 'Login'}
        link={isAuthenticated ? '#' : '/login'}
        image="/img/user.svg"
      />
    </ul>
  );
};

export default MenuList;
