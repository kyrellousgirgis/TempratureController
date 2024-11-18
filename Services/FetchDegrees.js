import axios from "axios";

//simple caching mechanism implementation
//surely it has some problems like invalidation
//that's why we mostly use axios cache interceptors in real life apps
const degrees = {};

// try to invavlidate every 10 secondss
setInterval(() => {
  console.log("clear");
  for (const degree in degrees) delete degrees[degree];
}, 15000);

const fetchDegrees = async (id) => {
  console.log("id:", id);
  if (!degrees[id]) {
    const response = await axios.get(
      `https://673a6ed9339a4ce445182718.mockapi.io/temperature/degree/${id}`
    );
    degrees[id] = response;
  } else {
    console.log("from cache");
  }
  return degrees[id];
};

export default fetchDegrees;
