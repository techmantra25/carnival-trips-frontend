"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Section4() {
  const testimonials = [
    {
      id: 1,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people1.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 2,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people2.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 3,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people3.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 4,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people1.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 5,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people2.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
    {
      id: 6,
      name: "Budi Sudarsono",
      profession: "Homemaker",
      profilePic: "/assets/images/people3.webp",
      quoteIcon: "/assets/icons/quote.png",
      ratingImage: "/assets/images/rating.png",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    },
  ];

  return (
    <>
      <section className="section-4">
        <div className="background">
          <Image
            width={1800}
            height={1341}
            src="/assets/images/section-4-bg.png"
            alt=""
          />
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center text-white">What People Says</h2>
              </div>
            </div>
            <div className="row content-row">
              <div className="col-12">
                <div className="swiper testimonial-swiper">
                  <Swiper
                    modules={[Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".testimonial-pagination",
                    }}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    breakpoints={{
                      320: {
                        slidesPerView: 1
                      },
                      800: {
                        slidesPerView: 2
                      },
                      1024: {
                        slidesPerView: 3
                      }
                    }}
                    className="swiper-wrapper"
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <div className="testimonial-slide-box">
                          <span className="quote-sign">
                            <Image
                              width={49}
                              height={47}
                              src={testimonial.quoteIcon}
                              alt="Quote"
                            />
                          </span>
                          <div className="top-info-box">
                            <div className="profile-pic">
                              <Image
                                width={185}
                                height={185}
                                src={testimonial.profilePic}
                                alt=""
                              />
                            </div>
                            <h6>{testimonial.name}</h6>
                            <p>{testimonial.profession}</p>
                          </div>
                          <div className="says">
                            <p>{testimonial.feedback}</p>
                          </div>
                          <div className="rating-row">
                            <Image
                              width={187}
                              height={23}
                              src={testimonial.ratingImage}
                              alt="Rating"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="swiper-pagination testimonial-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
