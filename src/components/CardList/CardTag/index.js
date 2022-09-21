import React from 'react';
import classNames from 'classnames/bind';
import styles from './Card.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai';

const cx = classNames.bind(styles);

function CardTag({ image, title, content }) {
    return (
        <div className={cx('cardTag')}>
            <div className={cx('cardTag__media')}>
                <img className={cx('cardTag__media--image')} src={image} alt='item1' />
            </div>
            <h1 className={cx(['cardTag__title', 'paddingCard'])}>
                {title}
            </h1>
            <p className={cx(['cardTag__content', 'paddingCard'])}>
                {content}
            </p>
            <div className={cx(['cardTag__btnSeeMore', 'paddingCard'])}>
                Xem thêm <AiOutlineArrowRight />
            </div>
        </div>
    )
}

export default CardTag