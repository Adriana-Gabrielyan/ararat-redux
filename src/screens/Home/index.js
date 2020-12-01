import React from 'react';
import HomeBannerSlider from 'components/Home-Banner-Slider';
import ProductSlider from 'components/Product-Slider';

const Home = () => {
  return (
    <>
      <section>
        <HomeBannerSlider />
        <ProductSlider />
      </section>
    </>
  );
};

export default Home;
