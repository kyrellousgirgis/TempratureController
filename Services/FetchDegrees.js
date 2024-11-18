import axios from "axios";

const fetchDegrees = async (id) => {
  console.log("id:", id);
  const response = await axios.get(
    `https://673a6ed9339a4ce445182718.mockapi.io/temperature/degree/${id}`
  );
  return response;
};

export default fetchDegrees;
