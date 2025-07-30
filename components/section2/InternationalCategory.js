"use client";

import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function InternationalCategory() {
  const destinations = [
    {
      name: "Europe",
      imageSrc: "/assets/images/Europe.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Vietnam",
      imageSrc: "/assets/images/Vietnam.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Thailand",
      imageSrc: "/assets/images/Thailand.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Maldives",
      imageSrc: "/assets/images/Maldives.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Europe",
      imageSrc: "/assets/images/Europe.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Vietnam",
      imageSrc: "/assets/images/Vietnam.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Thailand",
      imageSrc: "/assets/images/Thailand.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
    {
      name: "Maldives",
      imageSrc: "/assets/images/Maldives.webp",
      price: "Rs. 1,29,990/-",
      width: 350,
      height: 390,
    },
  ];

  return (
    <>
      <div className="inner-section category-section" id="internationalCat">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-block">
                <div className="background">
                  <Image
                    width={2862}
                    height={1036}
                    src="/assets/images/international-trips-banner.webp"
                    alt="international-trips-banner"
                  />
                </div>
                <div className="content">
                  <h2>International Trips</h2>
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
                  <div className="swiper-button-next cat-location-next cat2-location-next">
                    <Image
                      width={20}
                      height={20}
                      src="/assets/icons/slider-angle-right.png"
                      alt="next"
                    />
                  </div>
                  <div className="swiper-button-prev cat-location-prev cat2-location-prev">
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
                      nextEl: ".cat2-location-next",
                      prevEl: ".cat2-location-prev",
                    }}
                    pagination={{
                      clickable: true,
                      el: ".cat2-location-pagination",
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

                  <div className="swiper-pagination cat-location-pagination cat2-location-pagination" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
