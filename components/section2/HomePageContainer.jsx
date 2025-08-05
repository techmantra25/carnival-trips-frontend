"use client";
import React from "react";
import DestinationContainer from "./DestinationContainer";
import ActivityContainer from "./ActivityContainer";
import ExperienceContainer from "./ExperienceContainer";
import useTabsStore from "@/stores/useTabsStore";

const HomePageContainer = () => {
  const { selectedTab, setSelectedTab } = useTabsStore();

    console.log("Selected Tab in HomePageContainer:", selectedTab);

  return (
    <div>
      <DestinationContainer />
      <ActivityContainer />
      <ExperienceContainer />
    </div>
  );
};

export default HomePageContainer;
