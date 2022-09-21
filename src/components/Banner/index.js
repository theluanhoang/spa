import React from 'react'
import classNames from 'classnames/bind'
import styles from './Banner.module.scss'
import BannerItem from './BannerItem'
import { Banner, Banner1, Banner2, Icon2, Icon3, Icon4 } from '../../assets/img'

const cx = classNames.bind(styles)

function BannerList() {
  return (
    <div className={cx('banner')}>
        <BannerItem banner={Banner1} icon={Icon2} content='Nhân viên nhiệt tình, chu đáo'/>
        <BannerItem banner={Banner2} icon={Icon3} content='Trang thiết bị hiện đại'/>
        <BannerItem banner={Banner} icon={Icon4} content='Trình độ chuyên môn cao'/>
    </div>
  )
}

export default BannerList