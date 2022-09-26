import React from 'react'
import styles from './BlogList.module.scss'
import classNames from 'classnames/bind'
import { NamDa, LoChanLong, TanNhang, ThaiChiDocTo, CayHongSam, MoBung, Item3, SeoRo } from '../../../assets/img';
import CardTag from '../../../components/CardList/CardTag';
import { slug } from '../../../slug';

const cx = classNames.bind(styles);

function BlogList() {
    


    
    return (
        <div className={cx('blog')}>
            <div className={cx('blogList')}>
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


                <CardTag
                    image={ThaiChiDocTo}
                    title='Thải chì độc tố'
                    content='Các độc tố tồn tại trong môi trường thâm nhập vào cơ thể gây nhiều tác hại cho sức khỏe và sắc đẹp. Tuy nhiên, vấn đề này chưa nhận được sự quan tâm đúng mực từ nhiều người. Trong bài viết này, Tuyết Beauty Spa sẽ cung cấp cho bạn các thông tin cơ bản về thải độc chì là gì? Thải độc chì trong cơ thể như thế nào? Lưu ngay những thông tin quan trọng để có cái nhìn thấu đáo và lựa chọn giải pháp hiệu quả nhất cho mình nhé!'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='3500'
                    url={`/blog/${slug.thaiChi}`}

                />


                <CardTag
                    image={CayHongSam}
                    title='Cấy hồng sâm căng bóng'
                    content='Trong hồng sâm chứa thành saponin và các loại vitamin rất cao, nó có tác dụng ngăn chặn quá trình lão hóa, xóa bỏ được mọi vấn đề về da, giúp da luôn trắng sáng và căng tràn sức sống.
Phương pháp này, sử dụng đầu kim nano siêu nhỏ để cấy tế bào tươi hồng sâm vào da, để nuôi dưỡng da từ sâu bên trong, mang lại hiệu quả làm đẹp tối ưu. Đặc biệt, công nghệ này phù hợp với mọi loại da, kể cả làn da nhạy cảm và mọi lứa tuổi.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='3000'
                    url={`/blog/${slug.cayHongSam}`}

                />


                <CardTag
                    image={SeoRo}
                    title='Điều trị phi kim sẹo rỗ'
                    content='Phi kim trị sẹo rỗ là một trong những biện pháp thẩm mỹ được ưa chuộng nhất hiện nay. Tuy nhiên, để mang lại hiệu quả tối đa, người dùng cần lưu ý một vài điều khi thực hiện phi kim. Hãy cùng Tuyết Beauty Spa tìm hiểu về phương pháp phi kim điều trị sẹo rỗ qua bài viết sau nhé!'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='2500'
                    url={`/blog/${slug.seoRoV2}`}

                />


                <CardTag
                    image={TanNhang}
                    title='Điều trị tàn nhang'
                    content='Tàn nhang là những chấm nhỏ li ti sậm màu, thường có màu đen hoặc nâu đen làm ảnh hưởng lớn đến ngoại hình. Những đốm tàn nhang thường mọc thành đám, tập trung nhiều ở mũi và hai bên gò má gây mất thẩm mỹ trên khuôn mặt. Điều trị tàn nhang hoàn toàn không khó nhưng nếu không dùng đúng công nghệ thì sẽ không mang lại hiệu quả cao.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='3500'
                    url={`/blog/${slug.tanNhang}`}

                />


                <CardTag
                    image={SeoRo}
                    title='Điều trị sẹo rỗ'
                    content='Cơn mưa mụn qua đi để lại những vệt thâm in hằn trên mặt, nó là nỗi đau mà chắc hẳn ai đã và đang trải qua là sẽ hiểu thấu. Sẹo khiến làn da không phẳng mịn, đặc biệt là sẹo rỗ làm giảm tự tin, mất thẩm mỹ cho khuôn mặt. Những vết sẹo khi để quá lâu sẽ rất điều trị dứt điểm, chính vì thế Tuyết Beauty Spa sẽ mách bạn cách trị sẹo rỗ hiệu quả nhất để lấy lại làn da láng mịn như ban đầu nhé.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='3000'
                    url={`/blog/${slug.seoRo}`}

                />


                <CardTag
                    image={MoBung}
                    title='Liệu trình giảm mỡ vùng bụng'
                    content='Béo vùng bụng thực chất là tình trạng thừa mỡ phần bụng do nhiều nguyên nhân dẫn đến tình trạng béo bụng, nhiều mỡ bụng.
Đó là 1 phần mất cân bằng cơ thể giữa quá trình nạp và tiêu hao năng lượng của cơ thể là nguyên nhân tạo nên mỡ bụng.
Khi lượng calo nạp vào lớn hơn so với lượng calo tiêu hao thì cơ thể của chúng ta tự chuyển hóa thành mỡ dự trữ.
Mỗi người có 1 cơ thể khác nhau, cơ địa cũng khác nhau nên việc điều chỉnh giảm béo vùng bụng, giảm mỡ bụng cũng ảnh hưởng khác nhau.'
                    blogIcon={true}
                    time='24/09/2022'
                    duration='2500'
                    url={`/blog/${slug.moBung}`}
                />
            </div>
        </div>
    )
}

export default BlogList