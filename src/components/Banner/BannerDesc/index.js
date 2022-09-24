import React from 'react'
import classNames from 'classnames/bind'
import styles from './BannerDesc.module.scss'
const cx = classNames.bind(styles)

function BannerDesc({ background, icon, title, content, address, animation }) {

    return (
        <div className={cx('banner__background')}>
            <img className={cx('banner__background--image')} src={background} alt='background' />
            <div className={cx('banner__content')} >
                <div className={cx('banner__content--block')}>
                    <img className={cx('banner__content--icon')} src={icon} alt='icon' />
                </div>
                <div className={cx('banner__content--line')}></div>
                <h1 className={(cx('banner__content--title'))}>
                    {title}
                </h1>
                <p className={(cx('banner__content--desc'))}>
                    {content}
                </p>
                {
                    address && (
                        <div className={cx('banner__address')}>
                            <div className={cx('banner__address--content')}>
                                <h3 className={cx('banner__address--province')}>
                                    Thành phố Đà Nẵng
                                </h3>
                                <p className={cx('banner__address--district')}>
                                    137 Hải Hồ - Hải Châu
                                </p>
                                <span className={cx('banner__address--contact')}>
                                    Email: <p className={cx('banner__address--district')}>spacecenter@gmail.com</p>
                                </span>
                                <span className={cx('banner__address--contact')}>
                                    Số điện thoại: <p className={cx('banner__address--district')}>(+84) 379 124 695</p>
                                </span>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </div>)
}

export default BannerDesc