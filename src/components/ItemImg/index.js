import React from "react";
import classNames from "classnames/bind"
import styles from "./ItemImg.module.scss"
import { useDispatch } from 'react-redux';
import { showSlideImage } from '../../redux/actions';

const cx = classNames.bind(styles)
function ItemImg({src }) {
  const dispatch = useDispatch();

  const showModal = React.useCallback(() => {
    dispatch(showSlideImage());
  }, [dispatch]);

  return (
    <div className={cx("box-item")} onClick={showModal}>
        <img src={src} alt="" />
    </div>
  )
}

export default ItemImg