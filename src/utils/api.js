import axios from 'axios';

export const apiKey = process.env.REACT_APP_API_KEY;

export const apiUrl = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p';

export const getMovies = async (endpoint, searchInput) => {
  try {
    const {data: {results}} = await axios.get(`${apiUrl}${endpoint}`, {
      params: {
        api_key: apiKey,
        query: searchInput
      }
    });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovie = async (movieId) => {
  try {
    const {data} = await axios.get(`${apiUrl}/movie/${movieId}`, {
      params: {
        api_key: apiKey,
        append_to_response: 'videos'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
