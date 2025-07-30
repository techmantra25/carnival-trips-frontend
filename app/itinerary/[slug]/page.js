export const dynamic = "force-dynamic";

import { getItinerariesDetails } from "@/api/itinaryApi";
import React from "react";
import Gallery from "./Gallery";
import TitleRow from "./TitleRow";
import TopCities from "./TopCities";
import BookingForm from "@/utils/BookingForm";
import Image from "next/image";
import EnqueryBox from "./EnqueryBox";
import BestSelling from "./BestSelling";

const Detailspage = async ({ params }) => {
  const slug = await params?.slug;
  const ItineryData = await getItinerariesDetails(slug);

  console.log(ItineryData, "ItineryData");

  return (
    <div className="detail-content">
      <Gallery ItineryData={ItineryData} />
      <section className="detail-content-section">
        <div className="container">
          <div className="row">
            <TitleRow ItineryData={ItineryData} slug={slug} />
            <div className="col-lg-4 col-12">
              <div className="detail-content-right">
                  <a href="#booking-form-section">
                    {/* <Image
                      src="//assets/images/campaign-enquery.png"
                      alt="Enquery"
                      width={416}
                      height={348}
                    /> */}
                    <EnqueryBox ItineryData={ItineryData} />
                  </a>
                <div
                  // className="information-form-block"
                  id="booking-form-section"
                >
                  <BookingForm
                    itineraryData={ItineryData}
                    destination={ItineryData?.destination}
                    packageData={ItineryData?.packages}
                  />
                </div>
                <TopCities ItineryData={ItineryData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="best-selling-packages-section">
        {/* <div className="background">
          <img src="/assets/images/section-4-bg.png" alt="" />
        </div>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center">Best Selling Packages</h2>
                <div className="swiper listing-content-swiper listing-content6-swiper">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="content-wrap">
                        <div className="nights-days">
                          <span>4 Night / 5 Days</span>
                        </div>
                        <div className="img-wrap">
                          <img
                            src="/assets/images/list1-slide1.webp"
                            alt="Place"
                          />
                        </div>
                        <div className="info">
                          <label className="title">
                            Lorem ipsum dolor sit at, consectetur
                          </label>
                          <p className="desc">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt .
                          </p>
                          <div className="price">
                            <span className="discount">-15%</span>
                            <span className="selling-price">₹17,100</span>
                            <span className="original-price">
                              <span>₹20,000</span> (PP)
                            </span>
                          </div>
                          <div className="list-cta">
                            <a href="javscript:void(0)" className="cta">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="content-wrap">
                        <div className="nights-days">
                          <span>4 Night / 5 Days</span>
                        </div>
                        <div className="img-wrap">
                          <img
                            src="/assets/images/list1-slide2.webp"
                            alt="Place"
                          />
                        </div>
                        <div className="info">
                          <label className="title">
                            Lorem ipsum dolor sit at, consectetur
                          </label>
                          <p className="desc">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt .
                          </p>
                          <div className="price">
                            <span className="discount">-15%</span>
                            <span className="selling-price">₹17,100</span>
                            <span className="original-price">
                              <span>₹20,000</span> (PP)
                            </span>
                          </div>
                          <div className="list-cta">
                            <a href="javscript:void(0)" className="cta">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="content-wrap">
                        <div className="nights-days">
                          <span>4 Night / 5 Days</span>
                        </div>
                        <div className="img-wrap">
                          <img
                            src="/assets/images/list1-slide3.webp"
                            alt="Place"
                          />
                        </div>
                        <div className="info">
                          <label className="title">
                            Lorem ipsum dolor sit at, consectetur
                          </label>
                          <p className="desc">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt .
                          </p>
                          <div className="price">
                            <span className="discount">-15%</span>
                            <span className="selling-price">₹17,100</span>
                            <span className="original-price">
                              <span>₹20,000</span> (PP)
                            </span>
                          </div>
                          <div className="list-cta">
                            <a href="javscript:void(0)" className="cta">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cta-row">
                  <a href="javasript:void(0)">Export All</a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <BestSelling ItineryData={ItineryData} />
      </section>
    </div>
  );
};

export default Detailspage;
