"use client";
import React, { useState, useMemo } from "react";

const AboutDestination = ({ ItineryData }) => {
  const aboutHtml = ItineryData?.about_destination || "About this destination";

  // Strip HTML tags to count words
  const plainText = useMemo(() => {
    if (!aboutHtml) return "";
    const div = document.createElement("div");
    div.innerHTML = aboutHtml;
    return div.textContent || div.innerText || "";
  }, [aboutHtml]);

  const words = plainText.trim().split(/\s+/);
  const wordCount = words.length;

  const [showMore, setShowMore] = useState(false);

  // Show only first 100 words if not expanded
  const getTruncatedHtml = () => {
    if (showMore || wordCount <= 150) return aboutHtml;
    // Get first 100 words and reconstruct HTML
    const truncatedText = words.slice(0, 100).join(" ") + "...";
    return truncatedText;
  };

  return (
    <div className="about-desc ml-2">
      <h2> About {ItineryData?.name} Tour Packages </h2>
      <div className="">
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
  );
};

export default AboutDestination;
