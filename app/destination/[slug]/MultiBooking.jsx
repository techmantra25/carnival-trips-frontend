"use client";
import { generateLead } from "@/api/LeadApi";
import { convertToShortDuration } from "@/utils/CommonFunctions";
import { useState } from "react";
import toast from "react-hot-toast";

const MultiBooking = ({
  itineraryData,
  destination,
  packageData,
  handleClose,
}) => {
  const [selectedPackageId, setSelectedPackageId] = useState("");

  // Combine all itineraries into a single array with package info
  const AllIntinaryOptions = destination?.packages?.flatMap(
    (pkg) =>
      pkg?.itineraries?.map((itinerary) => ({
        ...itinerary,
        package_id: pkg.package_id,
        package_name: pkg.package_name,
      })) || []
  );

  const filteredItineraries = selectedPackageId
    ? AllIntinaryOptions.filter(
        (item) => item.package_id === parseInt(selectedPackageId)
      )
    : AllIntinaryOptions;

  const [formData, setFormData] = useState(() => {
    const initialItinerary = AllIntinaryOptions.find(
      (item) => item.itinerary_id === itineraryData?.itinerary_id
    );
    if (initialItinerary) {
      setSelectedPackageId(initialItinerary.package_id.toString());
    }
    return {
      customerName: "",
      travelLocation: initialItinerary?.title || "",
      travelDuration: initialItinerary?.duration || "",
      email: "",
      whatsapp: "",
      travellers: "",
      startDate: "",
      endDate: "",
      itinaryId: initialItinerary?.itinerary_id || "",
      packageId: initialItinerary?.package_id || "",
      destinationID: destination?.id || itineraryData?.destination_id || "",
      crm_itinerary_id: initialItinerary?.crm_itinerary_id || "",
    };
  });

  const handlePackageChange = (e) => {
    const { value } = e.target;
    setSelectedPackageId(value);
    setFormData((prev) => ({
      ...prev,
      packageId: value,
      travelLocation: "",
      travelDuration: "",
      itinaryId: "",
      crm_itinerary_id: "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      if (name === "travelLocation") {
        const selectedItinerary = AllIntinaryOptions.find(
          (item) => item.title === value
        );
        if (selectedItinerary) {
          setSelectedPackageId(selectedItinerary.package_id.toString());
        }

        let newEndDate = prev.endDate;
        if (prev.startDate) {
          if (selectedItinerary?.duration) {
            const durationString = selectedItinerary.duration || "0";
            const travelDurationDays = parseInt(
              durationString.match(/\d+/)?.[0] || "0",
              10
            );
            if (travelDurationDays > 0) {
              const startDate = new Date(prev.startDate);
              // Add travelDurationDays (not travelDurationDays - 1) to account for nights
              startDate.setDate(startDate.getDate() + travelDurationDays);
              newEndDate = startDate.toISOString().split("T")[0];
            } else {
              newEndDate = "";
            }
          } else {
            newEndDate = "";
          }
        }

        return {
          ...prev,
          [name]: value,
          travelDuration: selectedItinerary?.duration || "",
          itinaryId: selectedItinerary?.itinerary_id || "",
          crm_itinerary_id: selectedItinerary?.crm_itinerary_id || "",
          packageId: selectedItinerary?.package_id || "",
          endDate: newEndDate,
        };
      }
      return { ...prev, [name]: value };
    });
  };

  const validateForm = () => {
    const requiredFields = [
      "customerName",
      "email",
      "whatsapp",
      "travellers",
      "startDate",
      "endDate",
      "travelLocation",
      "packageId",
    ];

    for (let field of requiredFields) {
      if (!String(formData[field] || "").trim()) {
        const fieldNames = {
          customerName: "your name",
          email: "email",
          whatsapp: "WhatsApp number",
          travellers: "number of travellers",
          startDate: "start date",
          endDate: "end date",
          travelLocation: "itinerary",
          packageId: "package",
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

    resetForm();
    handleClose();
  };

  const resetForm = () => {
    setFormData({
      customerName: "",
      travelLocation: "",
      travelDuration: "",
      email: "",
      whatsapp: "",
      travellers: "",
      startDate: "",
      endDate: "",
      itinaryId: "",
      packageId: "",
      destinationID: "",
      crm_itinerary_id: "",
    });
    setSelectedPackageId("");
  };

  const getMaxEndDate = () => {
    if (!formData.startDate) return undefined;

    const selectedItinerary = AllIntinaryOptions.find(
      (item) => item.itinerary_id === formData.itinaryId
    );

    const validDateRange = Number(selectedItinerary?.valid_days || 0);

    if (!validDateRange) return undefined;

    const start = new Date(formData.startDate);
    start.setDate(start.getDate() + validDateRange);
    return start.toISOString().split("T")[0];
  };

  return (
    <form className="information-form" onSubmit={handleSubmit}>
      <h3>Fill the informations</h3>

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
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="input-row">
              <select
                name="packageSelection"
                value={selectedPackageId}
                onChange={handlePackageChange}
                required
              >
                <option value="">Select Package</option>
                {destination?.packages?.map((pkg) => (
                  <option key={pkg.package_id} value={pkg.package_id}>
                    {pkg.package_name}
                  </option>
                ))}
              </select>
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
                required
              >
                <option value="">Select Itinerary</option>
                {filteredItineraries.map((item) => (
                  <option
                    key={`${item.package_id}-${item.itinerary_id}`}
                    value={item?.title}
                  >
                    {item?.title}
                  </option>
                ))}
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
                  key={`${formData.itinaryId}-${formData.travelDuration}`}
                  value={formData.travelDuration}
                >
                  {formData.travelDuration}
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
                required
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
                required
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
                required
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
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => {
                  const newStartDate = e.target.value;
                  const selectedItinerary = AllIntinaryOptions.find(
                    (item) => item.itinerary_id === formData.itinaryId
                  );
                  const durationString = selectedItinerary?.duration || "0";
                  const travelDurationDays = parseInt(
                    durationString.match(/\d+/)?.[0] || "0",
                    10
                  );

                  if (newStartDate && travelDurationDays > 0) {
                    const startDate = new Date(newStartDate);
                    // Add full travel days (3 days trip -> add 3)
                    startDate.setDate(startDate.getDate() + travelDurationDays);
                    const newEndDate = startDate.toISOString().split("T")[0];
                    setFormData((prev) => ({
                      ...prev,
                      startDate: newStartDate,
                      endDate: newEndDate,
                    }));
                  } else {
                    setFormData((prev) => ({
                      ...prev,
                      startDate: newStartDate,
                      endDate: "",
                    }));
                  }
                }}
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
                disabled={!formData.startDate}
                min={formData.startDate}
                max={getMaxEndDate()}
                onChange={handleChange}
                required
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

export default MultiBooking;
