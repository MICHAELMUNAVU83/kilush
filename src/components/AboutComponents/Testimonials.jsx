import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper";
import testimonial1 from "../images/testimonial1.jpeg";
import testimonial2 from "../images/testimonial2.jpeg";
import testimonial3 from "../images/testimonial3.jpeg";
import testimonial4 from "../images/testimonial4.jpeg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  const testimonials = [
    {
      id: 1,
      name: "Jane Kamau",
      role: "CEO Dams Data",
      body: "Their expertise in data analysis and modeling is unparalleled.",
      image: testimonial1,
    },
    {
      id: 2,
      name: "Kim wario",
      role: "CTO",
      body: "They have consistently delivered accurate and actionable insights",
      image: testimonial2,
    },

    {
      id: 3,
      name: "Naomi Smith",
      role: "Data Science Expert",
      body: "They have consistently delivered accurate and actionable insights",
      image: testimonial3,
    },
    {
      id: 4,
      name: "Mike Jones",
      role: "CFO Zee Techs",
      body: "Their attention to detail and problem-solving skills are impressive.",
      image: testimonial4,
    },
  ];

  return (
    <div>
      <h1 className="text-4xl libre font-bold text-start p-4 text-white">
        Testimonials
      </h1>
      <p className="h-[1px] bg-white w-[100%]  my-4" />
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="flex justify-center items-center md:w-[100%]  w-[90%] md:mx-0 mx-auto swiper-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="flex  justify-center py-12 ">
            <div className="flex flex-col justify-center  ">
              <button
                className="flex justify-start cursor-pointer  transition-all duration-500 ease-in-out"
                onClick={swipeBack}
              >
                <BsArrowLeft className="text-2xl text-[#5FBFF9] text-start" />
              </button>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[80%] my-2 mx-auto">
                  <RiDoubleQuotesL className="text-2xl  text-gray-500 text-start" />
                  <p className="text-center que  ">{testimonial.body}</p>
                  <RiDoubleQuotesR className="float-right  text-gray-500 text-2xl" />
                </div>

                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-32 h-32 object-cover rounded-full"
                />

                <h1 className="text-2xl mplus text-gray-400 font-bold">
                  {testimonial.name}
                </h1>
                <h2 className="text-xl que ">{testimonial.role}</h2>
              </div>
              <button
                className="flex justify-end  text-end cursor-pointer transition-all duration-500 ease-in-out"
                onClick={swipe}
              >
                <BsArrowRight className="text-2xl text-[#5FBFF9]  text-end" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
