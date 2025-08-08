import Image from "next/image";
import Link from "next/link";
import RelatedPosts from "../RelatedPosts";

export default function BlogDetails({ slug }) {
  return (
    <section className="main">
      <div className="row">
        <div className="col-lg-6 p-0">
          <div className="single-image">
            <Image
              src="https://wanderon-images.gumlet.io/gallery/new/2025/08/07/1754559847711-shani-temple-near-shirdi-ahmednagar.jpg"
              alt="Shani Temple"
              width={800}
              height={600}
            />
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="single-content">
            <h1>
              Shani Shingnapur Temple Ahmednagar: History, Legends and More
            </h1>
            <div className="cat-list-single">
              <span>Jaipur</span>
              <span>Rajasthan</span>
              <span>Travel</span>
            </div>
            <div className="blog-meta-single">
              <span>Mar 31, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="blog-single-content-wrapper">
          <p>
            is the most mystical temple of India and also one of the most
            revered shrines dedicated to Lord Shani, who is an embodiment of the
            Saturn planet. The Shree Shanidev Temple Shani Shingnapur, is
            located in the Ahmedabad district and draws millions of devotees
            every year to this place.
          </p>
          <p>
            The temple is one of the most spiritual places to visit when looking
            for India Tours. It is popular not only because of its religious
            significance but also because of the legends and unique traditions
            that are associated with it.
          </p>
          <h2>Story and History Shani Shingnapur Temple</h2>
          <p>
            The story and history Shani Shingnapur Temple is an interesting one,
            dating back 300 years. According to legends, there is a black stone
            representing Shree Shanidev that mysteriously appeared on the banks
            of Panasnala River. A shepherd came across it and touched it wit
          </p>
          <p>
            A shepherd came across it and touched it with a pointed rod. Upon
            touching it, blood started to ooze out, and later the Shepherd saw
            Lord Shani in his dream, where he revealed his identity. Lord Shani
            instructed him to put the stone in the village under an open sky, as
            he would not like to be sheltered.
          </p>

          <h2>How To Reach Shree Shanidev Temple Shani Shingnapur?</h2>
          <p>
            By Train: There are three railway stations, for people to get to the
            Shani Shingnapur Temple, including Rahuri Railway Station(32km),
            Ahmednagar Railway Station(35km), Shirdi Railway Station(74km). Upon
            arrival, you can take a bus, shared auto, or a cab.
          </p>
          <p>
            By Road: If you are planning to drive your own car, then that would
            also be a good idea. Road trips are best when taken with family for
            pilgrimages.
          </p>
          <p>
            By Air: The most convenient way to travel to any place is to take a
            flight, so you can fly to Shirdi Airport, which is 70 kms away, and
            the closest to Shree Shanidev Temple Shani Shingnapur.
          </p>
        </div>

        <div className="related-post-single">
          <h2>Related Post</h2>
          <RelatedPosts  />
        </div>
      </div>
    </section>
  );
}
