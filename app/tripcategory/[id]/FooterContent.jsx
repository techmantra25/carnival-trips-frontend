"use client";
import { useEffect, useState } from "react";
import { getAllTripCategories } from "@/api/tripApi";
import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const FooterContent = ({ ItineryData, slug }) => {
  const [allCategories, setAllCategories] = useState([]);

  async function AllTripCategories() {
    try {
      const response = await getAllTripCategories();
      if (response?.data) {
        setAllCategories(response.data);
      }
    } catch (error) {
      console.error("Failed to fetch trip categories:", error);
    }
  }

  useEffect(() => {
    AllTripCategories();
  }, [slug]);

  return (
    <>
      <section className="listing-section-3">
        <div className="background">
          <img src="/assets/images/listing-section-3-bg.png" alt="" />
        </div>
        <div className="content">
          <div className="container">
            <div className="row mb-4">
              <div className="col-12 text-center mb-3 mt-4">
                {/* <h2 className="section-title" style={{ color: "#fff" }}>
                  Trip Support Services
                </h2> */}
                {/* <h3 style={{ color: "rgba(255, 255, 255, 0.85)",marginTop: "20px" }}>
                  Explore our other trip categories
                </h3> */}
              </div>
            </div>
            <div className="row justify-content-center">
              {!ItineryData?.supports?.length &&
                allCategories.length > 0 && (
                  <div className="col-12">
                    <Swiper
                      spaceBetween={24}
                      slidesPerView={4}
                      modules={[Navigation]}
                      navigation
                      breakpoints={{
                        320: { slidesPerView: 1 },
                        575: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                        1200: { slidesPerView: 4 },
                      }}
                      style={{ padding: "20px 0" }}
                    >
                      {allCategories
                        // .filter((category) => category.slug !== slug)
                        .map((category, idx) => (
                          <SwiperSlide key={`category-${idx}`}>
                            <Link
                              href={`/tripcategory/${category.slug}`}
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                className="support-card p-3 h-100 text-center d-flex flex-column align-items-center justify-content-center"
                                style={{
                                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                                  borderRadius: "12px",
                                  backdropFilter: "blur(8px)",
                                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                  transition: "transform 0.3s ease",
                                  cursor: "pointer",
                                  minHeight: "260px",
                                  maxWidth: "320px",
                                  margin: "0 auto",
                                }}
                              >
                                <div className="mb-3">
                                  <img
                                    src={
                                      category.activities?.[0]?.logo ||
                                      "/assets/icons/support.png"
                                    }
                                    alt="Support"
                                    style={{
                                      width: "60px",
                                      height: "60px",
                                      objectFit: "contain",
                                      filter: "brightness(1.2)",
                                    }}
                                  />
                                </div>
                                <h3
                                  className="title"
                                  style={{
                                    color: "#fff",
                                    fontWeight: "600",
                                    fontSize: "20px",
                                  }}
                                >
                                  {category.title}
                                </h3>
                                <p
                                  className="desc"
                                  style={{
                                    color: "rgba(255, 255, 255, 0.9)",
                                    fontSize: "14px",
                                  }}
                                >
                                  {category.short_desc?.substring(0, 80)}...
                                </p>
                              </div>
                            </Link>
                          </SwiperSlide>
                        ))}
                    </Swiper>
                  </div>
                )}
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .support-card {
          transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            background 0.3s;
        }
        .support-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
          background: rgba(255, 255, 255, 0.32);
          border: 1.5px solid #fff3;
        }
      `}</style>
    </>
  );
};

export default FooterContent;
