import api from "./api";

export const getAllTripCategories = async () => {
  try {
    const response = await api.get("/trip-category");
    return response?.data;
  } catch (error) {
    console.error("Error fetching trip-category data:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/trip-category/7/destinations

export const getDestinations = async (tripCategoryId) => {
  try {
    const response = await api.get(`/trip-category/${tripCategoryId}/destinations`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching destinations data:", error);
    throw error;
  }
};


//https://vanguardit.co/dev/carnival_trip_admin/api/itineraries/destination/8/packages-itineraries

export const getPackagesItineraries = async (destinationId) => {
  try {
    const response = await api.get(`/itineraries/destination/${destinationId}/packages-itineraries`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching packages-itineraries data:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/itineraries/destination/andaman-packages-from-delhi/packages-from-city

export const getPackagesFromCity = async (destinationId, city) => {
  try {
    const response = await api.get(`/itineraries/destination/${destinationId}/packages-from-city`, {
      params: { city }
    });
    return response?.data;
  } catch (error) {
    console.error("Error fetching packages-from-city data:", error);
    throw error;
  }
};

