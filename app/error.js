'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Error({ error }) {
  useEffect(() => {
    console.error("App Error:", error);
  }, [error]);

  const reset = () => {
    // This function can be used to reset the error state or redirect the user
    window.location.reload(); // Reload the page to reset the error state 
  }; // Added missing closing bracket here

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f3f4f6",
        textAlign: "center",
        padding: "12px",
      }}
    >
      <Image
        src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" // Make sure this image exists
        alt="Error illustration"
        width={800}
        height={500}
        style={{ marginBottom: "24px" }}
       
      />
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "600",
          color: "#dc2626", // red-600
          marginBottom: "12px",
        }}
      >
        Oops! Something went wrong
      </h1>
      <p
        style={{
          color: "#4b5563", // gray-700
          marginBottom: "24px",
          maxWidth: "400px",
        }}
      >
        We're having trouble loading this page. Don't worry, it's not you – it's us. Try refreshing the page or come back later.
      </p>
      <button
        onClick={() => reset()}
        style={{
          padding: "12px 24px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b91c1c")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
      >
        Try Again
      </button>
    </div>
  );
}
