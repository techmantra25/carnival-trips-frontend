import { toTitleCase } from "@/utils/CommonFunctions";
import Image from "next/image";
import React from "react";

const PopularDestinationInfo = ({ ItineryData, slug }) => {
  return (
    <section className="listing-section-1">
      <div className="background">
        <Image
          width={1500}
          height={590}
          src={ItineryData?.banner_image || "/assets/images/banner.png"}
          alt={"Banner Image"}
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{toTitleCase(slug)}</h1>
              <p>{ItineryData?.short_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinationInfo;
