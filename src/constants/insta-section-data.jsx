import axios from "axios";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://inverso-backend.onrender.com/api/insta-section?populate=*"
    );

    return response.data.data
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchInstaSectionData = async () => {
  const apiResponse = await fetchDataFromAPI();
  if (!apiResponse) return {};

  return apiResponse;
};

export default fetchInstaSectionData;
