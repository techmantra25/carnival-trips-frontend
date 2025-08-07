"use client";
import BookingForm from "@/utils/BookingForm";
import { formatDuration } from "@/utils/CommonFunctions";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ExploreBookingForm from "@/app/tripcategory/[id]/ExploreBookingForm";
import Link from "next/link";

const ActivityCard = ({ activityData, destination, packageData }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="swiper-slide" style={{ cursor: show ? "default" : "default" }}>
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
            {activityData?.destination_name}
          </div>
          {/* <Link
            href={`/itinerary/${activityData?.slug}`}
            style={{ display: "block", pointerEvents: show ? "none" : "auto" }}
            tabIndex={-1}
            className="itinerary-link"
          > */}
            <Image
              width={500}
              height={800}
              src={activityData?.main_image}
              alt={activityData?.title}
            />
          {/* </Link> */}
        </div>
        <div className="info">
          <span className="package">{formatDuration(activityData?.activity_durations || "")}</span>
          {/* <Link
            href={`/itinerary/${activityData?.slug}`}
            style={{ textDecoration: "none", color: "inherit", pointerEvents: show ? "none" : "auto" }}
            tabIndex={-1}
            className="itinerary-link"
          > */}
            <label className="title">{activityData?.title}</label>
            <p className="desc">{activityData?.short_description}.</p>
            <div className="price">
              <div className="old-price-stack">
                <span className="original-price">
                  <span>
                    ₹{Number(activityData?.actual_price).toLocaleString("en-IN")}
                  </span>{" "}
                  (PP)
                </span>
                <span className="discount">
                  -{activityData?.discount_value}
                  {activityData?.discount_type === "percentage"
                    ? "%"
                    : activityData?.discount_type === "flat"
                    ? "₹"
                    : ""}
                </span>
              </div>
              <span className="selling-price">
                ₹{Number(activityData?.selling_price).toLocaleString("en-IN")}
              </span>
            </div>
          {/* </Link> */}
          {/* <div className="list-cta">
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
          </div> */}
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
            itineraryData={activityData}
            destination={destination}
            packageData={packageData}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ActivityCard;
