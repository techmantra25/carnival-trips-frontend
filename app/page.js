
export const dynamic = "force-dynamic";

import { getAllBlogs } from "@/api/homepageApi";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";

export default async function Home() {
  const blogResponse = await getAllBlogs();
  console.log({ blogResponse });

  return (
    <>
      <div className="home-content">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}
