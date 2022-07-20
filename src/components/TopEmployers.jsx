// export default function TopEmployer(){
//     return(
//         <div>
//             <h2>Top Employers</h2>
//             <div className="topEmployers">
//                 <div className="employer">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/KMS-Logo.png" alt="" />
//                     <p>KMS Technology</p>
//                     <p>4 jobs - HCM</p>
//                 </div>
//                 <div className="employer">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png" alt="" />
//                     <p>KMS Technology</p>
//                     <p>4 jobs - HCM</p>
//                 </div>
//                 <div className="employer">
//                     <img src="https://brademar.com/wp-content/uploads/2022/05/Microsoft-Logo-PNG-2012-%E2%80%93-Now.png" alt="" />
//                     <p>KMS Technology</p>
//                     <p>4 jobs - HCM</p>
//                 </div>
//                 <div className="employer">
//                     <img src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ed23051b0dcfc2a59cb8e493a3494521.png?VersionId=.KzgpwG_mKhSCQ5Pmcqi8l.j.P_21z9y" alt="" />
//                     <p>KMS Technology</p>
//                     <p>4 jobs - HCM</p>
//                 </div>
//             </div>
//         </div>
//     )
// }

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function TopEmployer() {
  return (
    <>
      <h2>Top Employers</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2015/08/19/1439966941_SmartDevLogo.png"
                alt=""
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://brademar.com/wp-content/uploads/2022/05/Microsoft-Logo-PNG-2012-%E2%80%93-Now.png"
                alt=""
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png"
                alt="/"
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/KMS-Logo.png"
                alt=""
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBemh4SFE9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9d16236a3d004d3d1a6f27ebac3ffaf930ac9c7d/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/seadev_logo.png"
                alt=""
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="employer">
            <div className="top">
              <img
                src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ed23051b0dcfc2a59cb8e493a3494521.png?VersionId=.KzgpwG_mKhSCQ5Pmcqi8l.j.P_21z9y"
                alt=""
              />
            </div>
            <div className="description">
              <p>KMS Technology</p>
              <a href="/">4 jobs - HCM</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
