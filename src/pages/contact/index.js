import React from "react";
import classNames from "classnames/bind";
import styles from "./Contact.module.scss";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import InputTag from '../../components/Form/InputTag'
import { useSelector } from 'react-redux';
import { navbarResState$ } from '../../redux/selectors';
import NavbarResponsive from "../../components/Navbar/NavbarElement/NavbarResponsive";
const cx = classNames.bind(styles);

function Contact() {
  const { turnNav } = useSelector(navbarResState$);

  return (
    <div>
      <Navbar />
      {
        turnNav && <NavbarResponsive />
      }
      <div className={cx("content")}>
        <div className={cx("inner")}>
          <h2 className={cx("title")}>Liên hệ</h2>
          <div className={cx("main")}>
            <div className={cx("info-me")}>
              <div className={cx("info-me__menu")}>
                <div className={cx("info-me--title")}>SPACECENTER</div>
                <div className={cx("info-me--info")}>
                  <div className={cx("info-me--address", '')}>
                    137 Hải Hồ, Hải Châu, Đà Nẵng
                  </div>
                  <div className={cx("info-me--phone")}>
                    +84 379 124 695
                  </div>
                  <div className={cx("info-me--time")}>09:00 - 22:30</div>
                  <div className={cx("info-me--email")}>
                    spacecenter@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("info-user")}>
              <div className={cx('info-user__btn')}>
                Thông tin liên hệ
              </div>
              <p>Quý khách có thể liên hệ với chúng tôi bằng cách điền thông tin vào mẫu trên. Chúng tôi sẽ liên hệ với quý khách trong thời gian sớm nhất hoặc gọi điện thoại để được tư vấn.</p>
              <form>
                <InputTag label={'Họ và tên'} width='100%' borderColor={'#ddd'} />
                <InputTag label={'Số điện thoại'} width='100%' borderColor={'#ddd'} />
                <div className={cx("form-area")}>
                  <textarea type="text" placeholder="Nội dung" />
                </div>
                <div>
                  <input type="submit" className={cx('info-user__btn')} value="Đăng ký" />
                </div>
              </form>
            </div>
          </div>
          <div className={cx('map')}>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.6663536081855!2d108.21461311498355!3d16.08279444334591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183f21d518c3%3A0x81f1f47a45bfe207!2zMTM3IEjhuqNpIEjhu5MsIFRodeG6rW4gUGjGsOG7m2MsIEjhuqNpIENow6J1LCDEkMOgIE7hurVuZyA1NTAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1663837612959!5m2!1svi!2s"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
