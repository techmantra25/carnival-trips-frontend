import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const DestinationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim()) {
        fetchDestinations(searchTerm);
        setShowResults(true);
      } else {
        setDestinations([]);
        setShowResults(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const fetchDestinations = async (keyword) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://vanguardit.co/dev/carnival_trip_admin/api/search-destinations?keyword=${encodeURIComponent(
          keyword
        )}`
      );
      const data = await res.json();
      setDestinations(data?.data || []);
    } catch (error) {
      console.error("API Error:", error);
      setDestinations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-panel">
      <form autoComplete="off">
        <div className="search-wrap">
          <input
            placeholder="Search by keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" onClick={() => fetchDestinations(searchTerm)}>
            <Image
              width={50}
              height={50}
              src="/assets/icons/company_logo.png"
              alt="Search"
            />
          </button>
        </div>
      </form>

      {showResults && (
        <div className="search-result-dropdown">
          {loading ? (
            <p>Loading...</p>
          ) : destinations.length > 0 ? (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {destinations.map((dest) => (
                <li
                  key={dest.id}
                  style={{
                    padding: "8px",
                    borderBottom: "1px solid #eee",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <Link
                    href={`/destination/${dest.slug}`}
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                      width: "100%",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    onClick={() => {
                      setShowResults(false);
                      setSearchTerm("");
                    }}
                  >
                    <Image
                      src={
                        dest?.image ||
                        "https://vanguardit.co/dev/carnival_trip_admin/uploads/country_wise_dest/174841998343560.jpg"
                      }
                      alt={dest.destination_name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        borderRadius: "6px",
                      }}
                      width={100}
                      height={100}
                    />
                    <div className="content-right">
                      <span style={{ fontWeight: "bold" }}>
                        {dest.destination_name}
                      </span>
                      <p>
                        {dest.short_desc || "No description available."}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ margin: 0 }}>No destinations found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DestinationSearch;
