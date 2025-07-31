import { getPageContent } from "@/api/homepageApi";
import PageContext from "./PageContext";
import TopBanner from "@/app/tripcategory/[id]/TopBanner";
import TopContext from "./TopContext";

const PolicyPage = async ({ params }) => {
  let title = await params.title;

  let filterPolicy = {};

  try {
    const policyResponse = await getPageContent();
    if (policyResponse?.status && policyResponse?.data) {
      let policy = policyResponse.data;
      filterPolicy = policy.find((item) => item?.title === title) || {};
    }
  } catch (err) {
    console.error("Error fetching website policy:", err);
  }

  return (
    <div className="listing-content">
      <TopContext filterPolicy={filterPolicy} />
      <PageContext filterPolicy={filterPolicy} />
    </div>
  );
};

export default PolicyPage;
