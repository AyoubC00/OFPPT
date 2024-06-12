import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

function AutoPlayAnnouncement() {
    const { pinned } = useSelector(state => state.announcements);
    console.log(pinned);
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="slider-container mx-auto">
            <Slider  {...settings}>
                {pinned.map(anounce => (<div key={anounce.id}>
                    <div className="px-3">
                        <div className="bg-white h-60 mx-2">
                            <h3>{anounce.title}</h3>
                        </div>
                    </div>
                </div>))}
            </Slider>

        </div>
    );
}
export default AutoPlayAnnouncement;