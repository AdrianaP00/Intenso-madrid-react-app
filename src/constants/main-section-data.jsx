import axios from "axios";

const fetchDataFromAPI = async () => {
  try {
    const response = await axios.get(
      "https://inverso-backend.onrender.com/api/main-section?populate=*"
    );

    return response.data.data
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const fetchMainSectionData = async () => {
  const apiResponse = await fetchDataFromAPI();
  if (!apiResponse) return {};

  return apiResponse;
};

export default fetchMainSectionData;
