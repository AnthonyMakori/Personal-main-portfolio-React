import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; 
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Working with this developer has been a game-changer for our business. Their ability to craft seamless web applications is unmatched, and they were always ready to go the extra mile. Our website’s performance has improved tenfold.",
    },
    {
      img: profilePic2,
      review:
        "A true expert in mobile app development! The app they built for us was intuitive, user-friendly, and fast. They provided regular updates and always ensured we were part of the decision-making process. Highly recommend!",
    },
    {
      img: profilePic3,
      review:
        "Their understanding of blockchain technology is impressive. We entrusted them with our blockchain project, and they delivered a secure, scalable solution that exceeded our expectations. We look forward to future collaborations.",
    },
    {
      img: profilePic4,
      review:
        "Their versatility in software and web development is incredible. Not only did they help us build a robust software system, but their ongoing support has been invaluable. The project was delivered on time and within budget.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>

      <Swiper
        slidesPerView={1}
        navigation={true} 
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]} 
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial">
              <img src={client.img} alt="" />
              <span>{client.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
