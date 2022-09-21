import React from 'react';
import classNames from 'classnames/bind';
import styles from './Navbar.module.scss';
import { useScroll } from '../../hooks/useScroll'

// IMAGE Website
import { NavbarTop, NavbarBottom } from './NavbarElement';


const cx = classNames.bind(styles)

function Navbar() {

    const { x, y, scrollDirection } = useScroll();

    const style = {
        active: {
            visibility: "visible",
            transition: "all 0.5s"
        },
        hidden: {
            visibility: "hidden",
            transition: "all 0.5s",
            transform: "translateY(-100%)"
        }
    }

    return (
        <div className={cx('navbar')} style={scrollDirection === "down" ? style.active: style.hidden}>
            <NavbarTop />
            <NavbarBottom />
        </div>
    )
}

export default Navbar