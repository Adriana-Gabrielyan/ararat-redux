import React from 'react';
import Slider from 'react-slick';
import './index.scss';
import HomeBannerSliderItem from '../Home-Banner-Slider-Item/Home-Banner-Slider-Item';

const HomeBannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderImages = [
    {
      image: 'banner.jpg',
      url: 'http://ararat.aist.fun/',
    },
    {
      image: 'banner_svarchik.jpg',
      url: 'http://ararat.aist.fun/',
    },
  ];

  return (
    <div>
      <Slider {...settings} className="home-banner-slider">
        {sliderImages.map((sliderImage, index) => (
          <HomeBannerSliderItem
            key={index}
            src={`/img/${sliderImage.image}`}
            url={sliderImage.url}
          />
        ))}
      </Slider>
    </div>
  );
};

export default HomeBannerSlider;
