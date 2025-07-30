"use client";

import React, { useState } from "react";
import StayCategory from "./StayCategory";
import TripSummary from "./TripSummary";

const StayAndSummaryConatiner = ({ ItineryData, slug }) => {
  const [activeCategory, setActiveCategory] = useState(1); // Default to "Delexue"
  const [activeItems, setActiveItems] = useState([]); // Flat array for multi-select sub-options

  const handleTabClick = (idx) => {
    setActiveCategory(idx);
  };

  return (
    <div>
      <StayCategory
        ItineryData={ItineryData}
        slug={slug}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeItems={activeItems}
        setActiveItems={setActiveItems}
        handleTabClick={handleTabClick}
      />
      <TripSummary
        ItineryData={ItineryData}
        activeCategory={activeCategory}
        activeItems={activeItems}
      />
    </div>
  );
};

export default StayAndSummaryConatiner;
