import axios from "axios";

const KEY = "AIzaSyCNuW9MvRl6TCIKEZOyQsA8WDa69xtnwUc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
  },
  headers: {},
});
