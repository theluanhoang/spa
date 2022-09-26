import React from 'react'
import styles from './InputTag.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function InputTag({label, width, borderColor}) {
    return (
        <div className={cx('field')} style={{ width: `${width}` }}>
            <input className={cx('input')} style={{ borderColor: `${borderColor}` }}/>
            <label for='name' className={cx('label')}>{label}</label>
        </div>)
}

export default InputTag