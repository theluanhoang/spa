import React from 'react'
import styles from './BlogItemPage.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { BiTime } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { showModal, turnOffBlog, turnOnBlog } from '../../../redux/actions';
import { blogSearchState$, modalState$, navbarResState$ } from '../../../redux/selectors'
import ModalBlogItem from '../../../components/Modal/ModalBlogItem'
import { Item1, Item2 } from '../../../assets/img'
import NavbarResponsive from '../../../components/Navbar/NavbarElement/NavbarResponsive'


const cx = classNames.bind(styles)

function BlogItemPage({ data }) {
  const dispatch = useDispatch();

  const openModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);
  const OpenBlog = React.useCallback(() => {
    dispatch(turnOnBlog());
  }, [dispatch]);
  const hideBlog = React.useCallback(() => {
    dispatch(turnOffBlog());
  }, [dispatch]);

  const { isShow } = useSelector(modalState$);

  const { turnNav } = useSelector(navbarResState$);

  const { turnBlog } = useSelector(blogSearchState$);

  return (
    <div className={cx('blogItem')}>
      <Navbar />
      {
        isShow && <ModalBlogItem />
      }
      {
        turnNav && <NavbarResponsive />
      }
      <div className={cx('blogItem__status')}>
        <div className={cx('blogItem__status--content')}>
          <Link to='/'>Trang chủ</Link>
          <MdOutlineKeyboardArrowRight />
          <p>{data.status}</p>
        </div>
        <BsThreeDotsVertical className={cx('blogItem__status--dot')} onClick={OpenBlog} />
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
        {/* BLOGITEM LEFT */}
        <div className={cx('blogItem__left', 'hide')}>
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
        </div>
        {
          turnBlog && (
            <>
              <div className={cx('blogItem__overlay')} onClick={hideBlog}></div>

              <div className={cx('blogItem__left')}>
                <h1 className={cx('blogItem__left--title')}>
                  TÌM KIẾM
                </h1>
                <FaTimes className={cx('close')} onClick={hideBlog} />
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
              </div>
            </>
          )
        }
      </div>
      <Footer />
    </div>
  )
}

export default BlogItemPage