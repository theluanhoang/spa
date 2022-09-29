import React from 'react'
import classNames from 'classnames/bind'
import styles from '../../../components/Blog/BlogList/BlogList.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const cx = classNames.bind(styles)

function BlogItem() {
    return (
        <div className={cx('blogItem__left')}>
            <h1 className={cx('blogItem__left--title')}>
                TÌM KIẾM
            </h1>
            <div className={cx('blogItem__left--search')}>
                <input type='text' placeholder='Tìm kiếm...' />
                <AiOutlineSearch className={cx('blogItem__left--searchIcon')} />
            </div>
            <h1 className={cx('blogItem__left--title')}>
                THỂ LOẠI
            </h1>
            <ul className={cx('blogItem__left--categories')}>
                <li>Sắc đẹp</li>
                <li>Sức khỏe</li>
                <li>Trị liệu</li>
                <li>Thư giãn</li>
            </ul>
            <h1 className={cx('blogItem__left--title')}>
                BÀI ĐĂNG GẦN ĐÂY
            </h1>
            <ul className={cx('blogItem__left--posts')}>
                <li className={cx('blogItem__left--postsItem')}>
                    <div className={cx('blogItem__left--image')}>
                        <img src={Item1} alt='item1' />
                    </div>
                    <div className={cx('blogItem__left--content')}>
                        <p className={cx('time', 'left')}>
                            27/09/2022
                        </p>
                        <div className={cx('blogItem__left--desc')}>
                            <p>
                                Tuyết Beauty Spa" là một địa điểm spa thích hợp để bạn ghé qua. Với đội ngũ nhân viên, kỹ thuật viên chuyên nghiệp. Chúng tôi hứa hẹn sẽ mang đến cho bạn những phút giây thư giãn tuyệt vời nhất. Với không gian thoải mái, "Tuyết Beauty Spa" được nhiều khách hàng đánh giá là địa điểm spa đáng để trải nghiệm cho người dân Đà Nẵng và du khách quốc tế.
                            </p>
                        </div>
                    </div>
                </li>
                <li className={cx('blogItem__left--postsItem')}>
                    <div className={cx('blogItem__left--image')}>
                        <img src={Item2} alt='item1' />
                    </div>
                    <div className={cx('blogItem__left--content')}>
                        <p className={cx('time', 'left')}>
                            27/09/2022
                        </p>
                        <div className={cx('blogItem__left--desc')}>
                            <p>
                                Tuyết Beauty Spa" là một địa điểm spa thích hợp để bạn ghé qua. Với đội ngũ nhân viên, kỹ thuật viên chuyên nghiệp. Chúng tôi hứa hẹn sẽ mang đến cho bạn những phút giây thư giãn tuyệt vời nhất. Với không gian thoải mái, "Tuyết Beauty Spa" được nhiều khách hàng đánh giá là địa điểm spa đáng để trải nghiệm cho người dân Đà Nẵng và du khách quốc tế.
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>)
}

export default BlogItem