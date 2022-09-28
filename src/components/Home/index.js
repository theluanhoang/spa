import React from 'react';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Background, Background1, BgrWhite, Icon1, Icon5 } from '../../assets/img'
import 'aos/dist/aos.css';
import BannerDesc from '../Banner/BannerDesc';
import Navbar from '../Navbar';
import Slider from '../slider/Slider';
import CardList from '../CardList';
import BannerList from '../Banner';
import ContactForm from '../Form/ContactForm';
import Footer from '../Footer';
import NavbarResponsive from '../Navbar/NavbarElement/NavbarResponsive';
import { useSelector } from 'react-redux';
import { navbarResState$ } from '../../redux/selectors';

const cx = classNames.bind(styles);

function Home() {
    
    const { turnNav } = useSelector(navbarResState$);

    return (
        <div className={cx('home')}>
            <Navbar />
            {
                turnNav && <NavbarResponsive />
            }
            <Slider />
            <BannerDesc
                background={BgrWhite}
                icon={Icon1}
                title='Tận hưởng sự khác biệt'
                content='
                "Tuyết Beauty Spa" cung cấp các dịch vụ như điều trị nám, lỗ chân lông, sẹo rổ, tàn nhan. Với việc áp dụng trang thiết bị hiện đại kết hợp với đội ngũ nhân viên có chuyên môn cao, chúng tôi tin rằng sẽ làm hài lòng ngay cả vị khách khó tính nhất.
                '
            />
            <CardList />
            <BannerList />
            <BannerDesc
                background={BgrWhite}
                icon={Icon5}
                title='Về chúng tôi'
                content='
                   "Tuyết Beauty Spa" là một địa điểm spa thích hợp để bạn ghé qua. Với đội ngũ nhân viên, kỹ thuật viên chuyên nghiệp. Chúng tôi hứa hẹn sẽ mang đến cho bạn những phút giây thư giãn tuyệt vời nhất. Với không gian thoải mái, "Tuyết Beauty Spa" được nhiều khách hàng đánh giá là địa điểm spa đáng để trải nghiệm cho người dân Đà Nẵng và du khách quốc tế. 
                '
                address={true}
            />

            <ContactForm />
            <BannerDesc
                background={BgrWhite}
                icon={Icon5}
                title='Chào mừng đến với Tuyết Beauty Spa'
                content='
                   Đặt lịch của bạn ngay hôm nay 
                '
                address={false}
            />
            <Footer />
        </div>
    )
}

export default Home