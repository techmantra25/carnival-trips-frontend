"use client";
import { getAllTripCategories } from "@/api/tripApi";
import Image from "next/image";
import React, { useEffect } from "react";

const TopBanner = ({ ItineryData, slug }) => {
  const [filteredData, setFilteredData] = React.useState([]);
  async function AllTripCategories() {
    try {
      const response = await getAllTripCategories();
      setFilteredData(
        response.data?.find((category) => category.slug === slug) || []
      );
    } catch (error) {
      console.error("Failed to fetch trip categories:", error);
    }
  }

  useEffect(() => {
    AllTripCategories();
  }, [slug]);

  return (
    <section className="listing-section-1">
      <div className="background">
        <Image
          width={1500}
          height={590}
          src={filteredData?.image || "/assets/images/banner.png"}
          alt={"Banner Image"}
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{filteredData?.title} Trips</h1>
              <p>{filteredData?.short_desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopBanner;
