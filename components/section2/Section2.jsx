export const dynamic = "force-dynamic";

import { getAllTripCategories } from "@/api/tripApi";
import Brands from "./Brands";
import Clouds from "./Clouds";
import HomePageContainer from "./HomePageContainer";
import { getHomePageActivities, getOffers } from "@/api/homepageApi";

export default async function Section2() {
  const response = await getAllTripCategories();
  const tripsCategories = response?.data;

  const offerResponse = await getOffers();
  const offers = offerResponse?.data;

  const ActivityResponse = await getHomePageActivities();
  const activities = ActivityResponse?.data;

  return (
    <section className="section-2">
      <Clouds />
      <Brands />
      <HomePageContainer tripsCategories={tripsCategories} offers={offers} activities={activities}/>
    </section>
  );
}

//   // Extract relative path from full link
//   const relativeLink = BannerElement?.link
//     ? new URL(BannerElement.link).pathname
//     : null;

//   return (
//     <div
//       className="inner-section campaign-section"
//       title={BannerElement?.title}
//       style={{ cursor: relativeLink ? "pointer" : "default" }}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <div className="campaign-box">
//               {relativeLink ? (
//                 <Link href={relativeLink}>
//                   <Image
//                     width={1231}
//                     height={367}
//                     src={BannerElement?.image}
//                     alt={BannerElement?.title || "Banner"}
//                     layout="responsive"
//                   />
//                 </Link>
//               ) : (
//                 <Image
//                   width={1231}
//                   height={367}
//                   src={BannerElement?.image}
//                   alt={BannerElement?.title || "Banner"}
//                   layout="responsive"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
