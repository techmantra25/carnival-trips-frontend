import api from "./api";

// export const generateLead = async (payload) => {
//   try {
//     const response = await api.post("/lead-genrate", payload);
//     return response?.data;
//   } catch (error) {
//     console.error("Error fetching leads:", error);
//     throw error;
//   }
// };

export const generateLead = async (payload) => {
  try {
    const response = await api.post(
      "https://christmastree.quickdemo.in/api/crm/lead/store",
      payload
    );
    return response?.data;
  } catch (error) {
    console.error("Error generating lead:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/news-letter?email=carnival@gmail.com

export const subscribeNewsletter = async (email) => {
  try {
    const response = await api.post(
      "https://vanguardit.co/dev/carnival_trip_admin/api/news-letter",
      { email }
    );
    return response?.data;
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    throw error;
  }
}