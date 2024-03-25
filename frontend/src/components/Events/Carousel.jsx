import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselEvent from './CarouselEvent';
import Data from '../../dataEvent';


const Carousel = () => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });

  const updateCarouselSettings = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth < 1025;

    if (isMobile) {
      setSettings({
        ...settings,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    } else if (isTablet) {
      setSettings({
        ...settings,
        slidesToShow: 2,
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
    window.addEventListener('resize', updateCarouselSettings);

    return () => {
      window.removeEventListener('resize', updateCarouselSettings);
    };
  }, []);

  return (
    <div className="lg:w-10/12 px-4 md:px-16 mx-auto">
      <Slider {...settings}>
        {Data.map((event, index) => (
          <CarouselEvent
            key={event.title}
            title={event.title}
            description={event.description}
            imageUrl={event.imageUrl}
            publisher={event.publisher}
            date={event.date}
            className="bg-red-40"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
