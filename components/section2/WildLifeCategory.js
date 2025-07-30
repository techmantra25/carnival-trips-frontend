"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function WildLifeCategory() {
  const wildLifeTrips = [
    {
      name: "Bandhavgarh",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Bandhavgarh.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Kaziranga",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Kaziranga.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Corbett",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Corbett.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Idukki",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Idukki.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Bandhavgarh",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Bandhavgarh.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Kaziranga",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Kaziranga.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Corbett",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Corbett.webp",
      width: 600,
      height: 400,
    },
    {
      name: "Idukki",
      price: "Rs. 1,29,990/-",
      imageSrc: "/assets/images/Idukki.webp",
      width: 600,
      height: 400,
    },
  ];

  return (
    <>
      <div className="inner-section category-section" id="wildlifeCat">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-block">
                <div className="background">
                  <Image
                    width={2862}
                    height={1036}
                    src="/assets/images/wildlife-banner.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <h2>Wildlife</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </p>
                  <a href="javascript:void(0)" className="cta">
                    Explore Now
                  </a>
                </div>
              </div>
              <div className="slider-block">
                <div className="cat-location-swiper-nav">
                  <div className="swiper-button-next cat-location-next cat5-location-next">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-right.png"
                      alt="next"
                    />
                  </div>
                  <div className="swiper-button-prev cat-location-prev cat5-location-prev">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-left.png"
                      alt="prev"
                    />
                  </div>
                </div>
                <div className="swiper cat-location-swiper cat5-location-swiper">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      el: ".cat5-location-pagination",
                    }}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                      nextEl: ".cat5-location-next",
                      prevEl: ".cat5-location-prev",
                    }}
                    className="swiper-wrapper"
                  >
                    {wildLifeTrips.map((trip, index) => (
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

                  <div className="swiper-pagination cat-location-pagination cat5-location-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
