"use client";

import { convertToShortDuration } from "@/utils/CommonFunctions";
import { useState } from "react";
import TripSummary from "./TripSummary";
import DetailsButton from "./components/DetailsButton";
import ChooseTripSlider from "./ChooseTripSlider";
import StayCategory from "./StayCategory";
import StayAndSummaryConatiner from "./StayAndSummaryConatiner";
import LocationDetails from "./LocationDetails";
//import { useRouter } from "next/navigation";

const TitleRow = ({ ItineryData, slug }) => {
  const [showExclusions, setShowExclusions] = useState({});

  const toggleExclusions = (index) => {
    setShowExclusions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="col-lg-8 col-12">
      <div className="detail-content-left">
        <h1 className="content-heading content-heading-details">
          {ItineryData?.title || "No Title"}
        </h1>
        <div className="short-info-panel">
          <div className="info-row-1">
            <div className="info-stack-wrapper">
              <span className="icon">
                <img src="/assets/icons/clock.png" alt="Clock" />
              </span>
              <span className="daynight">
                {convertToShortDuration(ItineryData?.trip_durations) ||
                  "No Duration"}
              </span>
            </div>
            <div  className="days-detail">
            {ItineryData?.division_summary?.map((ele, index) => (
              
                <ul>
                  <li key={index}>
                    <span>{ele?.day || 0}D {" "} {ele?.city || "No Location"}</span>
                    {/* <span className="line-1">D</span> */}
                    {/* <span className="line-2">{ele?.city || "No Location"}</span> */}
                  </li> 
                </ul>
              
            ))}
            </div>
            {ItineryData?.division_summary?.map((ele, index) => (
              <div className="days-detail" key={index}>
                <div className="day-count">{ele?.day || 0}</div>
                <div className="day-location">
                  <span className="line-1">Day in</span>
                  <span className="line-2">{ele?.city || "No Location"}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="info-row-2">
            <ul className="list-of-facilities">
              <li>
                <div className="content-wrap">
                  <div className="img-wrap">
                    <img src="/assets/icons/car-white.png" alt="Transfer" />
                  </div>
                  <span>Transfer</span>
                </div>
              </li>
              <li>
                <div className="content-wrap">
                  <div className="img-wrap">
                    <img src="/assets/icons/bed-white.png" alt="Transfer" />
                  </div>
                  <span>Stay</span>
                </div>
              </li>
              <li>
                <div className="content-wrap">
                  <div className="img-wrap">
                    <img
                      src="/assets/icons/breakfast-white.png"
                      alt="Transfer"
                    />
                  </div>
                  <span>Bearkfast</span>
                </div>
              </li>
              <li>
                <div className="content-wrap">
                  <div className="img-wrap">
                    <img
                      src="/assets/icons/binoculars-white.png"
                      alt="Transfer"
                    />
                  </div>
                  <span>Sightseeing</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="details-stack">
          <h2 className="details-sub-heading">
            About {ItineryData?.destination_name} Tour Packages
          </h2>
          
          <div
            dangerouslySetInnerHTML={{ __html: ItineryData?.about_destination }}
          />
        </div> */}
        <LocationDetails ItineryData={ItineryData} />

        <div className="content-wrap-box popular-packages popular-packages-stack">
          <h2 className="details-sub-heading">
            Popular {ItineryData?.destination_name} Tour Packages
          </h2>
          <div className="table-responsive">
            <table className="w-100">
              <thead>
                <tr>
                  <th>{ItineryData?.destination_name} Packages</th>
                  <th>Price</th>
                  <th>Nights</th>
                  <th>Facilities</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {ItineryData?.popular_packages?.length > 0 ? (
                  ItineryData?.popular_packages?.map((ele, index) => (
                    <tr key={index}>
                      <td className="location">{ele?.title}</td>
                      <td className="price">
                        {Number(ele?.selling_price).toLocaleString("en-IN")}
                      </td>
                      <td className="daynight">
                        <span>{ele?.nights}</span>Nights
                      </td>
                      <td className="facility">
                        <div style={{ marginBottom: "8px" }}>
                          <strong
                            style={{ color: "#2e7d32", fontSize: "14px" }}
                          >
                            ✓ Inclusions:
                          </strong>
                          <div style={{ marginTop: "4px" }}>
                            {ele?.inclusion_exclusion?.inclusions?.join(", ") ||
                              "No Inclusions"}
                          </div>
                        </div>

                        {/* Exclusions Section - Hidden by default */}
                        <div
                          style={{
                            overflow: "hidden",
                            maxHeight: showExclusions[index] ? "200px" : "0",
                            transition:
                              "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
                            opacity: showExclusions[index] ? 1 : 0,
                            marginBottom: showExclusions[index] ? "8px" : "0",
                          }}
                        >
                          <strong
                            style={{ color: "#d32f2f", fontSize: "14px" }}
                          >
                            ✗ Exclusions:
                          </strong>
                          <div style={{ marginTop: "4px" }}>
                            {ele?.inclusion_exclusion?.exclusions?.join(", ") ||
                              "No Exclusions"}
                          </div>
                        </div>

                        {/* Toggle Button */}
                        <button
                          onClick={() => toggleExclusions(index)}
                          style={{
                            background: showExclusions[index]
                              ? "linear-gradient(135deg, #f44336 0%, #d32f2f 100%)"
                              : "linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "20px",
                            padding: "4px 12px",
                            fontSize: "11px",
                            fontWeight: 600,
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            marginBottom: "8px",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "scale(1.05)";
                            e.target.style.boxShadow =
                              "0 4px 8px rgba(0,0,0,0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow =
                              "0 2px 4px rgba(0,0,0,0.2)";
                          }}
                        >
                          {showExclusions[index]
                            ? "Hide Exclusions"
                            : "Show Exclusions"}
                        </button>

                        <div>
                          {ele?.tags?.map((tag, idx) => (
                            <span
                              key={idx}
                              className="tag"
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                background: "#fff",
                                color: "#D2042D",
                                borderRadius: "12px",
                                padding: "2px 8px 2px 4px",
                                marginRight: "4px",
                                fontSize: "10px",
                                fontWeight: 600,
                                marginBottom: "3px",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.10)",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                                border: "1px solid #D2042D",
                                cursor: "default",
                                transition: "all 0.3s ease",
                                animation: `fadeInUp 0.3s ease ${
                                  idx * 0.1
                                }s both`,
                              }}
                              onMouseEnter={(e) => {
                                e.target.style.transform =
                                  "translateY(-2px) scale(1.05)";
                                e.target.style.boxShadow =
                                  "0 4px 8px rgba(210,4,45,0.15)";
                                e.target.style.background = "#fff";
                              }}
                              onMouseLeave={(e) => {
                                e.target.style.transform =
                                  "translateY(0) scale(1)";
                                e.target.style.boxShadow =
                                  "0 2px 4px rgba(0,0,0,0.10)";
                                e.target.style.background = "#fff";
                              }}
                            >
                              <span
                                style={{
                                  display: "inline-block",
                                  width: "8px",
                                  height: "8px",
                                  borderRadius: "50%",
                                  background: "#D2042D",
                                  marginRight: "6px",
                                }}
                              />
                              {tag?.title}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="cta-td">
                        <DetailsButton text="Details" element={ele} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      No Popular Packages Available till now
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="trip-duration-block">
          <h2 className="details-sub-heading">Choose Trip Duration</h2>
          <ChooseTripSlider ItineryData={ItineryData} slug={slug} />
        </div>
        <div className="stay-category-block">
          <h2 className="details-sub-heading">Stay Category</h2>
          {/* <ul className="stay-category-tabs">
            <li>
              <a href="javascript:void(0)">Standard</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="active">
                <img
                  src="assets/images/orange-circle-white-tick.png"
                  alt="Tick"
                />
                Delexue
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">Premium</a>
            </li>
          </ul>
          <div className="stay-category-tabpane">
            <div className="stay-category-content-box">
              <ul className="itinerary-list">
                <li>
                  <div className="itinerary-row">
                    <div className="itinerary-id">Itinerary 1</div>
                    <div className="itinerary-item active">Trip Summary</div>
                    <div className="itinerary-item">
                      Activities &amp; Experience
                    </div>
                    <div className="itinerary-item">Transfer</div>
                  </div>
                </li>
                <li>
                  <div className="itinerary-row">
                    <div className="itinerary-id">Itinerary 1</div>
                    <div className="itinerary-item">Trip Summary</div>
                    <div className="itinerary-item">
                      Activities &amp; Experience
                    </div>
                    <div className="itinerary-item">Transfer</div>
                  </div>
                </li>
                <li>
                  <div className="itinerary-row">
                    <div className="itinerary-id">Itinerary 1</div>
                    <div className="itinerary-item">Trip Summary</div>
                    <div className="itinerary-item">
                      Activities &amp; Experience
                    </div>
                    <div className="itinerary-item">Transfer</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>  */}
          {/* <StayCategory ItineryData={ItineryData} slug={slug}/>
          <TripSummary ItineryData={ItineryData} /> */}
          <StayAndSummaryConatiner ItineryData={ItineryData} slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default TitleRow;
