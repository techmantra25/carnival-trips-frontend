import api from "./api";

export const getAllBlogs = async () => {
  try {
    const response = await api.get("/blogs");
    return response?.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getWhyChooseUs = async () => {
  try {
    const response = await api.get("/why-choose-us");
    return response?.data;
  } catch (error) {
    console.error("Error fetching why-choose-us data:", error);
    throw error;
  }
};

export const getPartners = async () => {
  try {
    const response = await api.get("/partners");
    return response?.data;
  } catch (error) {
    console.error("Error fetching partners data:", error);
    throw error;
  }
};

export const getSocialMedia = async () => {
  try {
    const response = await api.get("/social-media");
    return response?.data;
  } catch (error) {
    console.error("Error fetching social media data:", error);
    throw error;
  }
};


export const getWebSiteSettings = async () => {
  try {
    const response = await api.get("/website-settings");
    return response?.data;
  } catch (error) {
    console.error("Error fetching website settings data:", error);
    throw error;
  }
};

//api/pageContent

export const getPageContent = async () => {
  try {
    const response = await api.get(`pageContent`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching page content data:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/pageBanner

export const getHomePageBanner = async () => {
  try {
    const response = await api.get("/pageBanner");
    return response?.data;
  } catch (error) {
    console.error("Error fetching page banner data:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/search-destinations?keyword=an

export const getSearchDestinations = async (keyword) => {
  try {
    const response = await api.get(`/search-destinations?keyword=${keyword}`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching search destinations data:", error);
    throw error;
  }
};

//https://vanguardit.co/dev/carnival_trip_admin/api/offers

export const getOffers = async () => {
  try {
    const response = await api.get("/offers");
    return response?.data;
  } catch (error) {
    console.error("Error fetching offers data:", error);
    throw error;
  }
}

//https://vanguardit.co/dev/carnival_trip_admin/api/tripcategory/domestic-trips

export const ExploreTripCategory = async (category) => {
  try {
    const response = await api.get(`/tripcategory/${category}`);
    return response?.data;
  } catch (error) {
    console.error("Error fetching trip category data:", error);
    throw error;
  }
}

//https://vanguardit.co/dev/carnival_trip_admin/api/home-page-activities

export const getHomePageActivities = async () => {
  try {
    const response = await api.get("/home-page-activities");
    return response?.data;
  } catch (error) {
    console.error("Error fetching home page activities data:", error);
    throw error;
  }
}