import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Background } from '../../assets/img';
import { Icon1 } from '../../assets/img';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles);

function Home() {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={cx('home__background')} data-aos='fade-up' data-aos-duration='2500'>
            <img className={cx('home__background--image')} src={Background} alt='background' />
            <div className={cx('home__content')}>
                <div className={cx('home__content--block')}>
                    <img className={cx('home__content--icon')} src={Icon1} alt='icon1' />
                </div>
                <h1 className={(cx('home__content--title'))}>
                    Tận hưởng sự khác biệt
                </h1>
                <p className={(cx('home__content--desc'))}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Aster ipsum dolor Tur adipiscing elit, sed do eiusmod.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Aster ipsum dolor Tur adipiscing elit, sed do eiusmod.
                </p>
            </div>
        </div>
    )
}

export default Home