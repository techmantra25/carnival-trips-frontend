export const dynamic = "force-dynamic";

import { getOffers } from "@/api/homepageApi";
import { getAllTripCategories } from "@/api/tripApi";
import Image from "next/image";
import Link from "next/link";
import CuratedCategories from "./CuratedCategories";
import TripsContainer from "./TripsContainer";

async function DestinationContainer() {
  const response = await getAllTripCategories();
  const tripsCategories = response?.data;

  const offerResponse = await getOffers();
  const offers = offerResponse?.data;
  return (
    <>
      <CuratedCategories tripsCategories={tripsCategories} />

      {tripsCategories?.map((category, index) => {
        const BannerElement = offers[index]; // Capitalized variable

        return (
          <div key={category.id}>
            <TripsContainer category={category} />
            {offers[index] && <BannerContainer BannerElement={BannerElement} />}
          </div>
        );
      })}
    </>
  );
}

export default DestinationContainer;

const BannerContainer = ({ BannerElement }) => {
  // Extract relative path from full link
  const relativeLink = BannerElement?.link
    ? new URL(BannerElement.link).pathname
    : null;

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
                    src={BannerElement?.image}
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
