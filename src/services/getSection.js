import axios from "axios";
import { API_URL } from "./config";

export default async function getSection(sectionName) {
  try {
    const res = await axios.get(`${API_URL}/${sectionName}?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error(`Error fetching ${sectionName} data: ${error}`);
    return null;
  }
}
