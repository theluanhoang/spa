import React from 'react'
import classNames from 'classnames/bind'
import styles from './ModalBlogItem.module.scss'
import { Logo } from '../../../assets/img'
import InputTag from '../../../components/Form/InputTag'
import { useDispatch } from 'react-redux';
import { hideModal } from '../../../redux/actions';

const cx = classNames.bind(styles)

function ModalBlogItem() {
  const dispatch = useDispatch();

  const hide__Modal = React.useCallback(() => {
    dispatch(hideModal());
  }, [dispatch]);
  return (
    <div className={cx('modalBlogItem')}>
      <div className={cx('overlay')} onClick={hide__Modal}></div>
      <div className={cx('modalBlogItem__container')}>
        <div className={cx('modalBlogItem__container--image')}>
          <img src={Logo} alt='logo' />
        </div>
        <div className={cx('modalBlogItem__container--title')}>
          <h1>Tư vấn</h1>
        </div>
        <InputTag label={'Họ và tên'} className={cx('modalBlogItem__container--input')} width={`80%`}/>
        <InputTag label={'Số điện thoại'} className={cx('modalBlogItem__container--input')} width={`80%`}/>
        <div className={cx('btn')}>
          <div className={cx('btnSubmit')}>Gửi đi</div>
        </div>
      </div>
    </div>
  )
}

export default ModalBlogItem