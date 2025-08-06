"use client";
import { getAllTripCategories } from "@/api/tripApi";
import { AlignJustify, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [show, setShow] = useState(false);
  const [showAllDestinations, setShowAllDestinations] = useState(false);
  const [allDestinations, setAllDestinations] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowAllDestinations = () => setShowAllDestinations(true);
  const handleCloseAllDestinations = () => setShowAllDestinations(false);

  const [tripCategories, setTripCategories] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        const response = await getAllTripCategories();

        const filteredTripCategories = response?.data?.filter(
          (item) => item.is_header === 1
        );

        // Step 1: Flatten all destination arrays
        const allDestinations = filteredTripCategories.flatMap(
          (item) => item.destinations || []
        );

        // Step 2: Remove duplicates by destination id
        const uniqueDestinationsMap = new Map();

        allDestinations.forEach((dest) => {
          if (!uniqueDestinationsMap.has(dest.id)) {
            uniqueDestinationsMap.set(dest.id, dest);
          }
        });

        const uniqueDestinations = Array.from(uniqueDestinationsMap.values());

        // Optional: set to state
        setTripCategories(filteredTripCategories);
        setAllDestinations(uniqueDestinations);
      } catch (error) {
        console.error("Error fetching trip categories:", error);
      }
    }

    getAll();
  }, []);

  // console.log("All Destinations:", allDestinations);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <Link href="/" className="navbar-brand py-0">
              <Image
                width={200}
                height={90}
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Link>

            <div
              className="collapse navbar-collapse justify-content-between "
              id="navbarNav"
            >
              <ul className="navbar-nav custom-menu-bar ">
                {tripCategories.map((category) => (
                  <li className="nav-item" key={category.id}>
                    <Link
                      className="nav-link"
                      href={`/tripcategory/${category?.slug}`}
                    >
                      {category.title}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav custom-navbar">
                <SocialIcons />
              </ul>
            </div>
              <ul className="navbar-nav custom-navbar">
            <div className="hamburger-all d-none d-xl-block" onClick={handleShowAllDestinations}>
              <div className="hamburger-wrap">
                <Menu />
              </div>
            </div>
            </ul>
            <div className="hamburger d-xl-none" onClick={handleShow}>
              <div className="hamburger-wrap">
                <AlignJustify />
              </div>
            </div>
          </div>
        </nav>
        <Offcanvas
          show={showAllDestinations}
          onHide={handleCloseAllDestinations}
          placement="end"
          style={{ background: "#f8f9fa" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                width={120}
                height={60}
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <h4 className="mb-4">Explore All Destinations</h4>
            <div className="row">
              {allDestinations.map((category) => (
                <div className="col-6 mb-4" key={category.id}>
                  <Link
                    href={`/destination/${category.slug}`}
                    onClick={handleCloseAllDestinations}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        overflow: "hidden",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <Image
                        src={category?.image || "/fallback.jpg"}
                        alt={category.name}
                        width={150}
                        height={80}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "80px",
                        }}
                      />
                      <div className="card-body text-center p-2">
                        <h6
                          className="card-title"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {category.name}
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Offcanvas.Body>
        </Offcanvas>
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image
                width={120}
                height={60}
                src="/assets/images/logo.png"
                alt="logo"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="navbar-nav mobile-menu">
              {tripCategories.map((category) => (
                <li className="nav-item" key={category.id}>
                  <Link
                    className="nav-link"
                    href={`/tripcategory/${category.id}`}
                    onClick={handleClose}
                  >
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
           <ul className="navbar-nav mobile-menu">
           
             <h6 className="mb-4">Explore All Destinations</h6>
             <div className="row">
              {allDestinations.map((category) => (
                <div className="col-6 mb-4" key={category.id}>
                  <Link
                    href={`/destination/${category.slug}`}
                    onClick={handleCloseAllDestinations}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      className="card h-100"
                      style={{
                        border: "none",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        borderRadius: "10px",
                        overflow: "hidden",
                        transition: "transform 0.2s",
                      }}
                      onMouseOver={(e) =>
                        (e.currentTarget.style.transform = "scale(1.05)")
                      }
                      onMouseOut={(e) =>
                        (e.currentTarget.style.transform = "scale(1)")
                      }
                    >
                      <Image
                        src={category?.image || "/fallback.jpg"}
                        alt={category.name}
                        width={150}
                        height={80}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "80px",
                        }}
                      />
                      <div className="card-body text-center p-2">
                        <h6
                          className="card-title"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {category.name}
                        </h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
           
           </ul>
            <ul className="navbar-nav custom-navbar">
              <SocialIcons />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
