import axios from "axios";

const BASE_URL = "https://anikart-strapi-backend.onrender.com";

const STRAPI_TOKEN = import.meta.env.VITE_APP_STRAPI_TOKEN;

const params = {
  headers: {
    Authorization: "bearer " + STRAPI_TOKEN,
  },
};



export const fetchDataFromApi = async (url) => {
  try {
    // console.log(BASE_URL);
    // console.log(STRAPI_TOKEN);
    const { data } = await axios.get(BASE_URL + url, params);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
