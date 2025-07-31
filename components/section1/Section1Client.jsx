"use client";

import Image from "next/image";
import { use, useState } from "react";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import DestinationSearch from "./DestinationSearch";
import TextSlider from "./TextSlider";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function Section1Client({ tripsCategories, homePageBannerData }) {
  const [activeTab, setActiveTab] = useState(tripsCategories[0]);
  const [selectedTab, setSelectedTab] = useState("tours");

  const Router = useRouter();

  function splitByWordCount(text = "", maxWordsPerChunk = 3) {
    if (typeof text !== "string") return [];

    const words = text.split(/\s+/).filter(Boolean);
    const chunks = [];

    for (let i = 0; i < words.length; i += maxWordsPerChunk) {
      const chunk = words.slice(i, i + maxWordsPerChunk).join(" ");
      chunks.push(chunk);
    }

    return chunks;
  }

  const title =
    "I came, I saw, I captured Exploring the unexplored Challenging the unchallenged Bonding with people Creating memories";
  const result = splitByWordCount(homePageBannerData?.title || title, 3);

 

  return (
    <section className="section-1">
      <div className="background">
        <Image
          width={1000}
          height={750}
          src="/assets/images/banner.png"
          alt="Banner"
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="row top-row">
            <div className="col-lg-6 col-12">
              <div className="left-content">
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  {tripsCategories?.map((tab) => (
                    <button
                      key={tab.id}
                      className={`nav-link ${
                        activeTab?.id === tab.id ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(tab)}
                      data-bs-toggle="tab"
                      data-bs-target={`#tab-${tab.id}`}
                    >
                      {tab.title}
                      <Image
                        width={8}
                        height={8}
                        src="/assets/icons/down-angle-white.png"
                        alt="down"
                      />
                    </button>
                  ))}
                </div>

                <div className="tab-content" id="nav-tabContent">
                  {activeTab && (
                    <div
                      // className={`tab-pane fade`}
                      // id={`tab-${activeTab.id}`}
                      className="tab-pane-content-wrapper"
                    >
                      <div className="tab-pane-content">
                        <div className={`swiper trips-swiper domesticTrips`}>
                          <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={36}
                            loop={true}
                            autoplay={{
                              delay: 0,
                              disableOnInteraction: false,
                            }}
                            speed={2000}
                            slidesPerView={3}
                            navigation={{
                              nextEl: `.trips-swiper-button-next-${activeTab?.id}`,
                              prevEl: `.trips-swiper-button-prev-${activeTab?.id}`,
                            }}
                            breakpoints={{
                              320: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                              },
                              768: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                              },
                              1199: {
                                slidesPerView: 3,
                                spaceBetween: 36,
                              },
                            }}
                            className="swiper-wrapper"
                          >
                            {(() => {
                              let items = [];
                              let type = "";

                              if (selectedTab === "tours") {
                                items = activeTab?.destinations || [];
                                type = "name";
                              } else if (selectedTab === "activities") {
                                items = activeTab?.activities || [];
                                type = "activity_name";
                              } else if (selectedTab === "experiences") {
                                items = activeTab?.experiences || [];
                                type = "experiences_name";
                              }

                              if (items.length === 0) {
                                return (
                                  <SwiperSlide>
                                    <p className="no-places">
                                      No{" "}
                                      {selectedTab.charAt(0).toUpperCase() +
                                        selectedTab.slice(1)}{" "}
                                      available.
                                    </p>
                                  </SwiperSlide>
                                );
                              }

                              return items.map((place, index) =>
                                selectedTab === "tours" ? (
                                  <SwiperSlide key={index} style={{ cursor: "pointer" }}>
                                    <Link
                                      href={`/destination/${place.slug}`}
                                      style={{ textDecoration: "none", color: "inherit" }}
                                    >
                                      <div className="place-img">
                                        <Image
                                          width={50}
                                          height={50}
                                          src={
                                            place?.logo ||
                                            "/assets/images/banner.png"
                                          }
                                          alt={place?.name || place?.[type]}
                                        />
                                      </div>
                                      <div className="place-name">
                                        {place?.[type]}
                                      </div>
                                    </Link>
                                  </SwiperSlide>
                                ) : (
                                  <SwiperSlide
                                    key={index}
                                    style={{
                                      cursor: "default",
                                    }}
                                  >
                                    <div className="place-img">
                                      <Image
                                        width={50}
                                        height={50}
                                        src={
                                          place?.logo ||
                                          "/assets/images/banner.png"
                                        }
                                        alt={place?.name || place?.[type]}
                                      />
                                    </div>
                                    <div className="place-name">
                                      {place?.[type]}
                                    </div>
                                  </SwiperSlide>
                                )
                              );
                            })()}
                          </Swiper>
                        </div>

                        {/* Custom Navigation Buttons */}
                        <div
                          className={`swiper-button-next trips-swiper-button-next trips-swiper-button-next-${activeTab.id}`}
                        >
                          <Image
                            height={20}
                            width={20}
                            src="/assets/icons/angle-right.png"
                            alt="Next slide"
                          />
                        </div>
                        <div
                          className={`swiper-button-prev trips-swiper-button-prev trips-swiper-button-prev-${activeTab.id}`}
                        >
                          <Image
                            height={20}
                            width={20}
                            src="/assets/icons/angle-left.png"
                            alt="Previous slide"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="right-content">
                <ul className="nav">
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("tours")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "tours" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Tours
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("activities")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "activities" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Activities
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("experiences")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "experiences" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Experiences
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row bottom-row">
            <div className="col-lg-6 col-12">
              <div className="vertical-text-slider-wrapper">
                <TextSlider
                  textArray={splitByWordCount(
                    homePageBannerData?.title || "Header Text",
                    2
                  )}
                />
              </div>

              <DestinationSearch />

              <div className="right-content">
                <ul className="nav">
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("tours")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "tours" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Tours
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("activities")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "activities" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Activities
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    onClick={() => setSelectedTab("experiences")}
                  >
                    <a
                      className={`nav-link ${
                        selectedTab === "experiences" ? "active" : ""
                      }`}
                      href="#"
                    >
                      Experiences
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Section1() {
//   const [activeTab, setActiveTab] = useState("domestic");

//   const domesticTrips = [
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//   ];

//   const internationalTrips = [
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//     { id: 1, image: "/assets/icons/Agra.png", name: "Agra" },
//     { id: 2, image: "/assets/icons/Goa.png", name: "Goa" },
//     { id: 3, image: "/assets/icons/Darjelling.png", name: "Darjeeling" },
//     { id: 4, image: "/assets/icons/Gangtok.png", name: "Gangtok" },
//     { id: 5, image: "/assets/icons/Asam.png", name: "Assam" },
//   ];

//   return (
//     <section className="section-1">
//       <div className="background">
//         <Image
//           width={1000}
//           height={750}
//           src="/assets/images/banner.png"
//           alt="Banner"
//         />
//       </div>
//       <div className="content">
//         <div className="container">
//           <div className="row top-row">
//             <div className="col-lg-6 col-12">
//               <div className="left-content">
//                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
//                   <button
//                     className={`nav-link ${
//                       activeTab === "domestic" ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab("domestic")}
//                     data-bs-toggle="tab"
//                     data-bs-target="#nav-domestic"
//                   >
//                     Domestic Trips
//                     <Image
//                       width={8}
//                       height={8}
//                       src="/assets/icons/down-angle-white.png"
//                       alt="down"
//                     />
//                   </button>
//                   <button
//                     className={`nav-link ${
//                       activeTab === "international" ? "active" : ""
//                     }`}
//                     onClick={() => setActiveTab("international")}
//                     data-bs-toggle="tab"
//                     data-bs-target="#nav-international"
//                   >
//                     International Trips
//                     <Image
//                       width={8}
//                       height={8}
//                       src="/assets/icons/down-angle-white.png"
//                       alt="down"
//                     />
//                   </button>
//                 </div>
//                 <div className="tab-content" id="nav-tabContent">
//                   <div
//                     className={`tab-pane fade ${
//                       activeTab === "domestic" ? "show active" : ""
//                     }`}
//                     id="nav-domestic"
//                   >
//                     <div className="tab-pane-content">
//                       <div className="swiper trips-swiper domesticTrips">
//                         <Swiper
//                           modules={[Navigation]}
//                           spaceBetween={2}
//                           slidesPerView={5}
//                           navigation={{
//                             nextEl: ".domestic-trips-swiper-button-next",
//                             prevEl: ".domestic-trips-swiper-button-prev",
//                           }}
//                           className="swiper-wrapper"
//                         >
//                           {domesticTrips.map((place, index) => (
//                             <SwiperSlide key={index} className="swiper-slide">
//                               <div className="place-img">
//                                 <Image
//                                   width={50}
//                                   height={50}
//                                   src={place?.image}
//                                   alt={place?.id}
//                                 />
//                               </div>
//                               <div className="place-name">{place?.name}</div>
//                             </SwiperSlide>
//                           ))}
//                         </Swiper>
//                       </div>

//                       {/* Custom Navigation Buttons */}
//                       <div className="swiper-button-next trips-swiper-button-next domestic-trips-swiper-button-next">
//                         <Image
//                           height={20}
//                           width={20}
//                           src="/assets/icons/angle-right.png"
//                           alt="Next slide"
//                         />
//                       </div>
//                       <div className="swiper-button-prev trips-swiper-button-prev domestic-trips-swiper-button-prev">
//                         <Image
//                           height={20}
//                           width={20}
//                           src="/assets/icons/angle-left.png"
//                           alt="Previous slide"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div
//                     className={`tab-pane fade ${
//                       activeTab === "international" ? "show active" : ""
//                     }`}
//                     id="nav-international"
//                   >
//                     <div className="tab-pane-content">
//                       <div className="swiper trips-swiper internationalTrips">
//                         <Swiper
//                           modules={[Navigation]}
//                           spaceBetween={2}
//                           slidesPerView={5}
//                           className="swiper-wrapper"
//                           navigation={{
//                             nextEl: ".domestic-trips-swiper-button-next",
//                             prevEl: ".domestic-trips-swiper-button-prev",
//                           }}
//                         >
//                           {internationalTrips.map((place, index) => (
//                             <SwiperSlide key={index} className="swiper-slide">
//                               <div className="place-img">
//                                 <Image
//                                   width={50}
//                                   height={50}
//                                   src={place?.image}
//                                   alt={
//                                     place?.name ||
//                                     `International destination ${index + 1}`
//                                   }
//                                 />
//                               </div>
//                               <div className="place-name">{place?.name}</div>
//                             </SwiperSlide>
//                           ))}
//                         </Swiper>
//                       </div>
//                       {/* Custom Navigation Buttons */}
//                       <div className="swiper-button-next trips-swiper-button-next domestic-trips-swiper-button-next">
//                         <Image
//                           height={20}
//                           width={20}
//                           src="/assets/icons/angle-right.png"
//                           alt="Next slide"
//                         />
//                       </div>
//                       <div className="swiper-button-prev trips-swiper-button-prev domestic-trips-swiper-button-prev">
//                         <Image
//                           height={20}
//                           width={20}
//                           src="/assets/icons/angle-left.png"
//                           alt="Previous slide"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-6 col-12">
//               <div className="right-content">
//                 <ul className="nav">
//                   <li className="nav-item">
//                     <a className="nav-link active" href="#">
//                       Tours
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Activities
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a className="nav-link" href="#">
//                       Experiences
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="row bottom-row">
//             <div className="col-lg-6 col-12">
//               <h1>Lorem Ipsum Dolor</h1>
//               <form>
//                 <div className="search-wrap">
//                   <input placeholder="Search by keywords..." />
//                   <button>
//                     <Image
//                       width={50}
//                       height={50}
//                       src="/assets/icons/company_logo.png"
//                       alt="Search"
//                     />
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
