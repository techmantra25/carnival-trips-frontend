"use client";
import React, { useEffect } from "react";
import DestinationContainer from "./DestinationContainer";
import ActivityContainer from "./ActivityContainer";
import ExperienceContainer from "./ExperienceContainer";
import useTabsStore from "@/stores/useTabsStore";

const HomePageContainer = ({ tripsCategories, offers, activities, experiences }) => {
  const { selectedTab, setSelectedTab } = useTabsStore();
  console.log("Selected Tab:", selectedTab);

  return (
    <div>
      {selectedTab === "tours" && (
        <DestinationContainer
          tripsCategories={tripsCategories}
          offers={offers}
        />
      )}
      {selectedTab === "activities" && <ActivityContainer activities={activities} offers={offers}/>}
      {selectedTab === "experiences" && <ExperienceContainer  experiences={experiences} offers={offers}/>}
    </div>
  );
};

export default HomePageContainer;
