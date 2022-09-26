import React from 'react'
import classNames from 'classnames/bind'
import styles from './ModalBlogItem.module.scss'
import { Logo } from '../../../assets/img'
import InputTag from '../../../components/Form/InputTag'

const cx = classNames.bind(styles)

function ModalBlogItem() {
  return (
    <div className={cx('modalBlogItem')}>
        <div className={cx('modalBlogItem__container')}>
            <div className={cx('modalBlogItem__container--image')}>
                <img src={Logo} alt='logo'/>
            </div>
            <div className={cx('modalBlogItem__container--title')}>
                <h1>Tư vấn</h1>
            </div>
            <InputTag label={'Họ và tên'} />
            <InputTag label={'Số điện thoại'} />
        </div>
    </div>
  )
}

export default ModalBlogItem