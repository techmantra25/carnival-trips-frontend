import Image from "next/image";

export default function CampaignBanner4() {
  return (
    <>
      <div className="inner-section campaign-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="campaign-box">
                <a href="javascript:void(0)">
                  <Image
                    width={1432}
                    height={261}
                    src="/assets/images/campaign-banner-4.webp"
                    alt="Campaign"
                   
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
