import React from "react";

const DataContent = ({ ItineryData }) => {
  console.log(ItineryData, "itinery data");
  return (
    <section className="listing-section-3">
      <div className="background">
        <img src="/assets/images/listing-section-3-bg.png" alt="" />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            {ItineryData?.supports?.map((ele, index) => (
              <div className="col-lg-3 content-col" key={index}>
                <h3 className="title">{ele?.title}</h3>
                <p className="desc">{ele?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataContent;
