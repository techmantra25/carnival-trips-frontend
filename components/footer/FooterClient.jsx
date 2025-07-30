"use client";
import { useState } from "react";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { subscribeNewsletter } from "@/api/LeadApi";
import toast from "react-hot-toast";

export default function FooterClient({ socialMedia, webSiteSettings, policy }) {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterLoading, setNewsletterLoading] = useState(false);


  console.log(process.env.NEXT_PUBLIC_ZEROBOUNCE_API_KEY,'zerobounce')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterLoading(true);

    // try {
    //   const response = await fetch(
    //     `https://api.zerobounce.net/v2/validate?api_key=${process.env.NEXT_PUBLIC_ZEROBOUNCE_API_KEY}&email=${encodeURIComponent(
    //       newsletterEmail
    //     )}`
    //   );
    //   const data = await response.json();
    //   if (data.status !== "valid") {
    //     toast.error("Please provide a valid email address.");
    //     setNewsletterLoading(false);
    //     return;
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toast.error("Failed to validate email. Please try again.");
    //   setNewsletterLoading(false);
    //   return;
    // }

    try {
      await subscribeNewsletter(newsletterEmail);
      toast.success("Subscribed successfully!");
      setNewsletterEmail("");
    } catch (err) {
      toast.error(
        err?.response?.data?.errors?.email?.[0] ||
          err?.response?.data?.message ||
          err?.message ||
          "Subscription failed. Please try again."
      );
    } finally {
      setNewsletterLoading(false);
    }
  };

  return (
    <footer>
      <div className="bg-overlay">
        <Image
          width={1800}
          height={645}
          src="/assets/images/footer-bg-overlay.png"
          alt=""
        />
      </div>
      <div className="container">
        <div className="row main-content">
          <div className="col-xl-4 col-12 footer-col">
            <div className="logo">
              <Link href="/">
                <Image
                  width={400}
                  height={100}
                  src="/assets/images/footer-logo.png"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="desc">
              <p>{webSiteSettings?.company_description}</p>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-12 footer-col">
            <label className="menu-heading">Links</label>
            <ul className="nav">
              {Array.isArray(policy) &&
                policy.map((item) => (
                  <li className="nav-item" key={item.id}>
                    <Link
                      href={`/policy/${item?.title}`}
                      className="nav-link"
                      target="_blank"
                    >
                      {item.page}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-xl-2 col-lg-3 col-12 footer-col">
            <label className="menu-heading">Contact</label>
            <ul className="contact-menu">
              <li>
                <Image
                  width={10}
                  height={20}
                  src="/assets/icons/phone.png"
                  alt=""
                />
                <Link href={`tel:${webSiteSettings?.official_number}`}>
                  {webSiteSettings?.official_number}
                </Link>
              </li>
              <li>
                <Image
                  width={10}
                  height={15}
                  src="/assets/icons/email.png"
                  alt=""
                />
                <Link
                  href={`mailto:${
                    webSiteSettings?.official_email || "info@example.com"
                  }`}
                >
                  {webSiteSettings?.official_email || "info@example.com"}
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-xl-4 col-lg-6 col-12 footer-col">
            <label className="menu-heading">Social Media</label>
            <ul className="social-menu">
              {socialMedia.length > 0 ? (
                socialMedia.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        width={15}
                        height={15}
                        src={item?.image}
                        alt={item.title}
                      />
                    </Link>
                  </li>
                ))
              ) : (
                <>
                  <li>
                    <Link href="#">
                      <Facebook size={15} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Linkedin size={15} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <Youtube size={15} />
                    </Link>
                  </li>
                </>
              )}
            </ul>
            <label className="menu-heading">Subscribe to our Newsletter</label>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                disabled={newsletterLoading}
                maxLength="100"
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={newsletterLoading}
                style={{ marginTop: "10px" }}
              >
                {newsletterLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>
        <div className="row copyright-content">
          <div className="col-12">
            <p>Copyright © 2025 Carrnivaltrips. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
