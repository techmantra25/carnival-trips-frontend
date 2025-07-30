
"use client";
import { toTitleCase } from "@/utils/CommonFunctions";
import React, { useState, useMemo } from "react";

const PopularAboutDestination = ({ ItineryData, slug }) => {
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

  const getTruncatedHtml = () => {
    if (showMore || wordCount <= 100) return aboutHtml;
    const truncatedText = words.slice(0, 100).join(" ") + "...";
    return truncatedText;
  };

  return (
    <div className="about-desc ml-2">
      {/* <h2 className="text-center">
        About {ItineryData?.name} Tour Packages
      </h2> */}
      <h2>About {toTitleCase(slug)} Tour</h2>
      <div className="">
        <span
          dangerouslySetInnerHTML={{
            __html: getTruncatedHtml(),
          }}
        />
        {wordCount > 100 && (
          <span
            onClick={() => setShowMore((v) => !v)}
            style={{
              color: "#106",
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

export default PopularAboutDestination;
