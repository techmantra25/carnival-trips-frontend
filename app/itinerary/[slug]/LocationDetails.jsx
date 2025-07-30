"use client";
import React, { useState, useMemo } from 'react'

const LocationDetails = ({ ItineryData }) => {
  const aboutHtml = ItineryData?.about_destination || "";
  const plainText = useMemo(() => {
    if (!aboutHtml) return "";
    const div = document.createElement("div");
    div.innerHTML = aboutHtml;
    return div.textContent || div.innerText || "";
  }, [aboutHtml]);
  const words = plainText.trim().split(/\s+/);
  const wordCount = words.length;
  const [showMore, setShowMore] = useState(false);

  const getTruncatedHtml = () => {
    if (showMore || wordCount <= 100) return aboutHtml;
    return words.slice(0, 100).join(" ") + "...";
  };

  return (
    <div className="details-stack">
      <h2 className="details-sub-heading">
        About {ItineryData?.destination_name} Tour Packages
      </h2>
      <div>
        <span
          dangerouslySetInnerHTML={{ __html: getTruncatedHtml() }}
        />
        {wordCount > 100 && (
          <span
            onClick={() => setShowMore((v) => !v)}
            style={{
              color: "orange",
              cursor: "pointer",
              fontWeight: 500,
              marginLeft: 8,
              display: "inline-block",
            }}
          >
            {showMore ? "Show Less" : "Show More"}
          </span>
        )}
      </div>
    </div>
  )
}

export default LocationDetails
