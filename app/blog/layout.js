
import '../../style/blog.css'
import '../../style/blog_responsive.css'

export const metadata = {
  title: "Carnival Trips - Blog",
  description:
    "Find the latest blog posts and updates from Carnival Trips.",
};

export default function BlogLayout({ children }) {
  return <div>{children}</div>;
}
