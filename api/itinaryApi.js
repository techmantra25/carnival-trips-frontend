import api from "./api";


export const getItinerariesDetails = async (slug) => {
  try {
    const response = await api.get(
      `/destination/details/${slug}`
    );

    return response?.data;
  } catch (error) {
    console.error("Error fetching itinerary data:", error);
    throw error;
  }
};
