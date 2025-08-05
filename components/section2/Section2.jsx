export const dynamic = "force-dynamic";

import Brands from "./Brands";
import Clouds from "./Clouds";
import HomePageContainer from "./HomePageContainer";

export default async function Section2() {
  return (
    <section className="section-2">
      <Clouds />
      <Brands />
      <HomePageContainer />
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
