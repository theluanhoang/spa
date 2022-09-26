import React from 'react'
import styles from './ContactForm.module.scss'
import classNames from 'classnames/bind'
import { BgrContact } from '../../../assets/img'
import InputTag from '../InputTag'

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
                            <InputTag label={'Họ và tên'} />
                            <InputTag label={'Địa chỉ'} />
                        </div>
                        <div className={cx('contactForm__table--row')}>
                            <InputTag label={'Email'}/>
                            <InputTag label={'Số điện thoại'}/>
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