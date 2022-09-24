import React from 'react'
import styles from './MySpa.module.scss'
import classNames from 'classnames/bind'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import BannerDesc from '../../components/Banner/BannerDesc'
import { Background, Background1, Banner, Banner1, Banner4, Icon5, Item1 } from '../../assets/img'
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classNames.bind(styles)

function MySpa() {

    React.useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className={cx('mySpa')}>
            <Navbar />
            <div className={cx('mySpa__content')}>
                <BannerDesc
                    background={Background}
                    icon={Icon5}
                    title='Về chúng tôi'
                    content='
                   "Tuyết Beauty Spa" là một địa điểm spa thích hợp để bạn ghé qua. Với đội ngũ nhân viên, kỹ thuật viên chuyên nghiệp. Chúng tôi hứa hẹn sẽ mang đến cho bạn những phút giây thư giãn tuyệt vời nhất. Với không gian thoải mái, "Tuyết Beauty Spa" được nhiều khách hàng đánh giá là địa điểm spa đáng để trải nghiệm cho người dân Đà Nẵng và du khách quốc tế. 
                '
                    address={true}
                />
                <div className={cx('mySpa__content--service')}>
                    <img src={Banner1} alt='banner' className={cx('mySpa__content--image')} />
                    <div className={cx('mySpa__content--desc')} data-aos='fade-left' data-aos-duration='1500'>
                        <p className={cx('mySpa__content--title')}>
                            "TUYẾT BEAUTY SPA" - SẮC ĐẸP LÀ VĨNH CỬU
                        </p>
                        <p className={cx(['mySpa__content--in4', 'marginBottom'])}>
                            Trải nghiệm không gian Spa đích thực tại thành phố Đà Nẵng.
                        </p>
                        <p className={cx(['mySpa__content--in4', 'marginBottom'])}>
                            Dịch vụ độc đáo:
                        </p>
                        <p className={cx(['mySpa__content--in4', 'padding'])}>
                            🌿 Trị Nám Hiệu Quả, Da Sáng Bật Tone.                        </p>
                        <p className={cx(['mySpa__content--in4', 'padding'])}>
                            🌿 Loại bỏ các sắc tố đen tích tụ sâu từ tầng hạ bì, giúp khuôn mặt trở nên bóng, siêu ẩm, mượt mịn.                        </p>
                        <p className={cx(['mySpa__content--in4', 'padding'])}>
                            🌿 Hỗ trợ điều trị tình trạng nám, sạm, tàn nhan và hiện tượng da không đều màu.                        </p>
                        <p className={cx(['mySpa__content--in4', 'padding'])}>
                            🌿 Thu nhỏ lỗ chân lông.                        </p>
                    </div>
                    <div className={cx('mySpa__content--overlay')}></div>
                </div>
                <div className={cx('mySpa__information')}>
                    <div className={cx('mySpa__information--content')} data-aos='fade-right' data-aos-duration='1500'>
                        <h1 className={cx('mySpa__information--title')}>TUYẾT BEAUTY SPA</h1>
                        <p>
                            Được đầu tư cơ sở vật chất khang trang, hiện đại và đa dạng,... Chúng tôi tự tin đem đến cho khách hàng sự hài lòng bởi phương pháp và công nghệ trị liệu độc đáo, vô cùng hiệu quả trong quá trình chăm sóc sức khỏe và sắc đẹp.
                        </p>
                    </div>
                    <div className={cx('mySpa__information--media')}>
                        <img src={Banner4} alt='banner' className={cx('mySpa__information--image')} />
                    </div>
                </div>

                <div className={cx(['mySpa__information', 'marginTop'])}>
                    <div className={cx('mySpa__information--media')}>
                        <img src={Item1} alt='banner' className={cx('mySpa__information--image')} />
                    </div>
                    <div className={cx('mySpa__information--contentV2')} data-aos='fade-left' data-aos-duration='1500'>
                        <p>
                            Ngoài các gói điều trị nám, lỗ chân lông, tàn nhan,...<span className={cx('tuyetBeautySpa')}>"TUYẾT BEAUTY SPA"</span> còn có các gói dịch vụ chăm sóc da từ cơ bản đến chuyên sâu, tiêm filer 1cc cho tất cả các vùng, tiêm thon hàm, thon cơ tay lực sĩ...
                        </p>
                    </div>
                </div>

                <div className={cx('mySpa__information')}>
                    <div className={cx(['mySpa__information--content', 'ver3', 'marginTop'])} data-aos='zoom-in' data-aos-duration='1500'>
                        <p>
                            Yếu tố đặc biệt quan trọng tạo nên một <span className={cx('tuyetBeautySpa')}>"TUYẾT BEAUTY SPA"</span> uy tín chính từ đội ngũ nhân viên, kỹ thuật viên tại <span className={cx('tuyetBeautySpa')}>"TUYẾT BEAUTY SPA"</span> luôn nồng hậu, nhiệt tình, không ngừng cập nhật, trau chuốt các phương pháp, thiết bị máy móc và cẩn trọng trong từng quy trình dịch vụ giúp khách hàng tận hưởng nhiều dịch vụ tốt nhất và cmar nhận được sự kỳ diệu về sức khỏe sắc đẹp của mình.
                        </p>
                    </div>
                    <div className={cx('mySpa__information--media')}>
                        <img src={Banner} alt='banner' className={cx('mySpa__information--image')} />
                    </div>
                </div>
            </div>
            <BannerDesc
                background={Background1}
                icon={Icon5}
                content='
                   Hãy để "TUYẾT BEAUTY SPA" quan tâm và yêu thương bạn nhiều hơn. Với slogan "Sắc đẹp là vĩnh cửu", "TUYẾT BEAUTY SPA" sẽ không ngừng nỗ lực hoàn thiện, kết hợp đa dạng các loại hình dịch vụ chăm sóc sức khỏe và làm đẹp toàn diện bằng các phương pháp trị liệu truyền thống hiệu quả đến các hệ thống thiết bị làm đẹp công nghệ cao hiện đại bậc nhất.
                   Nếu bạn gặp vấn đề về sức khỏe sắc đẹp của mình, hãy nhấc điện thoại và đặt lịch tại "TUYẾT BEAUTY SPA" ngay. 
                '
                address={false}
                animation={true}
            />
            <Footer />
        </div>
    )
}

export default MySpa