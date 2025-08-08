
export const dynamic = "force-dynamic";


import BlogList from "./BlogList";

const BlogListingPage = async () => {
  return (
    <div className="listing-content">
      <BlogList />
    </div>
  );
};

export default BlogListingPage;
