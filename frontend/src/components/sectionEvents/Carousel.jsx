import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselEvent from './CarouselEvent';
import Data from './dataEvent';


const Carousel = () => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  const updateCarouselSettings = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setSettings({
        ...settings,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else {
      setSettings({
        ...settings,
        slidesToShow: 3, // Adjust this value for desktop
        slidesToScroll: 1,
      });
    }
  };

  useEffect(() => {
    updateCarouselSettings();

    // Listen for window resize events to update the settings
    window.addEventListener('resize', updateCarouselSettings);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateCarouselSettings);
    };
  }, []);

  return (
    <div className="w-9/12 m-auto">
      <div className="w-50">
        
        <Slider {...settings}>
          {Data.map((event, index) => (
            <CarouselEvent
              title={event.title}
              description={event.description}
              imageUrl={event.imageUrl}
              publisher={event.publisher}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
