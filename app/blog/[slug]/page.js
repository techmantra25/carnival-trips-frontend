export const dynamic = "force-dynamic";
import BlogDetails from "./BlogDetails";

export default function Page({ params }) {
  const { slug } = params;
  return (
    <div>
      <BlogDetails  slug={slug} />
    </div>
  )
}
