import React from 'react'
import styles from './BlogPage.module.scss'
import classNames from 'classnames/bind'
import { NewsBanner } from '../../assets/img'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BlogList from '../../components/Blog/BlogList'
import NavbarResponsive from '../../components/Navbar/NavbarElement/NavbarResponsive'
import { useSelector } from 'react-redux';
import { navbarResState$ } from '../../redux/selectors';
const cx = classNames.bind(styles)

function Blog() {
    const { turnNav } = useSelector(navbarResState$);

    return (
        <div className={cx('blog')}>
            <Navbar />
            {
                turnNav && <NavbarResponsive />
            }
            <div className={cx('blog__banner')}>
                <img src={NewsBanner} alt='blogBanner' />
                <div className={cx('blog__overlay')}></div>
                <div className={cx('blog__title')}>
                    <h1>Blog</h1>
                </div>
            </div>
            <div className={cx('blog__list')}>
                <BlogList />
                <div className={cx('blog__btn')}>
                    <div className={cx('btnSubmit')}>Tải thêm</div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Blog