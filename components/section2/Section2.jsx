export const dynamic = "force-dynamic";

import { getAllTripCategories } from "@/api/tripApi";
import Brands from "./Brands";
import CampaignBanner1 from "./CampaignBanner1";
import CampaignBanner2 from "./CampaignBanner2";
import CampaignBanner3 from "./CampaignBanner3";
import CampaignBanner4 from "./CampaignBanner4";
import Clouds from "./Clouds";
import CuratedCategories from "./CuratedCategories";
import TripsContainer from "./TripsContainer";
import { getOffers } from "@/api/homepageApi";
import Image from "next/image";
import Link from "next/link";

export default async function Section2() {
  const response = await getAllTripCategories();
  const tripsCategories = response?.data;

  const offerResponse = await getOffers();
  const offers = offerResponse?.data;

  // const CampaignBannerComponents = [
  //   CampaignBanner1,
  //   CampaignBanner2,
  //   CampaignBanner3,
  //   CampaignBanner4,
  // ];

  return (
    <section className="section-2">
      <Clouds />
      <Brands />
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
    </section>
  );
}

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
