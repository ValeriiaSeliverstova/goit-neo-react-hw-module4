import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] =
  "Client-ID wGEMjXfkEKSB7K9P59AvDMnGulsEc3zFGwwBciTLm1g";

export const getImages = async (searchValue, page) => {
  const response = await axios(`/search/photos/`, {
    params: {
      page,
      per_page: 16,
      query: searchValue,
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
    total: response.data.total,
  };
};
