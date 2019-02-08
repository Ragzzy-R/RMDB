import { create } from "apisauce";
import { CONFIGURATION_URL, DISCOVER_URL } from "./urlConsants";

const API = (function apiFn() {
  const API_KEY = "f455e73f67e2e234758c36a018933932";
  const api = create({
    baseURL: "https://api.themoviedb.org/3"
  });

  return {
    getConfiguration() {
      return api.get(`${CONFIGURATION_URL}?api_key=${API_KEY}`);
    },
    discover() {
      return api.get(
        `${DISCOVER_URL}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
    }
  };
})();

export default API;
