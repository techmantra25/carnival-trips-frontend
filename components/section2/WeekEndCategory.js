"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function WeekEndCategory() {
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
    <div className="inner-section category-section" id="weekendCat">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="banner-block">
              <div className="background">
                <Image
                  width={1920}
                  height={500}
                  src="/assets/images/weekend-trips-banner.webp"
                  alt="Weekend Trips"
                  className="w-full h-auto"
                />
              </div>
              <div className="content">
                <h2>Weekend Trips</h2>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore.
                </p>
                <a href="#" className="cta">
                  Explore Now
                </a>
              </div>
            </div>
            <div className="slider-block">
              <div className="cat-location-swiper-nav">
                <div className="swiper-button-next cat-location-next cat3-location-next">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/slider-angle-right.png"
                    alt="next"
                  />
                </div>
                <div className="swiper-button-prev cat-location-prev cat3-location-prev">
                  <Image
                    width={20}
                    height={20}
                    src="/assets/icons/slider-angle-left.png"
                    alt="prev"
                  />
                </div>
              </div>
              <div className="swiper cat-location-swiper cat2-location-swiper">
                <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={10}
                  slidesPerView={4}
                  loop={true}
                  navigation={{
                    nextEl: ".cat3-location-next",
                    prevEl: ".cat3-location-prev",
                  }}
                  pagination={{
                    clickable: true,
                    el: ".cat3-location-pagination",
                  }}
                  className="swiper-wrapper"
                >
                  {weekendTrips.map((destination, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <Link href="#">
                        <div className="content-wrap">
                          <div className="location-bg">
                            <Image
                              width={destination.width}
                              height={destination.height}
                              src={destination.imageSrc}
                              alt={destination.name}
                            />
                          </div>
                          <div className="location-cont">
                            <label>{destination.name}</label>
                            <p>Starting Price {destination.price}</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="swiper-pagination cat-location-pagination cat3-location-pagination" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
