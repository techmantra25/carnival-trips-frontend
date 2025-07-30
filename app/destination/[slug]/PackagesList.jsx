"use client";
import { getOffers } from "@/api/homepageApi";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PackageInfo from "./PackageInfo";
import PopularList from "./PopularList";
import BookingForm from "@/utils/BookingForm";
import MultiBooking from "./MultiBooking";

const PackagesList = ({ packages, destination }) => {
  const [offers, setOffers] = useState([]);

  // Defensive: ensure packages is always an array
  const safePackages = Array.isArray(packages) ? packages : [];

  // Always show all in reverse order
  const displayPackages = [...safePackages];

  const getAllOffers = async () => {
    try {
      const response = await getOffers();

      setOffers(response?.data || []);
    } catch (error) {
      console.error("Failed to fetch offers:", error);
      return [];
    }
  };

  useEffect(() => {
    getAllOffers();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-lg-8 col-12">
          <div className="detail-content-left">
            {displayPackages.length > 0 &&
              displayPackages.map((ele, index) => (
                <div key={index}>
                  <PackageInfo packageData={ele} destination={destination} />
                  <BannerContainer BannerElement={offers[index]} />
                </div>
              ))}
          </div>
        </div>
        <div className="col-md-12 col-lg-4 col-12">
          <div className="detail-content-right inner-page-form">
            <PopularList ItineryData={destination} />
            <MultiBooking
              destination={destination}
              packages={displayPackages}
              offers={offers}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesList;

const BannerContainer = ({ BannerElement }) => {
  // Extract relative path from full link
  const relativeLink = BannerElement?.link
    ? new URL(BannerElement.link).pathname
    : null;

  if (!BannerElement || !BannerElement.image) {
    return null; // Return null if BannerElement or image is not available
  }

  return (
    <div
      className="inner-section campaign-section"
      title={BannerElement?.title}
      style={{ cursor: relativeLink ? "pointer" : "default" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="campaign-box">
              {relativeLink ? (
                <Link href={relativeLink}>
                  <Image
                    width={1231}
                    height={367}
                    src={BannerElement?.image || "/assets/images/banner.png"}
                    alt={BannerElement?.title || "Banner"}
                    layout="responsive"
                  />
                </Link>
              ) : (
                <Image
                  width={1231}
                  height={367}
                  src={BannerElement?.image}
                  alt={BannerElement?.title || "Banner"}
                  layout="responsive"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
