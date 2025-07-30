"use client";
import { generateLead } from "@/api/LeadApi";
import { useState } from "react";
import toast from "react-hot-toast";
import { convertToShortDuration } from "./CommonFunctions";

const BookingForm = ({
  itineraryData,
  destination,
  packageData,
  handleClose,
}) => {
  const validDateRange = Number(itineraryData?.valid_days || 0);

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
    itinaryId: itineraryData?.itinerary_id || "",
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

  /** FORM VALIDATION **/
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
        const fieldNames = {
          customerName: "your name",
          email: "email",
          whatsapp: "WhatsApp number",
          travellers: "number of travellers",
          startDate: "start date",
          endDate: "end date",
        };
        toast.error(`Please fill out ${fieldNames[field] || field}`);
        return false;
      }
    }

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

  /** FORM SUBMISSION **/
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const submissionPromise = async () => {
      const res = await generateLead(formData);
      if (res?.status === 201) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
      return res;
    };

    await toast.promise(submissionPromise(), {
      loading: "Submitting...",
      success: "Booking submitted successfully!",
      error: (error) =>
        error?.response?.data?.message ||
        error?.message ||
        "An error occurred while submitting the form.",
    });

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

  /** GET MAX END DATE **/
  const getMaxEndDate = () => {
    if (!formData.startDate || !validDateRange) return undefined;
    const start = new Date(formData.startDate);
    start.setDate(start.getDate() + (validDateRange - 1));
    return start.toISOString().split("T")[0];
  };

  /** HANDLE START DATE CHANGE & AUTO END DATE **/
  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    let autoEndDate = "";

    if (newStartDate && validDateRange > 0) {
      const startDate = new Date(newStartDate);
      startDate.setDate(startDate.getDate() + (validDateRange - 1));
      autoEndDate = startDate.toISOString().split("T")[0];
    }

    setFormData((prev) => ({
      ...prev,
      startDate: newStartDate,
      endDate: autoEndDate,
    }));
  };

  return (
    <form className="information-form" onSubmit={handleSubmit}>
      <h3>Fill the informations below</h3>

      <div className="inputs-wrapper">
        {/* Customer Name */}
        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="text"
                name="customerName"
                placeholder="Enter your full name *"
                value={formData.customerName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Travel Location & Duration */}
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
              <input
                type="text"
                name="travelDuration"
                value={convertToShortDuration(formData.travelDuration)}
                onChange={handleChange}
                disabled
              />
            </div>
          </div>

          <div className="col-lg-6 hideClass">
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

        {/* Email */}
        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="email"
                name="email"
                placeholder="Mail ID *"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="text"
                name="whatsapp"
                placeholder="Whatsapp Number *"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Travellers */}
        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <input
                type="number"
                name="travellers"
                placeholder="Number of Travellers *"
                value={formData.travellers}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Start & End Dates */}
        <div className="row">
          <div className="col-lg-6">
            <div className="input-row">
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={handleStartDateChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-row">
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                min={
                  formData.startDate || new Date().toISOString().split("T")[0]
                }
                max={getMaxEndDate()}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
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

export default BookingForm;
