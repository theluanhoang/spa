import { useState, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../../slider-data";
import styles from "./Slider.module.scss";
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { Logo } from '../../assets/img'

const cx = classNames.bind(styles);

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 8000;

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if (autoScroll) {
            auto();
        }
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
        <div className={cx("slider")}>
            <AiOutlineArrowLeft className={cx(["arrow", "prev"])} onClick={prevSlide} />
            <AiOutlineArrowRight className={cx(["arrow", "next"])} onClick={nextSlide} />
            {sliderData.map((slide, index) => {
                return (
                    <div
                        className={index === currentSlide ? cx(["slide", "current", "overlay"]) : cx("slide")}
                        key={index}
                    >
                        {index === currentSlide && (
                            <div className={cx("image__block")}>
                                <img src={slide.image} alt="slide" className={cx("image")} />
                                <div className={cx("content")}>
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                    <button className={cx(["btn"])} onClick={() => {
                                        console.log("hello")
                                    }}>Trải nghiệm ngay</button>
                                </div>
                                <div className={cx("overlay")}></div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Slider;