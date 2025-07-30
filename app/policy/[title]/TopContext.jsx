
const TopContext = ({ filterPolicy }) => {
  return (
    <section className="listing-section-1">
      <div className="background">
        <img
          src={"/assets/images/banner1.jpg"}
          alt={"Banner Image"}
          style={{ objectFit: "contain",height:'auto',width:'100%' }}
        />
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>{filterPolicy?.page}</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopContext;
