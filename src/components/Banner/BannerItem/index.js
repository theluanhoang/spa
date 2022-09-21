import React from 'react'
import classNames from 'classnames/bind'
import styles from './BannerItem.module.scss'

const cx = classNames.bind(styles)

function BannerItem({ banner, icon, content }) {
  return (
    <div className={cx('bannerItem')}>
      <div className={cx('bannerItem__media')}>
        <img className={cx('bannerItem__media--image')} src={banner} alt='banner' />
        <div className={cx('bannerItem__desc')}>
          <img className={cx('bannerItem__desc--icon')} src={icon} alt='icon' />
          <h3 className={cx('bannerItem__desc--title')}>
            {content}
          </h3>
        </div>
        <div className={cx('bannerItem__media--overlay')}></div>
      </div>
    </div>
  )
}

export default BannerItem