"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { getSocialMedia, getWebSiteSettings } from "@/api/homepageApi";

const SocialIcons = () => {
  const [socialMedia, setSocialMedia] = useState([]);
  const [webSiteSettings, setWebSiteSettings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [socialResponse, settingsResponse] = await Promise.all([
          getSocialMedia(),
          getWebSiteSettings(),
        ]);

        if (socialResponse?.status && socialResponse?.data) {
          setSocialMedia(socialResponse.data);
        }

        if (settingsResponse?.status && settingsResponse?.data) {
          setWebSiteSettings(settingsResponse.data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        {[...Array(3)].map((_, index) => (
          <li
            key={index}
            className="nav-item d-flex flex-column justify-content-center align-items-center"
          >
            <div className="animate-pulse bg-gray-300 rounded w-10 h-10"></div>
            <div className="animate-pulse bg-gray-300 rounded w-16 h-3 mt-1"></div>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      {/* <li className="d-flex align-items-center me-3">
        <Phone size={20} className="me-2" />
        <Link
          href={`tel:${webSiteSettings?.official_number || ""}`}
          className="text-decoration-none text-dark"
        >
          {webSiteSettings?.official_number || "Contact us"}
        </Link>
      </li> */}

      {/* <li className="d-flex align-items-center me-3">
        <Mail size={18} className="me-2" />
        <Link
          href={`mailto:${webSiteSettings?.official_email || ""}`}
          className="text-decoration-none text-dark"
        >
          {webSiteSettings?.official_email || "Email us"}
        </Link>
      </li> */}

      <ul className="navbar-nav">
        {socialMedia?.length > 0 ? (
          socialMedia.map((item) => (
            <li
              key={item.id}
              className="nav-item d-flex justify-content-center align-items-center"
            >
              <Link
                href={item.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={30}
                  height={30}
                  src={item?.image}
                  alt={item.title}
                />
              </Link>
            </li>
          ))
        ) : (
          [...Array(3)].map((_, index) => (
            <li
              key={index}
              className="nav-item d-flex flex-column justify-content-center align-items-center"
            >
              <div className="animate-pulse bg-gray-300 rounded w-10 h-10"></div>
              <div className="animate-pulse bg-gray-300 rounded w-16 h-3 mt-1"></div>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default SocialIcons;
