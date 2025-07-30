"use client";
import { useEffect, useState } from "react";
import { getWhyChooseUs } from "../../api/homepageApi";
import Image from "next/image";

export default function Section3() {
  const [whyChooseUsData, setWhyChooseUsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWhyChooseUsData = async () => {
      try {
        setLoading(true);
        const response = await getWhyChooseUs();
        if (response && response.status && response.data) {
          // Sort data by positions if needed
          const sortedData = [...response.data].sort(
            (a, b) => a.positions - b.positions
          );
          setWhyChooseUsData(sortedData);
        } else {
          setError("Invalid data format received");
        }
      } catch (err) {
        console.error("Error fetching why choose us data:", err);
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchWhyChooseUsData();
  }, []);

  // Display a loading state
  if (loading) {
    return (
      <section className="section-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Why Choose CarnivalTrips</h2>
              <p className="text-center">Loading...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Display an error state
  if (error) {
    return (
      <section className="section-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Why Choose CarnivalTrips</h2>
              <p className="text-center">
                Something went wrong. Please try again later.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show first 4 items on the left side
  let leftItems = whyChooseUsData ?? [];
  if (leftItems.length > 4) {
    leftItems = leftItems.slice(0, 4);
  }

  return (
    <>
      <section className="section-3">
        <div className="background">
          <div className="bg bg-1">
            <Image
              width={1753}
              height={873}
              src="/assets/images/section-3-bg-1.png"
              alt="Background"
            />
          </div>
          <div className="bg bg-2">
            <Image
              width={1618}
              height={868}
              src="/assets/images/section-3-bg-2.png"
              alt="Background"
            />
          </div>
        </div>
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h2 className="text-center">Why Choose CarnivalTrips</h2>
              </div>
            </div>
            <div className="row content-row">
              <div className="col-xl-5 col-lg-6 col-12 left-col">
                <div className="content-left">
                  <ul>
                    {leftItems.map((item, index) => (
                      <li key={item.id}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <div className="text-wrap">
                          <label>{item.title}</label>
                          <p>{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-xl-7 col-lg-6 col-12 right-col">
                <div className="content-right">
                  <Image
                    src="/assets/images/section-3-content-img.png"
                    alt="Why Choose CarnivalTrips"
                    width={500}
                    height={1000}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
