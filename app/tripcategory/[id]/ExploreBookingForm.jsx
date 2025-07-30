"use client";
import { generateLead } from "@/api/LeadApi";
import { convertToShortDuration } from "@/utils/CommonFunctions";
import { useState } from "react";
import toast from "react-hot-toast";
// import { convertToShortDuration } from "./CommonFunctions";

const ExploreBookingForm = ({
  itineraryData,
  destination,
  packageData,
  handleClose,
}) => {
  const validDateRange = Number(itineraryData?.total_days || 0);

  console.log(validDateRange, "Valid Date Range");

  const [formData, setFormData] = useState({
    customerName: "",
    travelLocation: itineraryData?.title || "",
    travelDuration:
      itineraryData?.duration ||
      convertToShortDuration(itineraryData?.trip_durations) ||
      "",
    email: "",
    whatsapp: "",
    travellers: "",
    startDate: "",
    endDate: "",
    itineraryId: itineraryData?.id || "",
    packageId: packageData?.package_id || "",
    destinationID: destination?.id || itineraryData?.destination_id || "",
    crm_itinerary_id: itineraryData?.crm_itinerary_id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const requiredFields = [
      "customerName",
      "email",
      "whatsapp",
      "travellers",
      "startDate",
      "endDate",
    ];

    for (let field of requiredFields) {
      if (!formData[field]?.trim()) {
        if (field === "customerName") {
          toast.error("Please fill out your name");
        } else {
          toast.error(
            `Please fill out the ${field.replace(/([A-Z])/g, " $1")}`
          );
        }
        return false;
      }
    }

    // Optional: basic email & phone validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    if (!/^\d{10}$/.test(formData.whatsapp)) {
      toast.error("Please enter a valid 10-digit WhatsApp number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Simulate API submission
    console.log("Form submitted:", formData);
    await toast.promise(
      generateLead(formData).then((res) => {
        if (res?.status === 201) {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
        return res;
      }),
      {
        loading: "Submitting...",
        success: "Booking submitted successfully!",
        error: (error) =>
          error?.response?.data?.message ||
          error?.message ||
          "An error occurred while submitting the form.",
      }
    );

    // Reset form (optional)
    setFormData((prev) => ({
      ...prev,
      customerName: "",
      email: "",
      whatsapp: "",
      travellers: "",
      startDate: "",
      endDate: "",
      itinaryId: itineraryData?.itinerary_id || "",
      packageId: packageData?.package_id || "",
      destinationID: destination?.id || "",
      crm_itinerary_id: itineraryData?.crm_itinerary_id || "",
    }));
    handleClose();
  };

  // Helper to get max end date based on startDate and validDateRange
  const getMaxEndDate = () => {
    if (!formData.startDate || !validDateRange) return undefined;
    const start = new Date(formData.startDate);
    start.setDate(start.getDate() + (validDateRange - 1)); // validDateRange is inclusive
    return start.toISOString().split("T")[0];
  };

 

  return (
    <form className="information-form" onSubmit={handleSubmit}>
      <h3>Fill the informations below</h3>
      {/* <div className="divider" /> */}
      <div className="inputs-wrapper">
        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="text"
                name="customerName"
                placeholder="Enter your full name *"
                value={formData.customerName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="input-row">
              <select
                name="travelLocation"
                value={formData.travelLocation}
                onChange={handleChange}
                disabled
              >
                <option value={itineraryData?.title}>
                  {itineraryData?.title}
                </option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-row">
              <select
                name="travelDuration"
                value={formData.travelDuration}
                onChange={handleChange}
                disabled
              >
                <option
                  value={
                    itineraryData?.duration ||
                    convertToShortDuration(itineraryData?.trip_durations)
                  }
                >
                  {itineraryData?.duration ||
                    convertToShortDuration(itineraryData?.trip_durations)}
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="email"
                name="email"
                placeholder="Mail ID *"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="text"
                name="whatsapp"
                placeholder="Whatsapp Number *"
                value={formData.whatsapp}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="text"
                name="travellers"
                placeholder="Number of Travellers *"
                value={formData.travellers}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="input-row">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                min={new Date().toISOString().split("T")[0]} // Prevent past dates
                onChange={(e) => {
                  handleChange(e);
                  setFormData((prev) => ({
                    ...prev,
                    endDate: "", // Reset end date when start date changes
                  }));
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-row">
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                disabled={!formData.startDate} // Disabled if no start date
                min={
                  formData.startDate || new Date().toISOString().split("T")[0]
                } // Must be after or equal to start date
                max={getMaxEndDate()} // End date cannot be greater than startDate + validDateRange
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="submit-row">
              <button type="submit" className="btn-submit">
                Submit Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExploreBookingForm;
