"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";

export default function DomesticCategory() {
  const destinations = [
    {
      name: "Meghalaya",
      imageSrc: "/assets/images/Meghalaya.png",
      price: "Rs. 1,29,990/-",
      width: 648,
      height: 432,
    },
    {
      name: "Sikim",
      imageSrc: "/assets/images/Sikim.png",
      price: "Rs. 1,29,990/-",
      width: 546,
      height: 401,
    },
    {
      name: "Darjeeling",
      imageSrc: "/assets/images/Darjeeling.png",
      price: "Rs. 1,29,990/-",
      width: 482,
      height: 403,
    },
    {
      name: "Rajasthan",
      imageSrc: "/assets/images/Rajasthan.png",
      price: "Rs. 1,29,990/-",
      width: 688,
      height: 387,
    },
    {
      name: "Meghalaya",
      imageSrc: "/assets/images/Meghalaya.png",
      price: "Rs. 1,29,990/-",
      width: 648,
      height: 432,
    },
    {
      name: "Sikim",
      imageSrc: "/assets/images/Sikim.png",
      price: "Rs. 1,29,990/-",
      width: 546,
      height: 401,
    },
    {
      name: "Darjeeling",
      imageSrc: "/assets/images/Darjeeling.png",
      price: "Rs. 1,29,990/-",
      width: 482,
      height: 403,
    },
    {
      name: "Rajasthan",
      imageSrc: "/assets/images/Rajasthan.png",
      price: "Rs. 1,29,990/-",
      width: 688,
      height: 387,
    },
  ];

  return (
    <>
      <div className="inner-section category-section" id="domesticCat">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-block">
                <div className="background">
                  <Image
                    width={2862}
                    height={1036}
                    src="/assets/images/domestic-trips-banner.webp"
                    alt="domestic-trips-banner"
                  />
                </div>
                <div className="content">
                  <h2>Domestic Trips</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore.
                  </p>
                  <Link href="#" className="cta">
                    Explore Now
                  </Link>
                </div>
              </div>
              <div className="slider-block">
                <div className="cat-location-swiper-nav">
                  <div className="swiper-button-next cat-location-next cat1-location-next">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-right.png"
                      alt="next"
                    />
                  </div>
                  <div className="swiper-button-prev cat-location-prev cat1-location-prev">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-left.png"
                      alt="prev"
                    />
                  </div>
                </div>
                <div className="swiper cat-location-swiper cat1-location-swiper">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={8}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                      nextEl: ".cat1-location-next",
                      prevEl: ".cat1-location-prev",
                    }}
                    pagination={{
                      clickable: true,
                      el: ".cat1-location-pagination",
                    }}
                    className="swiper-wrapper"
                  >
                    {destinations.map((destination, index) => (
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
                  <div className="swiper-pagination cat-location-pagination cat1-location-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
