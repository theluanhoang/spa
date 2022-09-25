import classNames from "classnames/bind"
import styles from "./ItemImg.module.scss"

const cx = classNames.bind(styles)
function ItemImg({src}) {
  return (
    <div className={cx("box-item")}>
        <img src={src} alt="" />
    </div>
  )
}

export default ItemImg