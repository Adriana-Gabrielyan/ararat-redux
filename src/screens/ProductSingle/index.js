import React, {useState} from 'react';
import PRODUCTS_DATA from '../Products/products.data';
import './index.scss';
import Price from '../../components/Price';
import Button from '../../components/Button';
import {addToCart} from '../../utils/helper';
import Select from '../../components/Select';
import Count from '../../components/Cout';

const ProductSingle = ({match}) => {
  const single = PRODUCTS_DATA.filter(
    (product) => match.params.id == product.id,
  );
  const {image, logo, price, id, description, name} = single[0];
  const [total, setTotal] = useState(price);
  const [count, setCount] = useState(1);
  if (single.length === 0) {
    return <h1 className="text-center p-5">No such product</h1>;
  }

  const options = [
    {value: '1', label: '1 liter'},
    {value: '0.5', label: '0.5 liter'},
    {value: '0.7', label: '0.7 liter'},
  ];
  const IncTotalPrice = function () {
    setTotal(total + price);
    setCount(count + 1);
  };
  const DecTotalPrice = function () {
    if (count > 1) {
      setCount(count - 1);
      setTotal(total - price);
    }
  };
  return (
    <>
      <section className="product-single">
        <div className="d-flex product-single-content align-items-start flex-md-row flex-column">
          <div className="product-slider d-flex flex-md-row flex-column-reverse">
            <div className="main-container">
              <div className="slider slider-main text-center">
                <img src={image} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div className="product-description">
            <h4>{name}</h4>
            <img src={logo} alt="" className="product-logo" />
            <Price price={price} />
            <p className="small-text">
              *The cost may vary depending on the order quantity
            </p>
            <p>Choose the bottle capacity</p>
            <Select options={options} />
            <p>Select the quantity</p>
            <div className="d-flex justify-content-between align-items-end">
              <Count.CountSingle
                DecTotalPrice={DecTotalPrice}
                IncTotalPrice={IncTotalPrice}
                count={count}
              />
              <span className="small-text mb-0">Total Price</span>
            </div>
            <h4 className="text-right">
              <b>{total}</b> AMD
            </h4>

            <div className="d-flex justify-content-end mt-4">
              <Button className="w-165" onClick={() => addToCart(id)}>
                Add to Card
              </Button>

              <Button className="btn-gold w-165 ml-2">buy</Button>
            </div>
          </div>
        </div>
        <div className="description">
          <div className="title">Description</div>
          <div>
            <p>{description}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSingle;
