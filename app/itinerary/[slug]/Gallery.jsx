import Image from "next/image";
import React from "react";

const Gallery = ({ ItineryData }) => {
  console.log(ItineryData, "ItineryData");
  return (
    <section className="detail-banner-section">
      <div className="bg">
        <img src="/assets/images/dot-bg-right.png" alt="" />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="banner-blocks">
                {ItineryData?.galleries?.length > 0 &&
                  ItineryData?.galleries?.map((ele, index) => (
                    <div className="banner-block" key={index}>
                      <Image
                        src={ele?.image}
                        alt={ele?.image_title || "No Title"}
                        key={index}
                        width={635}
                        height={583}
                      />
                      <div className="block-content">
                        {ele?.image_title || "No Title"}
                      </div>
                    </div>
                  ))}
                {/* <div className="banner-block">
                  <img
                    src="/assets/images/detail-banner-img-1.webp"
                    alt="Location"
                  />
                  <div className="block-content">
                    Lorem ipsum dolor sit amet
                  </div>
                </div>
                <div className="banner-block">
                  <img
                    src="/assets/images/detail-banner-img-2.webp"
                    alt="Location"
                  />
                  <div className="block-content">Lorem ipsum dolor</div>
                </div>
                <div className="banner-block">
                  <img
                    src="/assets/images/detail-banner-img-3.webp"
                    alt="Location"
                  />
                  <div className="block-content">Lorem ipsum dolor</div>
                </div>
                <div className="banner-block">
                  <img
                    src="/assets/images/detail-banner-img-4.webp"
                    alt="Location"
                  />
                  <div className="block-content">Lorem ipsum dolor</div>
                </div>
                <div className="banner-block">
                  <img
                    src="/assets/images/detail-banner-img-5.webp"
                    alt="Location"
                  />
                  <div className="block-content">Lorem ipsum dolor</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
