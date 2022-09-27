import React from 'react'
import styles from './BlogItemPage.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { BiTime } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../../redux/actions';
import { modalState$ } from '../../../redux/selectors'
import ModalBlogItem from '../../../components/Modal/ModalBlogItem'


const cx = classNames.bind(styles)

function BlogItemPage({data}) {
  const dispatch = useDispatch();

  const openModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  const { isShow } = useSelector(modalState$);

  return (
    <div className={cx('blogItem')}>
      <Navbar />
      {
        isShow && <ModalBlogItem />
      }
      <div className={cx('blogItem__status')}>
        <div className={cx('blogItem__status--content')}>
          <Link to='/'>Trang chủ</Link>
          <MdOutlineKeyboardArrowRight />
          <p>{data.status}</p>
        </div>
      </div>
      <div className={cx('blogItem__main')}>
        <div className={cx('blogItem__center')}>
          <div className={cx('blogItem__center--blog')}>
            <div className={cx('blogItem__center--blogTag')}>
              Blog
            </div>
          </div>
          <h1 className={cx('blogItem__center--title')}>
            {data.topic}
          </h1>
          <p className={cx('time')}>
            <BiTime /> {data.time}
          </p>
          <div className={cx('blogItem__center--media')}>
            <img src={data.image} alt='' className={cx('blogItem__center--image')} />
          </div>
          <div className={cx('blogItem__center--content')}>
            <h2 className={cx('blogItem__content--title')}>{data.title[0]}</h2>
            <h4 className={cx('blogItem__content--titleV2')}>{data.titleV2[0]}</h4>
            <p>{data.content[0]}</p>
            <p>{data.content[1]}</p>
            <p>{data.content[2]}</p>
            <h4 className={cx('blogItem__center--titleV2')}>
              {data.titleV2[1]}
            </h4>
            <p>
              {data.content[3]}
            </p>
            <h2 className={cx('blogItem__content--title')}>
              {data.title[1]}
            </h2>
            <h4 className={cx('blogItem__content--titleV2')}>
              {data.titleV2[2]}
            </h4>
            <p>
              {data.content[4]}
            </p>
            <p>
              {data.content[5]}
            </p>
            <p>
              {data.content[6]}
            </p>
            <p>
              {data.content[7]}
            </p>
            <p>
              {data.content[8]}
            </p>
            <p>{data.content[9]}</p>
          </div>
          <div className={cx('blog__center--contact')}>
            <div className={cx('blog__contact--title')}>
              <h2 className={cx('blogItem__content--title', 'center')}>{data.status} tận gốc, không tái phát</h2>
            </div>
            <div className={cx('contact__button')} onClick={openModal}>
              <div className={cx('btnContact')} >Liên hệ ngay</div>
            </div>
          </div>
        </div>
        <div className={cx('blogItem__left')}></div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogItemPage