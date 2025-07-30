"use client";

import Link from "next/link";

export default function CuratedCategories({ tripsCategories }) {
  return (
    <div className="inner-section inner-section-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center">Curated Categories</h2>
            <ul className="nav curated-categories-nav">
              {/* <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#domesticCat"
                >
                  Domestic Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#internationalCat">
                  International Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#weekendCat">
                  Weekend Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#upcomingCat">
                  Upcoming Trips
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#wildlifeCat">
                  Wildlife
                </Link>
              </li> */}
              {tripsCategories?.map((category) => (
                <li className="nav-item" key={category.id}>
                  <Link
                    className="nav-link"
                    href={`#${category.title.toLowerCase()}`}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
