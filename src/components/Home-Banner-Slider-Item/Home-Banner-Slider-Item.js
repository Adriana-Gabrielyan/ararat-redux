import React from 'react';

const HomeBannerSliderItem = (props) => {
  return (
    <div>
      <a href={props.url}>
        <img
          src={props.src}
          alt="Slider"
          className="img-fluid home-banner-img"
        />
      </a>
    </div>
  );
};

export default HomeBannerSliderItem;
