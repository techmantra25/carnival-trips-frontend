"use client";

import { useRouter } from "next/navigation";
import React from "react";

const PopularList = ({ ItineryData }) => {
  const route = useRouter();

  const handleClick = (slug) => {
    route.push(`/popular-destination/${slug}`);
  };

  return (
    <div className="packages-links-block h-auto mb-4">
      <div className="packages-links-box">
        <h3>
          {ItineryData?.destination_name} Packages from Top Cities
        </h3>
        <ul className="packages-links">
          {ItineryData?.packages_from_top_city?.length > 0 &&
            ItineryData?.packages_from_top_city?.map((ele, index) => (
              <li key={index}>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => handleClick(ele?.slug)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    marginRight: 8,
                    cursor: "pointer",
                  }}
                  aria-label={`Go to ${ele?.title}`}
                >
                  <img src="/assets/icons/right-arrow-orange.png" alt="" />
                </button>
                <a
                  href={`/popular-destination/${ele?.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(ele?.slug);
                  }}
                >
                  {ele?.title} 
                </a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

// Your current implementation is correct and does not use javascript: URLs.

export default PopularList;
