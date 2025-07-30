import FooterClient from "./FooterClient";
import { getPageContent, getSocialMedia, getWebSiteSettings } from "../../api/homepageApi";

export default async function Footer() {
  let socialMedia = [];
  let webSiteSettings = {};
  let policy = [];

  try {
    const response = await getSocialMedia();
    if (response?.status && response?.data) {
      socialMedia = response.data;
    }
  } catch (err) {
    console.error("Error fetching social media:", err);
  }

  try {
    const response = await getWebSiteSettings();
    if (response?.status && response?.data) {
      webSiteSettings = response.data;
    }
  } catch (err) {
    console.error("Error fetching website settings:", err);
  }

  try {
    const policyResponse = await getPageContent();
    if (policyResponse?.status && policyResponse?.data) {
      policy = policyResponse.data;
    }
  } catch (err) {
    console.error("Error fetching website policy:", err);
  }

  return (
    <FooterClient
      socialMedia={socialMedia}
      webSiteSettings={webSiteSettings}
      policy={policy}
    />
  );
}


