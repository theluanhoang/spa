import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/img';
import NavbarCategories from '../NavbarCategories';

const cx = classNames.bind(styles)

function NavbarBottom() {
    return (
        <div className={cx('navbar__bottom')}>
            <div className={cx('navbar__bottom--logo')}>
                <Link to='/'>
                    <img src={Logo} alt='logo' />
                </Link>
            </div>
            <NavbarCategories />
            <div className={cx('navbar__bottom--btnBooking')}>
                Đặt lịch ngay
            </div>
        </div>
    )
}

export default NavbarBottom