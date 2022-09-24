import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { AiFillInstagram } from "react-icons/ai";
import {
  BsYoutube,
  BsTwitter
} from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("footer")}>
        <div className={cx("footer__item")}>
          <div className={cx("footer__item--title")}>SPACECENTER</div>
          <div className={cx("footer__item--info")}>
            <div className={cx("footer__item--address")}>
              137 Hải Hồ, Hải Châu, Đà Nẵng
            </div>
            <div className={cx("footer__item--phone")}>+84 236 363 8888</div>
            <div className={cx("footer__item--time")}>09:00 - 22:30</div>
            <div className={cx("footer__item--email")}>
              spacecenter@gmail.com
            </div>
          </div>
        </div>
        <div className={cx("footer__item")}>
          <div className={cx("footer__item--title")}>LIÊN KẾT</div>
          <div className={cx("footer__item--content")}>
            Bạn muốn tham gia cùng chúng tôi trên <br/> mạng xã hội
          </div>
          <div className={cx("footer__item--social")}>
            <span>
              <ImFacebook2 />
            </span>
            <span>
              <AiFillInstagram />
            </span>
            <span>
              <BsTwitter />
            </span>
            <span>
              <BsYoutube />
            </span>
          </div>
        </div>
        <div className={cx("footer__item")}>
          <div className={cx("footer__item--title")}>Bản đồ</div>
          <div className={cx("footer__item--map")}>
            <iframe 
                title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6663536081855!2d108.21461311498355!3d16.08279444334591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f21d518c3%3A0x81f1f47a45bfe207!2zMTM3IEjhuqNpIEjhu5MsIFRodeG6rW4gUGjGsOG7m2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663837612959!5m2!1svi!2s"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
