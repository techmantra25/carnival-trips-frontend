"use client";
import { getAllTripCategories } from "@/api/tripApi";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [tripCategories, setTripCategories] = useState([]);

  async function getAll() {
    const response = await getAllTripCategories();
    console.log(response, "tripCategories`");
    let filteredTripCategories = response?.data.filter(
      (item) => item.is_header == 1
    );
    setTripCategories(filteredTripCategories);
  }

  useEffect(() => {
    getAll();
  }, []);

  console.log(tripCategories, "tripCategories");

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
            <div className="hamburger" onClick={handleShow}>
              <div className="hamburger-wrap">
                <AlignJustify />
              </div>
            </div>
          </div>
        </nav>
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
