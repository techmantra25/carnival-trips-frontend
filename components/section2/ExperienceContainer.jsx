"use client";
import React, { useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";

import { Modal } from "react-bootstrap";
import ExploreBookingForm from "@/app/tripcategory/[id]/ExploreBookingForm";
import { formatDuration } from "@/utils/CommonFunctions";

const ExperienceCard = ({ experienceData, destination, packageData }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="swiper-slide" style={{ cursor: show ? "default" : "pointer" }}>
      <div className="content-wrap">
        <div className="img-wrap">
          <div
            className="destination-badge"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "5px 10px",
              borderRadius: "5px",
              zIndex: 1,
              fontSize: "12px",
            }}
          >
            {experienceData?.destination_name}
          </div>
          <Image
            width={500}
            height={800}
            src={experienceData?.main_image}
            alt={experienceData?.title}
          />
        </div>
        <div className="info">
          <span className="package">{formatDuration(experienceData?.experience_durations || "")}</span>
          <Link
            href={`/itinerary/${experienceData?.slug}`}
            style={{ textDecoration: "none", color: "inherit", pointerEvents: show ? "none" : "auto" }}
            tabIndex={-1}
            className="itinerary-link"
          >
            <label className="title">{experienceData?.title}</label>
            <p className="desc">{experienceData?.short_description}.</p>
            <div className="price">
              <div className="old-price-stack">
                <span className="original-price">
                  <span>
                    ₹{Number(experienceData?.actual_price).toLocaleString("en-IN")}
                  </span>{" "}
                  (PP)
                </span>
                <span className="discount">
                  -{experienceData?.discount_value}
                  {experienceData?.discount_type === "percentage"
                    ? "%"
                    : experienceData?.discount_type === "flat"
                    ? "₹"
                    : ""}
                </span>
              </div>
              <span className="selling-price">
                ₹{Number(experienceData?.selling_price).toLocaleString("en-IN")}
              </span>
            </div>
          </Link>
          <div className="list-cta">
            <a
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleShow();
              }}
              className="cta"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* React Bootstrap Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="md"
        className="booking-modal"
      >
        <Modal.Body>
          <ExploreBookingForm
            itineraryData={experienceData}
            destination={destination}
            packageData={packageData}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};


const ExperienceContainer = ({ experiences, offers }) => {
  return (
    <div className="inner-section inner-section-2">
      <section>
        <div className="content">
          <ExperiencePackageList experiences={experiences} offers={offers} />
        </div>
      </section>
    </div>
  );
};

export default ExperienceContainer;

const ExperiencePackageList = ({ experiences: experiencesData, offers }) => {
  const experienceCategories = experiencesData?.experience_categories || [];

  return (
    <div className="inner-section content-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {experienceCategories.map((category, index) => (
              <React.Fragment key={category.category_id || index}>
                <ExperienceCategory category={category} />
                <BannerContainer BannerElement={offers[index]} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceCategory = ({ category }) => {
  const uniqueId = useId();
  const [showGrid, setShowGrid] = useState(false);

  const experiences = category.experiences || [];

  const nextClass = `listing-content-next-${uniqueId}`;
  const prevClass = `listing-content-prev-${uniqueId}`;

  if (experiences.length === 0) {
    return null;
  }

  return (
    <div className="category-section mb-5">
      <div className="section-heading">
        <h2 className="text-capitalize">{category.category_name}</h2>
        {experiences.length > 4 && (
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
              {experiences.map((experience) => (
                <SwiperSlide key={experience.exp_id}>
                  <ExperienceCard experienceData={experience} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="listing-content-swiper-nav">
            <div
              className={`swiper-button-next listing-content-next listing-content1-next ${nextClass}`}
            >
              <img src="/assets/icons/slider-angle-right.png" alt="next" />
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
          {experiences.map((experience) => (
            <div className="col-md-3 col-sm-6 mb-3" key={experience.exp_id}>
              <ExperienceCard experienceData={experience} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BannerContainer = ({ BannerElement }) => {
  // Extract relative path from full link
  const relativeLink = BannerElement?.link
    ? new URL(BannerElement.link).pathname
    : null;

  if (!BannerElement || !BannerElement.image) {
    return null; // Return null if BannerElement or image is not available
  }

  return (
    <div
      className="inner-section campaign-section"
      title={BannerElement?.title}
      style={{ cursor: relativeLink ? "pointer" : "default" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="campaign-box">
              {relativeLink ? (
                <Link href={relativeLink}>
                  <Image
                    width={1231}
                    height={367}
                    src={BannerElement?.image || "/assets/images/banner.png"}
                    alt={BannerElement?.title || "Banner"}
                    layout="responsive"
                  />
                </Link>
              ) : (
                <Image
                  width={1231}
                  height={367}
                  src={BannerElement?.image}
                  alt={BannerElement?.title || "Banner"}
                  layout="responsive"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};