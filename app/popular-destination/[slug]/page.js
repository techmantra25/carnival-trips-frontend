export const dynamic = "force-dynamic";
import { getPackagesFromCity } from "@/api/tripApi";
import BackgroundHolder from "@/app/destination/[slug]/BackgroundHolder";
import DataContent from "@/app/destination/[slug]/DataContent";
import PackagesList from "@/app/destination/[slug]/PackagesList";
import PopularList from "@/app/destination/[slug]/PopularList";
import PopularAboutDestination from "../components/PopularAboutDestination";
import PopularDestinationInfo from "../components/PopularDestinationInfo";

const PopularListingPage = async ({ params }) => {
  const slug = await params.slug;
  const response = await getPackagesFromCity(slug);
  let ItineryData = response?.data;

  return (
    <div className="listing-content">
      <PopularDestinationInfo ItineryData={ItineryData} slug={slug} />
      <section className="listing-section-2">
        <BackgroundHolder />

        <div className="content">
          <div className="container mb-5">
             <div className="inner-section content-section row p-2 d-flex">
              <div className="col-lg-12 col-12">
                <PopularAboutDestination ItineryData={ItineryData} slug={slug} />
                {/* <PopularList ItineryData={ItineryData} /> */}
              </div>
              {/* <div className="col-lg-1 col-12"></div> */}
              {/* {<div className="col-lg-4 col-12">
                <PopularList ItineryData={ItineryData} />
              </div>} */}
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

export default PopularListingPage;
