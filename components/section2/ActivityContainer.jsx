"use client";
import React, { useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ActivityCard from "./ActivityCard";

const ActivityContainer = ({ activities, offers }) => {
  return (
    <div className="inner-section inner-section-2">
      <section>
        <div className="content">
          <ActivityPackageList activities={activities} offers={offers} />
        </div>
      </section>
    </div>
  );
};

export default ActivityContainer;

const ActivityPackageList = ({ activities, offers }) => {
  console.log("Offers:", offers);
  console.log("Activities:", activities);
  return (
    <>
      {activities &&
        activities.length > 0 &&
        activities.map((destination, index) => (
          <React.Fragment key={destination.destination_id || index}>
            <ActivityPackageInfo
              packageData={destination}
              destination={destination}
            />
            {/* <BannerContainer BannerElement={offers[index]} /> */}
          </React.Fragment>
        ))}
    </>
  );
};

const ActivityPackageInfo = ({ packageData, destination }) => {
  return (
    <div className="inner-section content-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">
              <h2>{packageData?.destination_name}</h2>
            </div>
            {packageData.activity_categories?.map((category) => (
              <ActivityCategory
                key={category.category_id}
                category={category}
                destination={destination}
                packageData={packageData}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityCategory = ({ category, destination, packageData }) => {
  const uniqueId = useId();
  const [showGrid, setShowGrid] = useState(false);

  const activities = category.activities || [];

  const nextClass = `listing-content-next-${uniqueId}`;
  const prevClass = `listing-content-prev-${uniqueId}`;

  if (activities.length === 0) {
    return null;
  }

  return (
    <div className="category-section mb-5">
      <div className="section-heading">
        <h4>{category.category_name}</h4>
        {activities.length > 4 && (
          <a
            href="#"
            className="section-cta"
            onClick={(e) => {
              e.preventDefault();
              setShowGrid(!showGrid);
            }}
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
                320: { slidesPerView: 1 },
                575: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {activities.map((activity) => (
                <SwiperSlide key={activity.id}>
                  <ActivityCard
                    activityData={activity}
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
          {activities.map((activity) => (
            <div
              className="col-md-3 col-sm-6 mb-3"
              key={activity.id}
            >
              <ActivityCard
                activityData={activity}
                destination={destination}
                packageData={packageData}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
