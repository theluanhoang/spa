import React from 'react';
import classNames from 'classnames/bind';
import styles from '../Navbar.module.scss';
import { Link } from 'react-router-dom';
// Icon Website
import { ImFacebook2 } from 'react-icons/im';
import { BsYoutube, BsTwitter, BsFillTelephoneFill, BsSearch } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import { AiTwotoneMail, AiFillInstagram } from 'react-icons/ai';

const cx = classNames.bind(styles)

function NavbarTop() {
    
    return (
        <div className={cx('navbar__top')}>
            <ul className={cx('navbar__top--contact')}>
                <li className={cx('navbar__top--contactItem')} >
                    <BsFillTelephoneFill className={cx('navbar__top--contactIcon')} style={{ width: '24px', height: '24px' }} /> (+84) 905 166 941
                </li> 
                <li className={cx('navbar__top--contactItem')} >
                    <AiTwotoneMail className={cx('navbar__top--contactIcon')} style={{ width: '24px', height: '24px' }} /> tuyetbeautyspa@gmail.com
                </li>
            </ul>
            <div className={cx('navbar__top--search')}>
                <input type='text' placeholder='Nhập từ khóa ...' className={cx('navbar__top--searchInput')} />
                <div className={cx('navbar__top--searchBtn')}>
                    <BsSearch className={cx('navbar__top--searchIcon')} style={{ width: '24px', height: '24px' }} />
                </div>
            </div>
            <ul className={cx('navbar__top--media')}>
                <li className={cx('navbar__top--mediaItem')}>
                    <ImFacebook2 className={cx('navbar__top--mediaIcon')}style={{ width: '24px', height: '24px' }}  />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <AiFillInstagram className={cx('navbar__top--mediaIcon')}style={{ width: '24px', height: '24px' }}  />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <BsTwitter className={cx('navbar__top--mediaIcon')}style={{ width: '24px', height: '24px' }}  />
                </li>
                <li className={cx('navbar__top--mediaItem')}>
                    <BsYoutube className={cx('navbar__top--mediaIcon')}style={{ width: '24px', height: '24px' }}  />
                </li>
            </ul>
        </div>
    )
}

export default NavbarTop