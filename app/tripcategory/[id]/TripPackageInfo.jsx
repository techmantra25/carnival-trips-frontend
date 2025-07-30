"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useId, useState } from "react";
import ItinerarySlider from "@/app/destination/[slug]/ItinerarySlider";
import LocationCard from "./LocationCard";
// import ItinerarySlider from "./ItinerarySlider";

const TripPackageInfo = ({ packageData, destination }) => {
  const uniqueId = useId(); // unique ID per instance
  const [showGrid, setShowGrid] = useState(false);

  // Keep Swiper selectors unique while preserving existing CSS class names
  const nextClass = `listing-content-next-${uniqueId}`;
  const prevClass = `listing-content-prev-${uniqueId}`;

  return (
    
    <div className="inner-section content-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2>{packageData?.destination_name}</h2>
              {packageData?.packages?.length > 4 && (
                <a
                  href="javascript:void(0)"
                  className="section-cta"
                  onClick={() => setShowGrid(!showGrid)}
                >
                  {showGrid ? "Close" : "Explore all"}
                </a>
              )}
            </div>

            {!showGrid ? (
              <>
                <div className="swiper listing-content-swiper listing-content1-swiper">
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    modules={[Navigation]}
                    navigation={{
                      nextEl: `.${nextClass}`,
                      prevEl: `.${prevClass}`,
                    }}
                    breakpoints={{
                      320: {
                        slidesPerView: 1,
                      },
                      575: {
                        slidesPerView: 2,
                      },
                      1024: {
                        slidesPerView: 4,
                      },
                    }}
                  >
                    {packageData?.packages?.map((ele, index) => (
                      <SwiperSlide key={index}>
                        <LocationCard
                          itineraryData={ele}
                          destination={destination}
                          packageData={packageData}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <div className="listing-content-swiper-nav">
                  <div
                    className={`swiper-button-next listing-content-next listing-content1-next ${nextClass}`}
                  >
                    <img
                      src="/assets/icons/slider-angle-right.png"
                      alt="next"
                    />
                  </div>
                  <div
                    className={`swiper-button-prev listing-content-prev listing-content1-prev ${prevClass}`}
                  >
                    <img src="/assets/icons/slider-angle-left.png" alt="prev" />
                  </div>
                </div>
              </>
            ) : (
              <div className="itinerary-grid row swiper listing-content-swiper listing-content1-swiper">
                {packageData?.packages?.map((ele, index) => (
                  <div className="col-md-3 col-sm-6 mb-3" key={index}>
                    <LocationCard
                      itineraryData={ele}
                      destination={destination}
                      packageData={packageData}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPackageInfo;
