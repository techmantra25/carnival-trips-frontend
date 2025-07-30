"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function UpcomingCategory() {
  const months = [
    "Jan '25",
    "Feb '25",
    "Mar '25",
    "Apr '25",
    "May '25",
    "Jun '25",
    "Jul '25",
    "Aug '25",
    "Sep '25",
    "Oct '25",
    "Nov '25",
    "Dec '25",
  ];

  const weekendTrips = [
    {
      name: "Agra",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Agra.webp",
      width: 648,
      height: 432,
    },
    {
      name: "Andaman",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Andaman.webp",
      width: 546,
      height: 401,
    },
    {
      name: "Kashmir",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Kashmir.webp",
      width: 482,
      height: 403,
    },
    {
      name: "Himachal",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Himachal.webp",
      width: 688,
      height: 387,
    },
    {
      name: "Agra",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Agra.webp",
      width: 648,
      height: 432,
    },
    {
      name: "Andaman",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Andaman.webp",
      width: 546,
      height: 401,
    },
    {
      name: "Kashmir",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Kashmir.webp",
      width: 482,
      height: 403,
    },
    {
      name: "Himachal",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Himachal.webp",
      width: 688,
      height: 387,
    },
    {
      name: "Agra",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Agra.webp",
      width: 648,
      height: 432,
    },
    {
      name: "Andaman",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Andaman.webp",
      width: 546,
      height: 401,
    },
    {
      name: "Kashmir",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Kashmir.webp",
      width: 482,
      height: 403,
    },
    {
      name: "Himachal",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Himachal.webp",
      width: 688,
      height: 387,
    },
  ];

  return (
    <>
      <div className="inner-section category-section" id="upcomingCat">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-block">
                <div className="background">
                  <Image
                    width={2862}
                    height={1036}
                    src="/assets/images/upcoming-trips-banner.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2 className="text-center mb-0">Upcoming Trips</h2>
                  <div className="upcoming-dates-slider">
                    <div className="upcoming-dates-swiper-nav">
                      <div className="swiper-button-next upcoming-dates-next">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/slider-angle-right.png"
                          alt="next"
                        />
                      </div>
                      <div className="swiper-button-prev upcoming-dates-prev">
                        <Image
                          width={20}
                          height={20}
                          src="/assets/icons/slider-angle-left.png"
                          alt="prev"
                        />
                      </div>
                    </div>
                    <div className="swiper upcoming-dates-swiper">
                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={10}
                        slidesPerView={10}
                        loop={false}
                        navigation={{
                          nextEl: ".upcoming-dates-next",
                          prevEl: ".upcoming-dates-prev",
                        }}
                        className="swiper-wrapper"
                      >
                        {months.map((month, index) => (
                          <SwiperSlide key={index} className="swiper-slide">
                            <Link href="#">{month}</Link>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-block">
                <div className="cat-location-swiper-nav">
                  <div className="swiper-button-next cat-location-next cat4-location-next">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-right.png"
                      alt="next"
                    />
                  </div>
                  <div className="swiper-button-prev cat-location-prev cat4-location-prev">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-left.png"
                      alt="prev"
                    />
                  </div>
                </div>
                <div className="swiper cat-location-swiper cat4-location-swiper">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".cat4-location-pagination",
                    }}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                      nextEl: ".cat4-location-next",
                      prevEl: ".cat4-location-prev",
                    }}
                    className="swiper-wrapper"
                  >
                    {weekendTrips.map((trip, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <Link href="#">
                          <div className="content-wrap">
                            <div className="location-bg">
                              <Image
                                width={trip.width}
                                height={trip.height}
                                src={trip.imageSrc}
                                alt={trip.name}
                              />
                            </div>
                            <div className="location-cont">
                              <label>{trip.name}</label>
                              <p>Starting Price {trip.price}</p>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="swiper-pagination cat-location-pagination cat4-location-pagination" />
                </div>
              </div>
              <div className="cta-block">
                <a href="javascript:void(0)" className="cta">
                  Explore All
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
