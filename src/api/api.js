import axios from "axios";

export const api = axios.create({
  baseURL: "https://66255aea052332d5531fdfb8.mockapi.io/",
});

export const getCampers = async () => {
  const { data } = await axios.get("adverts");
  console.log(data);
  return data;
};
