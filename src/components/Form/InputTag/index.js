import React from 'react'
import styles from './InputTag.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function InputTag({label}) {
    return (
        <div className={cx('field')}>
            <input className={cx('input')} />
            <label for='name' className={cx('label')}>{label}</label>
        </div>)
}

export default InputTag