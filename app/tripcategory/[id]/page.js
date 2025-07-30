export const dynamic = "force-dynamic";
import { ExploreTripCategory } from "@/api/homepageApi";
import BackgroundHolder from "@/app/destination/[slug]/BackgroundHolder";
import TopBanner from "./TopBanner";
import TripPackageList from "./TripPackageList";
import DataContent from "@/app/destination/[slug]/DataContent";
import FooterContent from "./FooterContent";

const TripCategoryPage = async ({ params }) => {
  const slug = await params?.id;

  const response = await ExploreTripCategory(slug);

  let TripCategoryData = response?.data;

  return (
    <div className="listing-content">
      <TopBanner ItineryData={TripCategoryData} slug={slug} />
      <section className="listing-section-2">
        <BackgroundHolder />

        <div className="content">
          {/* <div className="container mb-5">
            <div className="inner-section content-section row p-2 d-flex justify-content-center align-items-center">
              <div className="col-lg-8 col-12">
                <AboutDestination ItineryData={ItineryData} />
              </div>
              
              <div className="col-lg-4 col-12">
                <PopularList ItineryData={ItineryData} />
              </div>
            </div>
          </div> */}
          {/* Packages List with Explore All */}
          <TripPackageList
            packages={TripCategoryData}
            destination={TripCategoryData}
          />
        </div>
      </section>
      <FooterContent ItineryData={TripCategoryData} slug={slug} />
    </div>
  );
};

export default TripCategoryPage;
