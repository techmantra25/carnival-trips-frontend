"use client";
import BookingForm from "@/utils/BookingForm";
import { formatDuration } from "@/utils/CommonFunctions";
import Image from "next/image";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Link from "next/link";

const ItinerarySlider = ({ itineraryData, destination, packageData }) => {
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
        {/* <div className="nights-days">
          <span>{formatDuration(itineraryData?.duration || "")}</span>
        </div> */}
        <div className="img-wrap">
          <Link
            href={`/itinerary/${itineraryData?.slug}`}
            style={{ display: "block", pointerEvents: show ? "none" : "auto" }}
            tabIndex={-1}
            className="itinerary-link"
          >
            <Image
              width={500}
              height={800}
              src={itineraryData?.main_image}
              alt={itineraryData?.title}
            />
          </Link>
        </div>
        <div className="info">
          <span className="package">{formatDuration(itineraryData?.duration || "")}</span>
          <Link
            href={`/itinerary/${itineraryData?.slug}`}
            style={{ textDecoration: "none", color: "inherit", pointerEvents: show ? "none" : "auto" }}
            tabIndex={-1}
            className="itinerary-link"
          >
            <label className="title">{itineraryData?.title}</label>
            <p className="desc">{itineraryData?.short_description}.</p>
            <div className="price">
              <div className="old-price-stack">
                <span className="original-price">
                  <span>
                    ₹{Number(itineraryData?.actual_price).toLocaleString("en-IN")}
                  </span>{" "}
                  (PP)
                </span>
                <span className="discount">
                  -{itineraryData?.discount_value}
                  {itineraryData?.discount_type === "percentage"
                    ? "%"
                    : itineraryData?.discount_type === "flat"
                    ? "₹"
                    : ""}
                </span>
              </div>
              <span className="selling-price">
                ₹{Number(itineraryData?.selling_price).toLocaleString("en-IN")}
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
      <Modal show={show} onHide={handleClose} centered size="md" className="booking-modal">
        <Modal.Body>
          <BookingForm
            itineraryData={itineraryData}
            destination={destination}
            packageData={packageData}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ItinerarySlider;

