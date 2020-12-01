import React from 'react';
import './index.scss';
import CheckBox from 'components/Checkbox/checkbox';
import PRODUCTS_DATA from 'screens/Products/products.data';
import CATEGORIES from 'screens/Products/categories.data';
import FeaturedProduct from '../FeaturedProduct/featuredProduct';
import {addToCart} from '../../utils/helper';

const Sidebar = (props) => {
  const Products = PRODUCTS_DATA;
  const Categories = CATEGORIES;

  return (
    <>
      <div className="mobile-filter  d-md-none d-block">
        <img src="/img/filter.svg" alt="" width="30px" />
      </div>
      <aside className="products-sidebar">
        <div className="sidebar                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    -height">
          <div className="d-md-none d-block text-right close-filter ml-auto pb-4">
            <img src="/img/close.svg" alt="" width="20" />
          </div>
          <div className="categories">
            <div className="filter-title">Product Categories</div>
            {Categories.map((category) => (
              <CheckBox
                className={props.isChecked === category.id ? 'checked' : null}
                key={category.id}
                label={category.name}
                id={category.id}
                onClick={() => props.onCheckboxCheck(category.id)}
              />
            ))}
          </div>
          <div className="price-filter mb-4">
            <div className="filter-title">Filter Price</div>
            <div className="d-flex align-items-center justify-content-between">
              <input
                type="number"
                placeholder="Min"
                onChange={props.onPriceChangeMin}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                onChange={props.onPriceChangeMax}
              />
            </div>
          </div>
          <div className="featured-product">
            <div className="filter-title">FEATURED PRODUCTS</div>
            {Products.map((product) =>
              product.featured ? (
                <FeaturedProduct
                  addToCart={() => addToCart(product.id)}
                  key={product.id}
                  {...product}
                />
              ) : (
                ''
              ),
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
