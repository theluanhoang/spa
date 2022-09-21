import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss'
import { Logo } from '../../../assets/img';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri'

const cx = classNames.bind(styles);
function NavbarCategories() {
    return (
        <ul className={cx('navbar__bottom--categories')}>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/'>
                    Trang chủ
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/introduce'>
                    Giới thiệu
                    <RiArrowDownSLine />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/service'>
                    Dịch vụ
                    <RiArrowDownSLine />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/news'>
                    Tin tức
                    <RiArrowDownSLine />
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/contact'>
                    Nhận xét
                </Link>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/contact'>
                    Liên hệ
                </Link>
            </li>
        </ul>
    )
}

export default NavbarCategories
