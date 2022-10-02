import classNames from "classnames/bind";
import { Item18 } from "../../assets/img";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./ReviewPage.module.scss";

const cx = classNames.bind(styles);

function ReviewPage() {
  return (
    <div className={cx("wrapper")}>
      <Navbar />
      <div className={cx("content")}>
        <div className={cx("img-bg")}>
          {/* <img src={Item18} alt=""/> */}
          <div className={cx("concac")}>
            <h1 className={cx("title")}>Nhận xét</h1>
          </div>
        </div>
        <div className={cx("box")}>
          <div className={cx("inner")}>
            <div className={cx("box-list")}>
              <div className={cx("box-item")}>
                <h4>Nguyễn Yến Ly</h4>
                <p>
                  “Chúng tôi yêu thời gian của chúng tôi ở đây tại spa tuyệt vời của bạn. Một nơi đặc biệt với sự chú ý đặc biệt đến từng chi tiết.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2021</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Phạm Ngọc Như</h4>
                <p>
                  “Cảm ơn bạn! Chúng tôi đã có một khoảng thời gian tuyệt vời tại spa của bạn. Bạn thật đáng quý.”
                </p>
                <p className={cx("box-item__date")}>27 / 10 / 2021</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Nguyễn Vân Anh</h4>
                <p>
                  “Tôi đã cảm thấy được chào đón và đặc biệt vì những nụ cười chào đón và lòng tốt. Chúng tôi sẽ sớm quay lại.”
                </p>
                <p className={cx("box-item__date")}>14 / 1 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Lê Quỳnh Châu</h4>
                <p>
                  “Dịch vụ hoàn hảo và nhân viên là những người tốt nhất mà chúng tôi từng gặp.”
                </p>
                <p className={cx("box-item__date")}>19 / 2 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Nguyễn Lan Anh</h4>
                <p>
                  “Liệu pháp mát-xa TỐT NHẤT mà tôi từng có, tôi có thể sẽ trở lại nhiều lần.”
                </p>
                <p className={cx("box-item__date")}>21 / 4 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Đỗ Mai Sương</h4>
                <p>
                  “Cơ sở vật chất hiện đại, mát-xa rất mạnh mẽ và thú vị! Tôi sẽ giới thiệu cho nhiều người!”
                </p>
                <p className={cx("box-item__date")}>29 / 5 / 2022</p>
              </div>
            </div>
            <div className={cx("message")}>
              <h3>
              “Dịch vụ tuyệt vời và họ có mọi thứ tôi cần. Thật là một doanh nghiệp thuộc sở hữu của một gia đình tuyệt vời! Tôi sẽ đến đây vì tất cả các nhu cầu về làm đẹp của tôi.”
              </h3>
            </div>
            <div className={cx("team-member")}>
              <h5>Chuck Lorry</h5>
              <p>IT Manager, WhatsApp</p>
            </div>
            <div className={cx("box-list", "box-list__bottom")}>
              <div className={cx("box-item")}>
                <h4>Lê Hồng Anh</h4>
                <p>
                  “Mọi thứ đều rất tốt, dịch vụ tuyệt vời, khuôn mặt của tôi rạng rỡ và tôi cảm thấy tốt hơn rất nhiều.”
                </p>
                <p className={cx("box-item__date")}>24 / 6 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Nguyễn Diệu My</h4>
                <p>
                  “Chắc chắn là trải nghiệm spa tốt nhất của tôi cho đến nay và tôi chắc chắn sẽ cố gắng trở lại sớm.”
                </p>
                <p className={cx("box-item__date")}>13 / 7 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Lê Phương Linh</h4>
                <p>
                  “Trải nghiệm tuyệt vời. Mỗi lần mát-xa tôi nhận được ở đây đều tuyệt vời. Tôi cảm thấy thư thái hơn kể từ khi bước vào môi trường này.”
                </p>
                <p className={cx("box-item__date")}>15 / 7 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Trần Thanh Bình</h4>
                <p>
                  “Nơi tuyệt vời. Dịch vụ khách hàng và cơ sở vật chất quá tốt. Một cách tuyệt vời để dành một giờ trong ngày của tôi.”
                </p>
                <p className={cx("box-item__date")}>19 / 8 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Nguyễn Mỹ Linh</h4>
                <p>
                  “Giá cả phải chăng, nhân viên chuyên nghiệp, spa rất tốt.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2022</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Lê Diệu Linh</h4>
                <p>
                  “Mọi thứ đều hoàn hảo. Sẽ sớm quay lại sau !”
                </p>
                <p className={cx("box-item__date")}>27 / 8 / 2022</p>
              </div>
            </div>
            <div className={cx("invitation")}>
              <h2>Chào mừng bạn đến với Tuyết beauty spa</h2>
              <h2>Đặt phòng của bạn ngay hôm nay.</h2>
              <div className={cx("invitation__book")}>ĐẶT LỊCH HẸN</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewPage;
