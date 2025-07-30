import Image from "next/image";
import Link from "next/link";

export default function CampaignBanner2() {
  return (
    <>
      <div className="inner-section campaign-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="campaign-box">
                <Link href="#">
                  <Image
                    width={1431}
                    height={367}
                    src="/assets/images/campaign-banner-2.webp"
                    alt="Campaign"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
