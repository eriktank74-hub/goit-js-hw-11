import axios from "axios";

export default {
  getImagesByQuery: (query) => {
    return axios.get(`https://pixabay.com/api/?key=54346745-2618290c8cbee7c5ced8d190a&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
  }
};
