import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from '~/i18n';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import useStyles from './slider-style';

function SwiperSlider(props) {
    const classes = useStyles();
    const { place, setPlace, places } = props;
    const [currentPlace, setCurrentPlace] = useState(0);
    const swiperRef = React.createRef();

    const breakpoints = {
        480: { slidesPerView: 1 }, // Small screen
        768: { slidesPerView: 2 }, // Medium screen
    };

    const getSlidesPerView = () => {
        const screenWidth = window.innerWidth;
        for (const breakpoint in breakpoints) {
            if (screenWidth >= breakpoint) {
                return breakpoints[breakpoint].slidesPerView;
            }
        }
        return 3; // Default for larger screens
    };


    useEffect(() => {
        setPlace(places[currentPlace]);
    }, [currentPlace, setPlace]);

    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <div className={classes.swiperContainer}>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2000 }}
                className="mySwiper"
                spaceBetween={15}
                slidesPerView={3}
                breakpoints={{
                    0: {
                        width: 0,
                        slidesPerView: 1,
                    },
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 2,
                    },
                    920: {
                        width: 992,
                        slidesPerView: 3,
                    },
                }}
                onSlideChange={(swiper) => {
                    setCurrentPlace(swiper.realIndex);
                    setPlace(places[swiper.realIndex]);
                }}
            >
                {places.map((place) => (
                    <SwiperSlide key={place.id}>
                        <div>
                            <img
                                src={place.image}
                                alt={place.name}
                                className={classes.slideImage}
                            />

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={classes.customNavigation}>
                <div className={`swiper-button-prev ${classes.navigationButton}`} onClick={goPrev}>
                    &lt;
                </div>
                <div className={`swiper-button-next ${classes.navigationButton}`} onClick={goNext}>
                    &gt;
                </div>
            </div>
        </div>
    );
}

SwiperSlider.propTypes = {
    place: PropTypes.object,
    setPlace: PropTypes.func.isRequired,
};

export default withTranslation(['profile-landing'])(SwiperSlider);