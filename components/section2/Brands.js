"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getPartners } from "../../api/homepageApi";

export default function Brands() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const response = await getPartners();
        if (response.status && response.data) {
          setPartners(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching partners:", error);
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  const slideData = [
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
    ...partners,
  ];

  return (
    <div className="inner-section inner-section-1">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {loading ? (
              <div className="text-center">Loading partners...</div>
            ) : partners.length === 0 ? (
              <div className="text-center">No partners found</div>
            ) : (
              <div className="swiper brandsSwiper">
                <Swiper
                  slidesPerView={6}
                  spaceBetween={30}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  modules={[Autoplay]}
                  className="swiper-wrapper"
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    480: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 6 },
                  }}
                >
                  {slideData.map((partner, index) => (
                    <SwiperSlide key={index}>
                      <div className="img-wrap">
                        <Image
                          width={300}
                          height={100}
                          src={partner.image}
                          alt={partner.title || `Brand ${index + 1}`}
                         
                          
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
