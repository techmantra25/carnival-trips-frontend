import Image from "next/image";
import React from "react";

const DestinationInfo = ({ ItineryData }) => {
  const bannerMedia = ItineryData?.banner_media;
  const isVideo = bannerMedia && (bannerMedia.endsWith('.mp4') || bannerMedia.endsWith('.webm'));

  return (
    <section className="listing-section-1">
      <div className="background">
        {isVideo ? (
          <video autoPlay muted loop style={{ width: "100%", height: "100%", objectFit: "cover" }}>
            <source src={bannerMedia} type="video/mp4" />
          </video>
        ) : (
          <Image
            width={1500}
            height={590}
            src={bannerMedia || "/assets/images/banner.png"}
            alt={"Banner Image"}
          />
        )}
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{ItineryData?.name} Trips</h1>
              <p>{ItineryData?.short_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationInfo;