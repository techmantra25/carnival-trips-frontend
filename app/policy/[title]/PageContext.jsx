"use client";
import React from "react";

const PageContext = ({ filterPolicy }) => {
  console.log(filterPolicy, "filterPolicy");
  return (
    <div className="container p-4 mt-4">
      <div
        className="row"
        dangerouslySetInnerHTML={{
          __html: filterPolicy.description,
        }}
      />
    </div>
  );
};

export default PageContext;
