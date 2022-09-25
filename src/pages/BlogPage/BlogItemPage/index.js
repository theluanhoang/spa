import React from 'react'
import styles from './BlogItemPage.module.scss'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import { BiTime } from 'react-icons/bi'
import { NamDa } from '../../../assets/img'

const cx = classNames.bind(styles)

function BlogItemPage() {
  return (
    <div className={cx('blogItem')}>
      <Navbar />
      <div className={cx('blogItem__status')}>
        <div className={cx('blogItem__status--content')}>
          <Link to='/'>Trang chủ</Link>
          <MdOutlineKeyboardArrowRight />
          <p>Điều trị nám da</p>
        </div>
      </div>
      <div className={cx('blogItem__main')}>
        <div className={cx('blogItem__center')}>
          <div className={cx('blogItem__center--blog')}>
            <div className={cx('blogItem__center--blogTag')}>
              Blog
            </div>
          </div>
          <h1 className={cx('blogItem__center--title')}>
            ĐIỀU TRỊ NÁM DA
          </h1>
          <p className={cx('time')}>
            <BiTime /> 24/09/2022
          </p>
          <div className={cx('blogItem__center--media')}>
            <img src={NamDa} alt='' className={cx('blogItem__center--image')} />
          </div>
          <div className={cx('blogItem__center--content')}>
            <h2 className={cx('blogItem__content--title')}>Nám da mặt và những điều cần biết</h2>
            <h4 className={cx('blogItem__content--titleV2')}>Nám da là gì?</h4>
            <p>Nám da là tình trạng không còn xa lạ với phụ nữ. Khi hiện diện trên gương mặt, nám khiến da tối màu và trở nên kém duyên. Điều trị nám da tận gốc là một trong những nhu cầu lớn của nhiều chị em khi mắc phải tình trạng này. Tuy nhiên, trị nám da an toàn ở đâu? Nên thực hiện phương pháp nào? Tất cả sẽ được giải đáp trong bài viết sau.</p>
            <p>Thông thường, nám sẽ hiện diện thành các mảng lớn, tập trung nhiều tại các vùng như cằm, trán, sống mũi và má. Trong một số trường hợp, nám có thể hiện diện ở cổ, cánh tay, mu bàn tay.</p>
            <p>Theo thống kê, nám thường xuất hiện ở phụ nữ khoảng 25 – 50 tuổi. Sẽ hay gặp ở những chị em sau sinh hoặc đang trong giai đoạn tiền mãn kinh. Mặc dù không có ảnh hưởng đến sức khỏe nhưng nám da xuất hiện khiến cho nhiều người mặc cảm, tự ti, xuất hiện những nỗi lo vô hình.</p>
            <h4 className={cx('blogItem__center--titleV2')}>
              Nám da hình thành như thế nào?
            </h4>
            <p>
              Tình trạng nám da xuất hiện phần lớn là do nội tiết tố thay đổi, vì thế nám da thường xuất hiện nhiều ở phụ nữ ngoài 30 tuổi, đang trong quá trình mang thai và xuất hiện nhiều nhất sau khi sinh. Đặc biệt, khi ở độ tuổi 40 trở đi, tình trạng nội tiết tố sẽ thay đổi giảm mạnh gây ra tình trạng gốc tự do tích tụ nhiều thì nám da sẽ phát triển mạnh hơn. Nếu không điều trị sớm, tình trạng nám da sẽ từng ngày bám sâu hơn dẫn đến khó có khả năng điều trị dứt điểm.
            </p>
            <h2 className={cx('blogItem__content--title')}>
              Điều trị nám tận gốc tại nhà với các phương pháp tự nhiên
            </h2>
            <h4 className={cx('blogItem__content--titleV2')}>
              Điều trị nám bằng dầu dừa
            </h4>
            <p>
              Công dụng của dầu dừa được nhiều người biết đến nhất là trị rạn da, dưỡng da, dưỡng tóc, dưỡng mi, hay dùng trong chế biến thức ăn,… Nhưng ít ai biết rằng dầu dừa còn có khả năng trị nám. Sở dĩ dầu dừa có tác dụng như vậy là vì nó sở hữu hàm lượng axit lauric, axit capric, Vitamin E, cùng một số chất chất chống oxy hóa,…
            </p>
            <p>
              Cách thực hiện:
            </p>
            <p>
              Rửa mặt thật sạch sau đó lấy một ít dầu dừa thoa lên toàn bộ gương mặt và đặc biệt thoa kĩ ở vùng da bị nám
            </p>
            <p>
              Massage da thật nhẹ nhàng 2 phút theo chuyển động xoắn ốc để dưỡng chất trong mặt nạ thẩm thấu vào da.
            </p>
            <p>
              Nằm thư giãn khoảng 20 phút thì rửa lại với nước ấm.
            </p>
          </div>
          <div className={cx('blog__center--contact')}>
            <div className={cx('blog__contact--title')}>
              <h2 className={cx('blogItem__content--title')}>Trị nám tận gốc, không tái phát</h2>
            </div>
            <div className={cx('contact__button')}>
              <div className={cx('btnContact')}>Liên hệ ngay</div>
            </div>
          </div>
        </div>
        <div className={cx('blogItem__left')}></div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogItemPage