import React from "react";
import classNames from "classnames/bind"
import styles from "./ItemImg.module.scss"
// import { useDispatch } from 'react-redux';
// import { showSlideImage } from '../../redux/actions';

const cx = classNames.bind(styles)
function ItemImg({src, index, setId, setToggle }) {
  // const dispatch = useDispatch();

  // const showModal = React.useCallback(() => {
  //   dispatch(showSlideImage());
  // }, [dispatch]);

  return (
    <div className={cx("box-item")} onClick={() => {
      setId(index)
      setToggle(true)
    }}>
        <img src={src} alt="" />
    </div>
  )
}

export default ItemImg