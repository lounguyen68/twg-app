import './about-me.scss';
import img from '../../assets/aboutme.png';

const Aboutme = () => {
  return (
    <div className="aboutme">
        <div className="aboutme__image">
                <img src={img} alt="" /> 
        </div>
        <div className="aboutme__content">
            <div className="aboutme__content__title">
                <span>About Together We Grow</span>
            </div>
            <div className="aboutme__content__text">
                <div><span>Chúng tôi là ai</span></div>
                <p>Together We Grow là một tổ chức giáo dục do giới trẻ thành lập năm 2021 và hoạt động về đề tài giáo dục và kỹ năng dành cho giới trẻ. Với mong muốn đem lại cho các bạn trẻ những hành trang quý báu, TWG đã luôn không ngừng VIẾT, LÀM, HÀNH ĐỘNG để đem tới những kiến thức, những kỹ năng vô cùng thiết thực, bổ ích, cho cộng đồng, xã hội nói chung và giới trẻ nói riêng.</p>
            </div>
        </div>
    </div>
  )
}

export default Aboutme