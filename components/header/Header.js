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
            <div className="hamburger-all" onClick={handleShowAllDestinations}>
              <div className="hamburger-wrap">
                <Menu />
              </div>
            </div>
            <div className="hamburger" onClick={handleShow}>
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
            <ul className="navbar-nav mobile-menu">
              <li>
                <h4>Explore All Destinations</h4>
              </li>
              {allDestinations.map((category) => (
                <li className="nav-item" key={category.id}>
                  <Link
                    className="nav-link"
                    href={`/destination/${category.slug}`}
                    onClick={handleCloseAllDestinations}
                  >
                    <Image
                      src={category?.image || "/fallback.jpg"} // fallback if image missing
                      alt={category.name}
                      width={100}
                      height={50}
                      style={{ objectFit: "cover" }}
                    />
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
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

            <ul className="navbar-nav custom-navbar">
              <SocialIcons />
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </header>
    </>
  );
}
