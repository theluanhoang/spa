import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function CardTag({ image, title, content, blogIcon, time, url, duration }) {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={cx('cardTag')} data-aos='fade-left' data-aos-duration={duration}>
            <div className={cx('cardTag__media')}>
                <img className={cx('cardTag__media--image')} src={image} alt='item1' />
                {
                    blogIcon && (
                        <div className={cx('blogTag')}>
                            Blog
                        </div>
                    )
                }
            </div>

            <h1 className={cx(['cardTag__title', 'paddingCard'])}>
                {title}
            </h1>
            {
                time && (
                    <p className={cx('time')}>
                        <BiTime /> {time}
                    </p>
                )
            }
            <p className={cx(['cardTag__content', 'paddingCard'])}>
                {content}
            </p>
            <div className={cx(['cardTag__btnSeeMore', 'paddingCard'])}>
                <Link to={url}>
                    Xem thêm <AiOutlineArrowRight />
                </Link>
            </div>
        </div>
    )
}

export default CardTag