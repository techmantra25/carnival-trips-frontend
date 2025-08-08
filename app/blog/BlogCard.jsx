
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ post }) => {
  return (
    <li key={post.slug}>
      <div className="inner-grid">
        <Link href={`/blog/${post.slug}`}>
            <figure>
              <Image src={post.imageUrl} alt={post.title} width={500} height={300} />
            </figure>
            <figcaption>
              <div className="blog-meta">
                <span>{post.date}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="cat-list">
                {post.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
            </figcaption>
        </Link>
      </div>
    </li>
  );
};

export default BlogCard;
