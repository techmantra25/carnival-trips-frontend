"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useTabsStore from "@/stores/useTabsStore";

const TripsContainer = ({ category }) => {
  const router = useRouter();
  const [renderingKey, setRenderingKey] = useState(0);

  // const { selectedTab, setSelectedTab } = useTabsStore();

  // useEffect(() => {
  //   // Force Swiper re-render on tab change
  //   setRenderingKey(prev => prev + 1);
  // }, [selectedTab]);

  // const getCurrentList = () => {
  //   if (selectedTab === "tours") {
  //     return category?.destinations || [];
  //   } else if (selectedTab === "activities") {
  //     return category?.activities || [];
  //   } else if (selectedTab === "experiences") {
  //     return category?.experiences || [];
  //   }
  //   return [];
  // };

  // const currentList = getCurrentList();

  return (
    <div
      className="inner-section category-section"
      id={category.title.toLowerCase()}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="category-section-content-wrap has-slider">
              {/* Banner Block */}
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
                      <Link
                        href={`/tripcategory/${category?.slug}`}
                        className="cta"
                      >
                        Explore Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Slider Block */}
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
                    key={renderingKey}
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
                      320: { slidesPerView: 1 },
                      480: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      1024: { slidesPerView: 4 },
                    }}
                    className="swiper-wrapper"
                  >
                    {category?.destinations.length > 0 ? (
                      category?.destinations.map((item, index) => (
                        <SwiperSlide key={index} className="swiper-slide">
                          <Link href={`/destination/${item?.slug}`}>
                            <div className="content-wrap">
                              <div className="location-bg">
                                <Image
                                  width={400}
                                  height={500}
                                  src={item?.image}
                                  alt="image"
                                />
                              </div>
                              <div className="location-cont">
                                <label>{item?.name}</label>
                                <p>
                                  Starting Price Rs.{" "}
                                  {Number(item?.start_price).toLocaleString("en-IN")}/-
                                </p>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      ))
                    ) : (
                      <SwiperSlide className="swiper-slide">
                        <div className="content-wrap">
                          <p>No {selectedTab} available.</p>
                        </div>
                      </SwiperSlide>
                    )}
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
