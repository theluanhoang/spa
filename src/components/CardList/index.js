import React from 'react'
import CardTag from './CardTag'
import classNames from 'classnames/bind'
import styles from './CardList.module.scss'
import { Item1, Item2, Item3 } from '../../assets/img'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles)

function CardList() {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={cx('cardList')} data-aos='fade-right' data-aos-duration='1000'>
            <CardTag
                image={Item1}
                title='Trị mụn chuyên sâu'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
            />
            <CardTag
                image={Item2}
                title='Chăm sóc da cao cấp luxury'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
            />
            <CardTag
                image={Item3}
                title='Gội đầu dưỡng sinh'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
            />
        </div>
    )
}

export default CardList