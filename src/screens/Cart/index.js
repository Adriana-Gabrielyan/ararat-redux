import React, {useState, useEffect} from 'react';
import './index.scss';
import CartItem from '../../components/CartItem';
import Total from '../../components/Total';
import PRODUCTS_DATA from '../Products/products.data';
import useLocalStorage from '../../effects/useLocalStorage.effect';
import {getItemFromStorage} from '../../utils/helper';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [cartIds, setCartIds] = useLocalStorage('cart', []);
  let productCount = 0;

  function handleDeleteProduct(cardId) {
    const cartIdsCopy = {...cartIds};
    const deletedItems = cartItems.filter((cartItem) => cardId == cartItem.id);
    setCartItems(deletedItems);
    delete cartIdsCopy[cardId];
    setCartIds(cartIdsCopy);
  }

  useEffect(() => {
    const products = PRODUCTS_DATA.filter((item) =>
      Object.keys(cartIds).includes(item.id.toString()),
    );
    setCartItems(products);
  }, [cartIds]);

  function incCount(id) {
    const count = getItemFromStorage(id).count;
    setItemFromStorage(id, {
      count: count + 1,
    });
  }

  function decCount(id) {
    const count = getItemFromStorage(id).count;
    if (count > 1) {
      setItemFromStorage(id, {
        count: count - 1,
      });
    }
  }

  const setItemFromStorage = (key, value) => {
    setCount(count + 1);
    let items = localStorage.getItem('cart');
    items = JSON.parse(items);
    items = Object.assign(items, {[key]: {...items[key], ...value}});
    localStorage.setItem('cart', JSON.stringify(items));
  };

  const total = () => {
    let totalPrice = 0;
    for (let i = 0; i < cartItems.length; i++) {
      productCount += getItemFromStorage(cartItems[i].id)?.count;
      totalPrice +=
        getItemFromStorage(cartItems[i].id)?.count * cartItems[i].price;
    }
    return totalPrice;
  };

  // const addNewCartItem = (id) => {
  //   const cartIdsCopy = {...cartIds};
  //   if (cartIdsCopy[id]) {
  //     cartIdsCopy[id].count += 1;
  //   } else {
  //     cartIdsCopy[id].count = 1;
  //   }
  //
  //   setCartIds(cartIdsCopy);
  // };

  return (
    <section className="payment-page ">
      {cartItems.length > 0 ? (
        <div className="d-flex justify-content-between flex-md-row flex-column">
          <div className="selected-product mb-3">
            <div className="title">Selected Product</div>
            {cartItems.map((cartItem) => {
              return (
                <CartItem
                  decCount={() => decCount(cartItem.id)}
                  incCount={() => incCount(cartItem.id)}
                  count={getItemFromStorage(cartItem.id)?.count}
                  key={cartItem.id}
                  {...cartItem}
                  onDelete={handleDeleteProduct}
                />
              );
            })}
          </div>

          <div className="subtotal mb-3">
            <div className="title">Subtotal</div>
            <Total total={total()} productCount={productCount} />
          </div>
        </div>
      ) : (
        <h1 className="title-h1 text-center">Your cart is Empty</h1>
      )}

      <a href="/products" className="back mt-2">
        Continue Shopping
      </a>
    </section>
  );
};

export default Cart;
