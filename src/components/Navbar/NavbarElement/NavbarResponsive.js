import React from 'react';
import styles from '../Navbar.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FaTimes } from 'react-icons/fa';
import { Logo } from '../../../assets/img';
import { useDispatch } from 'react-redux';
import { turnOffNavbar } from '../../../redux/actions';

const cx = classNames.bind(styles);

function NavbarResponsive() {

    const [toggle, setToggle] = React.useState(false)

    const turn = () => {
        setToggle(!toggle)
    }

    const dispatch = useDispatch();

    const turnOffNav = React.useCallback(() => {
        dispatch(turnOffNavbar());
    }, [dispatch]);

    return (
        <ul className={cx('navbar__responsive--categories')}>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/'>
                    <img src={Logo} alt='logo' />
                </Link>
            </li>
            <div className={cx('navbar__responsive--line')}></div>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/'>
                    Trang chủ
                </Link>
            </li>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link to='' onClick={turn}>
                    Giới thiệu
                    <RiArrowDownSLine className={cx(toggle ? '' : 'arrow')}/>
                </Link>
                <ul className={cx('navbar__bottom--res', toggle ? 'on' : 'off')}>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link onClick={turnOffNav} to='/mySpa'>
                            Về chúng tôi
                        </Link>
                    </li>
                    <li className={cx('navbar__bottom--listItem')}>
                        <Link onClick={turnOffNav} to='/albums'>
                            Thư viện ảnh
                        </Link>
                    </li>
                </ul>
            </li>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/service'>
                    Dịch vụ
                </Link>
            </li>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/news'>
                    Tin tức
                </Link>
            </li>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/contact'>
                    Nhận xét
                </Link>
            </li>
            <li className={cx('navbar__responsive--categoriesItem')}>
                <Link onClick={turnOffNav} to='/contact'>
                    Liên hệ
                </Link>
            </li>
            <FaTimes className={cx('navbar__responsive--icon')} onClick={turnOffNav} />
            <div className={cx('navbar__responsive--overlay')} onClick={turnOffNav}></div>
        </ul>
    )
}

export default NavbarResponsive