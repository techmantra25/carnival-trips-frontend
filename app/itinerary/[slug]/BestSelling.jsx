"use client";

import React, { useId, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BookingForm from "@/utils/BookingForm";
import { Modal } from "react-bootstrap";
import Link from "next/link";

//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide1.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide2.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide3.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide3.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide3.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
//   {
//     nightsDays: "4 Night / 5 Days",
//     img: "/assets/images/list1-slide3.webp",
//     title: "Lorem ipsum dolor sit at, consectetur",
//     desc: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt .",
//     discount: "-15%",
//     sellingPrice: "₹17,100",
//     originalPrice: "₹20,000",
//   },
// ];

const BestSelling = ({ ItineryData }) => {
  const uniqueId = useId();
  const nextClass = `listing-content6-next-${uniqueId}`;
  const prevClass = `listing-content6-prev-${uniqueId}`;

  const bestSellingPackages = ItineryData?.best_selling_packages || [];

  // Modal state
  const [show, setShow] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState(null);

  const handleShow = (pkg) => {
    setSelectedPkg(pkg);
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    setSelectedPkg(null);
  };

  return (
    <>
      <div className="background">
        <img src="/assets/images/section-4-bg.png" alt="" />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center mb-4 mb-md-5">Best Selling Packages</h2>
              <div className="swiper listing-content-swiper listing-content6-swiper">
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
                  {bestSellingPackages.map((pkg, idx) => (
                    <SwiperSlide key={pkg.id || idx}>
                      <div className="content-wrap" style={{ cursor: show ? "default" : "pointer" }}>
                        {/* <div className="nights-days">
                          <span>
                            {pkg.trip_durations ||
                              `${pkg.total_nights} Nights / ${pkg.total_days} Days`}
                          </span>
                        </div> */}
                        <div className="img-wrap">
                          <Link
                            href={`/itinerary/${pkg.slug}`}
                            style={{ display: "block", pointerEvents: show ? "none" : "auto" }}
                            tabIndex={-1}
                            className="itinerary-link"
                          >
                            <img src={pkg.main_image} alt={pkg.title} />
                          </Link>
                        </div>
                        <div className="info">
                          <span className="package">
                            {pkg.trip_durations ||
                              `${pkg.total_nights} Nights / ${pkg.total_days} Days`}
                          </span>
                          <Link
                            href={`/itinerary/${pkg.slug}`}
                            style={{ textDecoration: "none", color: "inherit", pointerEvents: show ? "none" : "auto" }}
                            tabIndex={-1}
                            className="itinerary-link"
                          >
                            <label className="title">{pkg.title}</label>
                            <p className="desc">{pkg.short_description}</p>
                            <div className="price">
                              <div className="old-price-stack">
                                <span className="original-price">
                                  <span>
                                    ₹{Number(pkg.actual_price).toLocaleString()}
                                  </span>{" "}
                                  (PP)
                                </span>
                                <span className="discount">
                                  {pkg.discount_type === "percentage"
                                    ? `-${pkg.discount_value}%`
                                    : pkg.discount_type === "flat"
                                    ? `-₹${pkg.discount_value}`
                                    : ""}
                                </span>
                              </div>

                              <span className="selling-price">
                                ₹{Number(pkg.selling_price).toLocaleString()}
                              </span>
                              
                            </div>
                          </Link>
                          <div className="list-cta">
                            <a
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                handleShow(pkg);
                              }}
                              className="cta"
                              style={{
                                textDecoration: "none",
                                cursor: "pointer",
                              }}
                            >
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="listing-content-swiper-nav">
                <div
                  className={`swiper-button-next listing-content-next listing-content6-next ${nextClass}`}
                >
                  <img src="/assets/icons/slider-angle-right.png" alt="next" />
                </div>
                <div
                  className={`swiper-button-prev listing-content-prev listing-content6-prev ${prevClass}`}
                >
                  <img src="/assets/icons/slider-angle-left.png" alt="prev" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for BookingForm */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        size="md"
        className="booking-modal"
      >
        <Modal.Body>
          <BookingForm
            itineraryData={selectedPkg}
            destination={null}
            packageData={null}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default BestSelling;
