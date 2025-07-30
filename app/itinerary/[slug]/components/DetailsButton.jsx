"use client";

import Link from "next/link";

const DetailsButton = ({ element }) => {
  return (
    <Link
      href={`/itinerary/${element?.slug}`}
      style={{
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "orange",
      }}
      className="details-link"
    >
      <img src="/assets/icons/eye-icon.png" alt="View" />{" "}
      <span>Details</span>
    </Link>
  );
};

export default DetailsButton;
