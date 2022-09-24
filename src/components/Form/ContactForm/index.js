import React from 'react'
import styles from './ContactForm.module.scss'
import classNames from 'classnames/bind'
import { BgrContact } from '../../../assets/img'

const cx = classNames.bind(styles)

function ContactForm() {
    return (
        <div className={cx('contactForm')}>
            <img src={BgrContact} alt='background' className={cx('contactForm__image')} />
            <div className={cx('contactForm__overlay')}></div>
            <div className={cx('contactForm__form')}>
                <h1 className={cx('contactForm__form--title')}>
                    Contact form
                </h1>
                <form className={cx('contactForm__form--form')}>
                    <div className={cx('contactForm__table')}>
                        <div className={cx('contactForm__table--row')}>
                            <div className={cx('contactForm__table--field')}>
                                <input className={cx('contactForm__table--input')} />
                                <label for='name' className={cx('contactForm__table--label')}>Họ và tên</label>
                            </div>
                            <div className={cx('contactForm__table--field')}>
                                <input className={cx('contactForm__table--input')} />
                                <label for='address' className={cx('contactForm__table--label')}>Địa chỉ</label>
                            </div>
                        </div>
                        <div className={cx('contactForm__table--row')}>
                            <div className={cx('contactForm__table--field')}>
                                <input className={cx('contactForm__table--input')} />
                                <label for='email' className={cx('contactForm__table--label')}>Email</label>
                            </div>
                            <div className={cx('contactForm__table--field')}>
                                <input className={cx('contactForm__table--input')} />
                                <label for='phoneNumber' className={cx('contactForm__table--label')}>Số điện thoại</label>
                            </div>
                        </div>
                        <div className={cx('contactForm__table--row')}>
                            <textarea
                                rows={6}
                                className={cx('contactForm__table--review')
                                }
                                placeholder='Nhập nhận xét của bạn...'
                                ></textarea>
                        </div>
                        <div className={cx('contactForm__table--btn')}>
                            <div className={cx('btnSubmit')}>Gửi đi</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm