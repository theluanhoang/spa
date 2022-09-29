import React from 'react'
import CardTag from './CardTag'
import classNames from 'classnames/bind'
import styles from './CardList.module.scss'
import { Item1, Item2, Item3, NamDa, LoChanLong } from '../../assets/img'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { slug } from '../../slug'

const cx = classNames.bind(styles)

function CardList() {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={cx('cardList')} data-aos='fade-right' data-aos-duration='1000'>
            <CardTag
                    image={NamDa}
                    title='Điều trị nám da'
                    content='Nám da là tình trạng không còn xa lạ với phụ nữ. Khi hiện diện trên gương mặt, nám khiến da tối màu và trở nên kém duyên. Điều trị nám da tận gốc là một trong những nhu cầu lớn của nhiều chị em khi mắc phải tình trạng này. Tuy nhiên, trị nám da an toàn ở đâu? Nên thực hiện phương pháp nào? Tất cả sẽ được giải đáp trong bài viết sau.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='1000'
                    url={`/blog/${slug.triNam}`}
                />


                <CardTag
                    image={LoChanLong}
                    title='Điều trị lỗ chân lông'
                    content='Lỗ chân lông là những lỗ nhỏ li ti trên mặt giữ nhiệm vụ bài tiết mồ hôi và dầu nhờn trên da mặt. Lỗ chân lông to không chỉ khiến bạn mất tự tin mà còn báo hiệu một số vấn đề về da. Vậy điều trị lỗ chân lông to trên mặt thế nào?'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='1500'
                    url={`/blog/${slug.loChanLong}`}

                />


                <CardTag
                    image={Item3}
                    title='Gội đầu dưỡng sinh'
                    content='Gội đầu dưỡng sinh là phương pháp phổ biến ở các spa và hair salon, tập trung vào việc chăm sóc tóc và da đầu, bao gồm làm sạch bằng dầu gội, nước gội thảo dược từ thiên nhiên như bồ kết, sả, vỏ bưởi…, kết hợp với massage đầu – cổ – vai – gáy – lưng, day ấn huyệt… nhằm đem lại cảm giác thư giãn và sảng khoái.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='2000'
                    url={`/blog/${slug.goiDau}`}

                />
        </div>
    )
}

export default CardList