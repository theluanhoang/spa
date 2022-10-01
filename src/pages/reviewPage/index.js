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
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
            </div>
            <div className={cx("message")}>
              <h3>
              “Great service and they had everything I needed. What a great family owned business! I will be coming here for all my pool needs.”
              </h3>
            </div>
            <div className={cx("team-member")}>
              <h5>Chuck Lorry</h5>
              <p>IT Manager, WhatsApp</p>
            </div>
            <div className={cx("box-list", "box-list__bottom")}>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
              <div className={cx("box-item")}>
                <h4>Harry Truman</h4>
                <p>
                  “We have enjoyed our stay here very well, after 1 week family
                  travelling. We will definitely visit again.”
                </p>
                <p className={cx("box-item__date")}>25 / 8 / 2019</p>
              </div>
            </div>
            <div className={cx("invitation")}>
              <h2>Welcome to Rela</h2>
              <h2>Book Your Stay Today.</h2>
              <div className={cx("invitation__book")}>BOOK AN APPOINTMENT</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReviewPage;
