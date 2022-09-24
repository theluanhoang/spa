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
                <ul className={cx('navbar__bottom--list')}>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link to='/mySpa'>
                            Về chúng tôi
                        </Link>
                    </li>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link to='/albums'>
                            Thư viện ảnh
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={cx('navbar__bottom--categoriesItem')}>
                <Link to='/service'>
                    Dịch vụ
                    <RiArrowDownSLine />
                </Link>
                <ul className={cx('navbar__bottom--list')}>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link to=''>
                            Điều trị mụn
                        </Link>
                    </li>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link to='/albums'>
                            Điều trị lỗ chân lông
                        </Link>
                    </li>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link to=''>
                            Điều trị sẹo rổ
                        </Link>
                    </li>
                </ul>
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
