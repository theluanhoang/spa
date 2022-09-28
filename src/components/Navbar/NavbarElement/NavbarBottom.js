import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Logo } from '../../../assets/img';
import NavbarCategories from '../NavbarCategories';
import { FaBars } from 'react-icons/fa';
import { BsSearch } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { turnOnNavbar } from '../../../redux/actions'

const cx = classNames.bind(styles)

function NavbarBottom() {
    const dispatch = useDispatch();
    const turnOnNav = React.useCallback(() => {
        dispatch(turnOnNavbar())
    }, [dispatch]);
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
            <div className={cx('navbar__bottom--search')}>
                <input type='text' placeholder='Nhập từ khóa ...' className={cx('navbar__bottom--searchInput')} />
                <div className={cx('navbar__bottom--searchBtn')}>
                    <BsSearch className={cx('navbar__bottom--searchIcon')} style={{ width: '24px', height: '24px' }} />
                </div>
            </div>
            <FaBars className={cx('navbar__bottom--icon')} onClick={turnOnNav}/>
        </div>
    )
}

export default NavbarBottom