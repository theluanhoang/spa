import React from "react";
import classNames from "classnames/bind"
import styles from "./ItemImg.module.scss"

const cx = classNames.bind(styles)
function ItemImg({src, index, setId, setToggle }) {

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