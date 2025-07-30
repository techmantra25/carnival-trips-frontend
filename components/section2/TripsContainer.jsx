"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TripsContainer = ({ category }) => {
  const rounter = useRouter();

  return (
    <div
      className="inner-section category-section"
      id={category.title.toLowerCase()}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="category-section-content-wrap has-slider">
              <div className="banner-block">
                <div className="background">
                  <Image
                    width={2862}
                    height={1036}
                    src={category?.image}
                    alt={category?.title}
                    layout="responsive"
                   
                  />
                </div>
                <div className="content">
                  <div className="row">
                    <div className="col-md-12 col-lg-8">
                      <h2>{category.title}</h2>
                      <p>{category?.short_desc}</p>
                      <Link href={`/tripcategory/${category?.slug}`} className="cta">
                        Explore Now
                      </Link>
                    </div>
                  </div>
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
                    breakpoints={{
                      320: {
                        slidesPerView:1
                      },
                      480: {
                        slidesPerView:2
                      },
                      768: {
                        slidesPerView:3
                      },
                      1024: {
                        slidesPerView:4
                      }
                    }} 
                    className="swiper-wrapper"
                  >
                    {category?.destinations?.map((destination, index) => (
                      <SwiperSlide key={index} className="swiper-slide">
                        <Link href={`/destination/${destination?.slug}`}>
                          <div className="content-wrap">
                            <div className="location-bg">
                              <Image
                                width={400}
                                height={500}
                                src={destination?.image}
                                alt={"image"}
                               
                              />
                            </div>
                            <div className="location-cont">
                              <label>
                                {destination?.name} 
                              </label>
                              <p>
                                Starting Price Rs.{" "}
                                {Number(destination?.start_price).toLocaleString(
                                  "en-IN"
                                )}
                                /-
                              </p>
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
    </div>
  );
};

export default TripsContainer;
