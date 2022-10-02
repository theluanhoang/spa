import React from "react";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import NavbarResponsive from "../../components/Navbar/NavbarElement/NavbarResponsive";
import { useSelector } from 'react-redux';
import { navbarResState$ } from '../../redux/selectors';
const cx = classNames.bind(styles);

function MenuPage() {
  const { turnNav } = useSelector(navbarResState$);
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      {
        turnNav && <NavbarResponsive />
      }
      <div className={cx("content")}>
        <div className={cx("content__inner")}>
          <h2 className={cx("menu__title")}>MENU</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div>
              <div className={cx("menu__box")}>
                <h4>Các dịch vụ cơ bản</h4>
                <ul>
                  <li className={cx("menu-cate")}>
                    <span>VND</span>
                    <span>USD</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Chăm sóc da cơ bản</span>
                    <span>-</span>
                    <span>100.000</span>
                    <span>5$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Chăm sóc da chuyên sâu</span>
                    <span>-</span>
                    <span>200.000</span>
                    <span>9$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Chăm sóc da cao cấp luxury</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>14$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Trị mụn nhỏ</span>
                    <span>-</span>
                    <span>200.000</span>
                    <span>9$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điều trị mụn chuyên sâu</span>
                    <span>-</span>
                    <span>250.000</span>
                    <span>12$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Thải chì độc tố</span>
                    <span>-</span>
                    <span>150.000</span>
                    <span>7$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điện di Vitamin C trắng sáng</span>
                    <span>-</span>
                    <span>200.000</span>
                    <span>9$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Cấy tảo soắn săn chắc da</span>
                    <span>-</span>
                    <span>250.000</span>
                    <span>11$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Cấy trắng tổ yến kim cương</span>
                    <span>-</span>
                    <span>400.000</span>
                    <span>17$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điều trị nám</span>
                    <span>-</span>
                    <span className={cx('course')}>Theo liệu trình</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điều trị rỗ</span>
                    <span>-</span>
                    <span className={cx('course')}>Theo liệu trình</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Cấy hồng sâm căng bóng</span>
                    <span>-</span>
                    <span>250.000</span>
                    <span>11$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Ủ huyết yến trắng hồng</span>
                    <span>-</span>
                    <span>250.000</span>
                    <span>11$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Collagen đàn hồi</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>13$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>H.A cung cấp độ ẩm</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>13$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Cấy căng bóng DNA cá hồi</span>
                    <span>-</span>
                    <span>600.000</span>
                    <span>26$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Thay da sinh học vi tảo Nano</span>
                    <span>-</span>
                    <span>700.000</span>
                    <span>30$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điều trị phi kim sẹo rỗ 4.0</span>
                    <span>-</span>
                    <span className={cx('course')}>Theo liệu trình</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Cấy trắng căng bóng baby skin</span>
                    <span>-</span>
                    <span>450.000</span>
                    <span>17$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Liệu trình giảm béo bụng</span>
                    <span>-</span>
                    <span>
                      4.200.000
                      <br />
                      /12 buổi
                    </span>
                    <span>180$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Điều trị lỗ chân lông to</span>
                    <span>-</span>
                    <span className={cx('course')}>Theo liệu trình</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Gội đầu dưỡng sinh</span>
                    <span>-</span>
                    <span>49.000</span>
                    <span>3$</span>
                  </li>
                </ul>
              </div>
              <div className={cx("menu__box")}>
                <h4>Body</h4>
                <ul>
                  <li className={cx("menu-cate")}>
                    <span>VND</span>
                    <span>USD</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Tắm trắng phi thuyền Nano</span>
                    <span>-</span>
                    <span>600.000</span>
                    <span>26$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Tẩy tế bào chết + Tắm dưỡng body</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>13$</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className={cx("menu__box")}>
                <h4>Triệt lông</h4>
                <ul>
                  <li className={cx("menu-cate")}>
                    <span>Buổi lẻ</span>
                    <span style={{ padding: "0" }}>Liệu trình</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Nách mép</span>
                    <span>-</span>
                    <span>50.000</span>
                    <span>350.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Mép</span>
                    <span>-</span>
                    <span>30.000</span>
                    <span>300.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Mặt (2 má)</span>
                    <span>-</span>
                    <span>80.000</span>
                    <span>700.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full mặt</span>
                    <span>-</span>
                    <span>150.000</span>
                    <span>1.100.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>1/2 tay</span>
                    <span>-</span>
                    <span>150.000</span>
                    <span>1.100.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full tay</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>1.500.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>1/2 chân</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>1.500.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full chân</span>
                    <span>-</span>
                    <span>500.000</span>
                    <span>1.800.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Bụng dưới</span>
                    <span>-</span>
                    <span>150.000</span>
                    <span>1.100.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full Bụng</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>1.500.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>1/2 lưng</span>
                    <span>-</span>
                    <span>400.000</span>
                    <span>1.600.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full lưng</span>
                    <span>-</span>
                    <span>600.000</span>
                    <span>2.000.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Bikini viên</span>
                    <span>-</span>
                    <span>150.000</span>
                    <span>1.100.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Bikini tạo hình</span>
                    <span>-</span>
                    <span>300.000</span>
                    <span>1.500.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Full bikini</span>
                    <span>-</span>
                    <span>400.000</span>
                    <span>1.600.000</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Toàn thân</span>
                    <span>-</span>
                    <span>2.500.000</span>
                    <span>8.000.000</span>
                  </li>
                </ul>
              </div>
              <div className={cx("menu__box")}>
                <h4>Các dịch vụ nâng cao</h4>
                <ul>
                  <li className={cx("menu-cate")}>
                    <span>VND</span>
                    <span>USD</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Tiêm Filler 1cc cho tất cả các vùng</span>
                    <span>-</span>
                    <span>2.500.000</span>
                    <span>106$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Căng chỉ nâng cơ & cấy chỉ collagen full face</span>
                    <span>-</span>
                    <span>25.000.000</span>
                    <span>1055$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Căng chỉ nâng cơ & cấy chỉ collagen 1 vùng</span>
                    <span>-</span>
                    <span>8.000.000</span>
                    <span>290$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Xóa nhăn bằng Botox 1 vùng</span>
                    <span>-</span>
                    <span>4.000.000</span>
                    <span>170$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Xóa nhăn bằng Botox 1 vùng</span>
                    <span>-</span>
                    <span>5.000.000</span>
                    <span>212$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Tiêm tan mỡ bụng 1 liệu trình (5 lần tiêm)</span>
                    <span>-</span>
                    <span>15.000.000</span>
                    <span>635$</span>
                  </li>
                  <li className={cx("menu-list")}>
                    <span>Tiêm thon cơ tay lực sĩ</span>
                    <span>-</span>
                    <span>10.000.000</span>
                    <span>410$</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MenuPage;
