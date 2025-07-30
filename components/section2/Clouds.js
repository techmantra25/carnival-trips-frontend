import Image from "next/image";

export default function Clouds() {
  return (
    <>
      <div className="background-holder">
        <div className="bg bg-wrap">
          <div className="bg-base" />
          <div className="bg-cloud-1">
            <Image
              width={1000}
              height={350}
              src="/assets/images/cloud1.png"
              alt="Background"
             
            />
            <div className="bg-cloud-2">
              <Image
                width={1000}
                height={200}
                src="/assets/images/cloud2.png"
                alt="Background"
               
              />
            </div>
          </div>
          <div className="bg bg-2">
            <Image
              width={1000}
              height={450}
              src="/assets/images/shape2.png"
              alt="Background"
             
            />
            <Image
              width={1000}
              height={300}
              src="/assets/images/section-2-bg-2.png"
              alt="Background"
             
            />
          </div>
        </div>

        <div className="bg bg-middle">
          <Image
            width={1000}
            height={400}
            src="/assets/images/section-2-bg-middle.png"
            alt="Section background"
           
          />
        </div>
        <div className="bg bg-last">
          <Image
            width={500}
            height={500}
            src="/assets/images/section-2-bg-last.png"
            alt="Background"
           
          />
        </div>
      </div>
    </>
  );
}
