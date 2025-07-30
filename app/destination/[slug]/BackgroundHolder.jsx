import React from "react";

const BackgroundHolder = () => {
  return (
    <div className="background-holder">
      <div className="bg-wrap">
        <div className="bg-cloud-1">
          <img src="/assets/images/cloud1.png" alt="Background" />
          <div className="bg-cloud-2">
            <img src="/assets/images/cloud2.png" alt="Background" />
          </div>
        </div>
        <div className="bg-middle">
          <img src="/assets/images/listing-middle-bg.png" alt="Background" />
          <div className="bg-child">
            <img src="/assets/images/section-2-bg-2.png" alt="Background" />
          </div>
        </div>
      </div>
      <div className="bg-wrap-2">
        <img
          src="/assets/images/section-2-bg-middle.png"
          className="dot-bg dot-bg-1"
        />
        <img
          src="/assets/images/dot-bg-right.png"
          className="dot-bg dot-bg-2"
        />
        <img
          src="/assets/images/section-2-bg-middle.png"
          className="dot-bg dot-bg-3"
        />
        <img
          src="/assets/images/dot-bg-right.png"
          className="dot-bg dot-bg-4"
        />
        <img
          src="/assets/images/section-2-bg-middle.png"
          className="dot-bg dot-bg-5"
        />
      </div>
    </div>
  );
};

export default BackgroundHolder;
