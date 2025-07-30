export const dynamic = "force-dynamic";
import React from "react";
import DestinationInfo from "./DestinationInfo";
import BackgroundHolder from "./BackgroundHolder";
import DataContent from "./DataContent";
import { getPackagesItineraries } from "@/api/tripApi";
import AboutDestination from "./AboutDestination";
import PopularList from "./PopularList";
import PackagesList from "./PackagesList";

const ListingPage = async ({ params }) => {
  const slug = await params.slug;
  const response = await getPackagesItineraries(slug);
  let ItineryData = response?.data;

  console.log(response, "response");
  return (
    <div className="listing-content">
      <DestinationInfo ItineryData={ItineryData} />
      <section className="listing-section-2">
        <BackgroundHolder />

        <div className="content">
          <div className="container mb-5">
            <div className="inner-section content-section row">
              <div className="col-lg-12">
                <AboutDestination ItineryData={ItineryData} />
              </div>

              {/* <div className="col-lg-4 col-12">
                <PopularList ItineryData={ItineryData} />
              </div> */}
            </div>
          </div>
         
          <PackagesList
            packages={ItineryData?.packages}
            destination={ItineryData}
          />
        </div>
      </section>
      <DataContent ItineryData={ItineryData} />
    </div>
  );
};

export default ListingPage;
