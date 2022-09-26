import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Banner, Banner1, Banner2, Banner3, Banner4 } from '../../assets/img';

const fadeImages = [
    {
        url: Banner,
        caption: 'First Slide'
    },
    {
        url: Banner1,
        caption: 'Second Slide'
    },
    {
        url: Banner2,
        caption: 'Third Slide'
    },
    {
        url: Banner3,
        caption: 'Second Slide'
    },
    {
        url: Banner4,
        caption: 'Third Slide'
    },
];

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade>
                {fadeImages.map((fadeImage, index) => (
                    <div className="each-fade" key={index}>
                        <div className="image-container">
                            <img src={fadeImage.url} alt={fadeImage.caption} />
                        </div>
                        <h2>{fadeImage.caption}</h2>
                    </div>
                ))}
            </Fade>
        </div>
    )
}