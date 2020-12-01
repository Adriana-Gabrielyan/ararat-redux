import React from 'react';
import Slider from 'react-slick';
import './index.scss';
import ProductSliderItem from '../Product-Slider-Item/product-slider-item';
import Button from '../Button/button';
import PRODUCTS_DATA from '../../screens/Products/products.data';
import {addToCart} from '../../utils/helper';

const ProductSlider = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // autoplay:true,
    dots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const Products = PRODUCTS_DATA;
  return (
    <section className="brandy-section">
      <h1 className="title-h1 text-center">The legendary Brandies</h1>
      <Slider
        {...settings}
        className="hovered-slider default-slider brandy-slider">
        {Products.map((product) => (
          <ProductSliderItem
            key={product.id}
            addToCart={() => addToCart(product.id)}
            {...product}
          />
        ))}
      </Slider>

      <div className="text-center">
        <Button href={'/products'}>See More</Button>
      </div>
    </section>
  );
};

export default ProductSlider;
