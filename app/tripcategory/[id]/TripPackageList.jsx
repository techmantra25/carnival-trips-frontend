"use client";
import { getOffers } from "@/api/homepageApi";
import PackageInfo from "@/app/destination/[slug]/PackageInfo";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TripPackageInfo from "./TripPackageInfo";

const TripPackageList = ({ packages, destination }) => {
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
    <>
      {displayPackages.length > 0 &&
        displayPackages.map((ele, index) => (
          <>
            <TripPackageInfo
              key={index}
              packageData={ele}
              destination={destination}
            />
            <BannerContainer BannerElement={offers[index]} />
          </>
        ))}
    </>
  );
};

export default TripPackageList;

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
