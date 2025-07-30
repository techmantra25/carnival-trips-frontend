"use client";
import Image from "next/image";
import React, { useState, useEffect, useId } from "react";
import { Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "@/style/custom-swiper-pagination.css";

const TripSummary = ({
  ItineryData,
  activeCategory,
  activeItems,
}) => {
  // Extract division_summary from ItineryData if available, otherwise use empty array
  let divisionSummary = ItineryData?.division_summary || [];

  // Each accordion should represent a city (division_summary entry)
  // Totals are still calculated from all trip_summary entries
  const tripSummaryData = divisionSummary.flatMap(
    (city) => city.trip_summary || []
  );

  // Calculate totals for mini-info-box (all data, not filtered)
  const totalActivities = tripSummaryData.reduce(
    (sum, day) => sum + (day.activities?.length || 0),
    0
  );
  const totalTransfers = tripSummaryData.reduce(
    (sum, day) => sum + (day.transfers?.length || 0),
    0
  );
  const totalHotels = new Set(
    tripSummaryData.flatMap((day) => day.hotels?.map((h) => h.value) || [])
  ).size;

  return (
    <div className="content-wrap-box itinerary-detail-box itinerary-detail-box-stack-wrapper">
      <h2 className="details-sub-heading">Trip Summary</h2>
      <div className="mini-info-box">
        <div className="inner-info">
          <Image
            src="/assets/icons/activities.png"
            alt=""
            width={31}
            height={49}
          />
          <span>{totalActivities} activities</span>
        </div>
        <div className="inner-info">
          <Image src="/assets/icons/car.png" alt="" width={40} height={32} />
          <span>{totalTransfers} transfers</span>
        </div>
        <div className="inner-info">
          <Image src="/assets/icons/bed.png" alt="" width={39} height={31} />
          <span>{totalHotels} hotels</span>
        </div>
      </div>

      {divisionSummary && divisionSummary.length > 0 ? (
        divisionSummary.map((city, idx) => (
          <CityAccordion
            city={city}
            key={idx}
            serial={idx}
            activeSubOption={activeItems}
          />
        ))
      ) : (
        <div className="text-center py-4">
          <p>No trip summary data available</p>
        </div>
      )}
    </div>
  );
};

export default TripSummary;

// New: Accordion for each city/division_summary
const CityAccordion = ({ city, serial, activeSubOption }) => {
  // Only the first accordion (serial === 0) is open by default, others are closed
  const [isOpen, setIsOpen] = useState(serial === 0);
  const [activeDay, setActiveDay] = useState(0);
  const { city: cityName, day, trip_summary = [], banners = [] } = city || {};

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div>
      <div
        className="accordion-head"
        onClick={toggleAccordion}
        style={{ cursor: "pointer" }}
      >
        <div className="day-count">{cityName}</div>
        <div className="d-flex justify-content-between align-items-center w-100">
           <div className="location-name">
          {day} Day{day > 1 ? "s" : ""}
        </div>
        <div className="accordion-status-indicator">
          <img
            src="/assets/icons/up-angle-blue.png"
            alt="Indicator"
            style={{
              transform: isOpen ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.3s",
            }}
          />
        </div>
        </div>
        
      </div>
      {isOpen && (
        <div className="summery-stack">
          {/* Banner Slider with Swiper */}
          {banners && banners.length > 0 && (
            <div style={{ position: "relative", marginBottom: "20px" }}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={banners.length > 1}
                pagination={{ clickable: true }}
                style={{
                  borderRadius: "5px",
                  overflow: "hidden",
                  height: "250px",
                }}
              >
                {banners.map((banner, index) => (
                  <SwiperSlide key={index}>
                    <div
                      style={{
                        position: "relative",
                        height: "250px",
                        width: "100%",
                      }}
                    >
                      <Image
                        src={banner}
                        alt={`${cityName} banner ${index + 1}`}
                        fill
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* Day Tabs */}
          <div className="day-tabs"  >
            {trip_summary.map((day, idx) => (
              <div
                key={idx}
                onClick={() => setActiveDay(idx)}
                style={{
                  // padding: "10px 20px",
                  // borderRadius: "6px 6px 0 0",
                  background: activeDay === idx ? "#fff" : "transparent",
                  color: activeDay === idx ? "#1976d2" : "#000",
                  border: `1px solid ${
                    activeDay === idx ? "transparent" : "transparent"
                  }`,
                  //borderBottom: "none",
                  //cursor: "pointer",
                  //fontWeight: 600,
                 // fontSize: "14px",
                  //transition: "all 0.3s",
                  //position: "relative",
                  //top: activeDay === idx ? "2px" : "0",
                }}
              >
                Day {day.day}
              </div>
            ))}
          </div>

          {/* Active Day Content */}
          {trip_summary[activeDay] && (
            <DayContent
              dayData={trip_summary[activeDay]}
              activeSubOption={activeSubOption}
            />
          )}
        </div>
      )}
    </div>
  );
};

const DayContent = ({ dayData, activeSubOption }) => {
  const {
    title = "",
    activities = [],
    transfers = [],
    hotels = [],
  } = dayData || {};

  // Helper component for section headers
  const SectionHeader = ({ icon, text }) => (
    <div
      className="heading"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: "10px",
      //   marginBottom: "15px",
      // }}
    >
      <img
        src={`/assets/icons/${icon}.png`}
        alt=""
        
      />
      <span>
        {text}
      </span>
    </div>
  );

  // Helper component for hotel display
  const HotelDisplay = ({ hotel }) => (
    <Row
      style={{
        marginBottom: "20px",
        padding: "15px",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Col xs={5}>
        {hotel.image && (
          <Image
            src={hotel.image}
            alt={hotel.value}
            width={250}
            height={150}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        )}
      </Col>
      <Col xs={7}>
        <div style={{ padding: "10px" }}>
          <h5 style={{ marginBottom: "10px", color: "#333" }}>
            {hotel?.value}
          </h5>
          <p style={{ fontSize: "14px", color: "#666", marginBottom: "10px" }}>
            <small>{hotel?.address}</small>
          </p>
          <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.4" }}>
            {hotel?.about_hotel}
          </p>
        </div>
      </Col>
    </Row>
  );

  // Show all sections if no filter is applied
  const showAll = !activeSubOption || activeSubOption.length === 0;

  return (
    <div>
      {(showAll || activeSubOption.includes(0)) && activities.length > 0 && (
        <div className="section-group">
          <SectionHeader icon="activities" text="Activities & Experience" />
          <div className="frame-group"
            // style={{
            //   background: "#fff",
            //   borderRadius: "8px",
            //   padding: "20px",
            // }}
          >
            {activities.map((activity, index) => (
              <div className="listing-stack"
                key={index}
                style={{
                  //display: "flex",
                  //alignItems: "center",
                  //gap: "15px",
                  //padding: "10px 0",
                  // borderBottom:
                  //   index < activities.length - 1
                  //     ? "1px solid #f0f0f0"
                  //     : "none",
                }}
              >
                <img
                  src="/assets/icons/tick-circle.png"
                  alt="Bullet"
                  
                />
                <div style={{ color: "#333", lineHeight: "1.4" }}>
                  {activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {(showAll || activeSubOption.includes(1)) && transfers.length > 0 && (
        <div className="section-group">
          <SectionHeader icon="car" text="Transfers" />
          <div className="frame-group">
            {transfers.map((transfer, index) => (
              <div className="listing-stack"
                key={index}
                style={{
                  //display: "flex",
                  //alignItems: "center",
                  //gap: "15px",
                  //padding: "10px 0",
                  borderBottom:
                    index < transfers.length - 1 ? "1px solid #f0f0f0" : "none",
                }}
              >
                {/* <img
                  src="/assets/icons/tick-circle.png"
                  alt="Bullet"
                /> */}
                <div className="transfer-frame">
                  <strong style={{ color: "#1976d2" }}>
                    {transfer.cab_type}
                  </strong>
                  <div className="transfer-inner">
                    <div className="inner-stack">
                      <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div class="text">
                        {transfer.location_from}
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="inner-stack">
                      <div class="icon">
                        <i class="fa-solid fa-location-dot"></i>
                      </div>
                      <div class="text">
                        {transfer.location_to}
                      </div>
                    </div>
                  </div>

                  {/* <span style={{ color: "#666", marginLeft: "10px" }}>
                    {transfer.location_from} → {transfer.location_to}
                  </span> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {(showAll || activeSubOption.includes(2)) && hotels.length > 0 && (
        <div className="section-group">
          <SectionHeader icon="bed" text="Hotels" />
          <div className="hotel-stack">
            {hotels.map((hotel, index) => (
              <div key={index} className="card-wrap">
                <HotelCard hotel={hotel} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Add this new component after DayContent
const HotelCard = ({ hotel }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="hotel-card"
      // style={{
      //   background: "#fff",
      //   borderRadius: "8px",
      //   boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
      //   padding: "12px",
      //   marginBottom: "8px",
      //   minHeight: "100px",
      //   display: "flex",
      //   flexDirection: "column",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      // }}
    >
      {hotel.image && (
        <figure>
        <img
          src={hotel.image}
          alt={hotel.value}
          // style={{
          //   width: "100%",
          //   height: "150px",
          //   objectFit: "cover",
          //   borderRadius: "6px",
          //   marginBottom: "6px",
          // }}
        />
        </figure>
      )}
      <div className="hotel-details">
        <div className="title-info">
          <h3>
            {hotel?.value}
          </h3>
          <button onClick={() => setShowInfo((v) => !v)} >
            {showInfo ? "Hide" : "View"}
          </button>
        </div>
      
        {showInfo && (
          <div className="hidden-details">
            <div className="details-info">
              <strong>Address:</strong> 
              <p>{hotel?.address}</p>
            </div>

            <div className="details-info">
              <strong>About:</strong> 
              <p>{hotel?.about_hotel}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
