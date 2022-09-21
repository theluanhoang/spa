import React from 'react'
import classNames from 'classnames/bind';
import styles from './SlideShow.module.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Banner, Banner1, Banner2 } from '../../assets/img';

const slideImages = [
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
];

const cx = classNames.bind(styles);

function SlideShow() {
  return (
    <div className="slide-container">
      <Slide duration={1500} transitionDuration={800}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div className={cx("image-container")}>
              <img src={slideImage.url} alt={slideImage.caption} />
              <div className={cx("overlay")}></div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default SlideShow