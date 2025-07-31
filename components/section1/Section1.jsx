export const dynamic = "force-dynamic";

import { getAllTripCategories } from "@/api/tripApi";
import { Section1Client } from "./Section1Client";
import { getHomePageBanner } from "@/api/homepageApi";

const Section1 = async () => {
  const response = await getAllTripCategories();

  const HighlitedtripsCategories = response?.data?.filter(
    (ele) => ele?.is_highlighted == 1
  );

  const homePageBanneResponse = await getHomePageBanner();

  const homePageBannerData = homePageBanneResponse?.data[0];

  return (
    <Section1Client
      tripsCategories={HighlitedtripsCategories}
      homePageBannerData={homePageBannerData}
    />
  );
};

export default Section1;
