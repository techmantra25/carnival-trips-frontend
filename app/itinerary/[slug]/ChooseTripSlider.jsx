"use client";

import React, { use, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

const tripData = [
  {
    img: "/assets/images/2-days.webp",
    days: "2 Days",
    price: "Rs. 1,29,990/-",
  },
  {
    img: "/assets/images/3-days.webp",
    days: "3 Days",
    price: "Rs. 1,29,990/-",
  },
  {
    img: "/assets/images/4-days.webp",
    days: "4 Days",
    price: "Rs. 1,29,990/-",
  },
  {
    img: "/assets/images/5-days.webp",
    days: "5 Days",
    price: "Rs. 1,29,990/-",
  },
  {
    img: "/assets/images/2-days.webp",
    days: "6 Days",
    price: "Rs. 1,29,990/-",
  },
  {
    img: "/assets/images/3-days.webp",
    days: "7 Days",
    price: "Rs. 1,29,990/-",
  },
];

const ChooseTripSlider = ({ ItineryData, slug }) => {
  const uniqueId = useId();
  const nextClass = `trip-duration-swiper-next-${uniqueId}`;
  const prevClass = `trip-duration-swiper-prev-${uniqueId}`;

  console.log("ChooseTripSlider", ItineryData);

  const route = useRouter();

  let tripData = ItineryData?.trip_duration || [];

  console.log("tripData", tripData);

  const handleRedirect = (trip) => {
    // Implement the redirect logic here
    console.log("Redirecting to trip:", trip);
    route.push(`/itinerary/${trip?.slug}`);
  };

  return (
    <div className="trip-duration-slider">
      <div className="trip-duration-navigation">
        <div
          className={`swiper-button-next trip-duration-swiper-button-next ${nextClass}`}
        >
          <img src="/assets/icons/angle-right.png" alt="next" />
        </div>
        <div
          className={`swiper-button-prev trip-duration-swiper-button-prev ${prevClass}`}
        >
          <img src="/assets/icons/angle-left.png" alt="prev" />
        </div>
      </div>
      <div className="swiper trip-duration-swiper">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          modules={[Navigation]}
          navigation={{
            nextEl: `.${nextClass}`,
            prevEl: `.${prevClass}`,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            575: { slidesPerView: 2 },
            1024: { slidesPerView: 5 },
          }}
        >
          {tripData.map((trip, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="trip-durtion-box"
                style={{ cursor: "pointer" }}
                onClick={() => handleRedirect(trip)}
              >
                <div
                  className="trip-img-box"
                  style={{
                    border: slug === trip?.slug ? "2px solid #fb9c23" : "none",
                    //padding: slug === trip?.slug ? "10px 8px" : "0", // 10px top/bottom, 8px left/right
                  }}
                >
                  <div className="img-holder">
                    {/* <img src={trip?.main_image} alt="Trip" /> */}
                    <Image
                      src={trip?.main_image || ""}
                      alt={trip?.title || "Trip Image"}
                      width={201}
                      height={212}
                    />
                  </div>
                  <div className="text-holder">{trip?.total_days} Days</div>
                </div>
                <div className="trip-info-box">
                  <label>Starting Price</label>
                  <p>
                    Rs.{" "}
                    {trip?.selling_price
                      ? Math.ceil(trip?.selling_price)?.toLocaleString("en-IN")
                      : 0}{" "}
                    /-
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ChooseTripSlider;
