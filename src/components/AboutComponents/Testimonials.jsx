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
      name: "John Doe",
      role: "CEO",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: testimonial1,
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "CTO",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: testimonial2,
    },

    {
      id: 3,
      name: "John Smith",
      role: "COO",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: testimonial3,
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "CFO",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      image: testimonial4,
    },
  ];

  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="flex justify-center items-center swiper-container"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide className="flex  justify-center py-12 ">
            <div className="flex flex-col justify-center  ">
              <p
                className="flex justify-start cursor-pointer  transition-all duration-500 ease-in-out"
                onClick={swipeBack}
              >
                <BsArrowLeft className="text-2xl text-start" />
              </p>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[80%] my-2 mx-auto">
                  <RiDoubleQuotesL className="text-2xl text-start" />
                  <p className="text-center  ">{testimonial.body}</p>
                  <RiDoubleQuotesR className="float-right text-2xl" />
                </div>

                <img
                  src={testimonial.image}
                  alt="testimonial"
                  className="w-32 h-32 rounded-full"
                />

                <h1 className="text-2xl font-bold">{testimonial.name}</h1>
                <h2 className="text-xl font-semibold">{testimonial.role}</h2>
              </div>
              <p
                className="flex justify-end  cursor-pointer transition-all duration-500 ease-in-out"
                onClick={swipe}
              >
                <BsArrowRight className="text-2xl text-end" />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
