import axios from "axios";

const KEY = "AIzaSyD3lvtvWAeCDqjb1gh7q10o5blVua3H4uw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
