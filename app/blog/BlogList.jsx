import React from "react";
import BlogCard from "./BlogCard";

const blogData = [
  {
    slug: "uncover-the-mystical-beauty-of-panna-meena-ka-kund-jaipur",
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754570555139-panna-meena-ka-kund.webp",
    date: "Mar 31, 2022",
    title: "Uncover The Mystical Beauty Of Panna Meena Ka Kund Jaipur",
    excerpt: "Explore Lal Darwaja, Ahmedabad’s vibrant street market famous for budget shopping, local street food, and traditional Gujarati vibes, perfect for shopaholics and culture lovers.",
    categories: ["Jaipur", "Rajasthan", "Travel"],
  },
  {
    slug: "exploring-lal-darwaja-market-a-vibrant-shopping-experience-in-ahmedabad",
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754565598740-lal-darwaja-ahmedabad.jpg",
    date: "Mar 31, 2022",
    title: "Exploring Lal Darwaja Market: A Vibrant Shopping Experience in Ahmedabad",
    excerpt: "Explore Lal Darwaja, Ahmedabad’s vibrant street market famous for budget shopping, local street food, and traditional Gujarati vibes, perfect for shopaholics and culture lovers.",
    categories: ["Ahmedabad", "Holidays", "Shopping", "Things To Buy"],
  },
  {
    slug: "shani-shingnapur-temple-ahmednagar-history-legends-and-more",
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754559847711-shani-temple-near-shirdi-ahmednagar.jpg",
    date: "Mar 31, 2022",
    title: "Shani Shingnapur Temple Ahmednagar: History, Legends and More",
    excerpt: "Shani Shingnapur Temple is the most mystical temple of India and also one of the most revered shrines dedicated to Lord Shani, who is an embodiment of the Saturn planet.",
    categories: ["General", "General Blog", "Travel", "travel guide", "Travel Facts"],
  },
  {
    slug: "languages-in-bali-a-guide-with-the-best-phrases",
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754555710377-languages-in-bali.jpg",
    date: "Mar 31, 2022",
    title: "Languages In Bali: A Guide With The Best Phrases",
    excerpt: "Planning a trip to Bali? Understanding the languages in Bali will enhance your experience. Explore Indonesian, Balinese, and English - the primary languages you'll encounter while island hopping.",
    categories: ["Bali", "Travel", "Travel Facts", "Travel Journal"],
  },
  {
    slug: "restaurant-ministry-of-crab-sri-lanka-everything-you-need-to-know",
    imageUrl: "https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754555309225-ministry-of-crab-colombo.webp",
    date: "Mar 31, 2022",
    title: "Restaurant Ministry of Crab, Sri Lanka: Everything You Need to Know",
    excerpt: "Crack into giant lagoon crabs at the restaurant, Ministry of Crab, Colombo’s legendary seafood restaurant with the best flavours.",
    categories: ["Travel", "places to eat", "restaurant", "Sri Lanka"],
  },
];

const BlogList = () => {
  return (
    <div>
      <section className="event-stack">
        <div className="container">
          <div className="event-stack-listing">
            <ul className="event-list">
              {blogData.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </ul>
            <div className="pagination-stack">
              <a href="#">Load More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogList;