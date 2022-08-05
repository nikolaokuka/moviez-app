import axios from 'axios';

export const apiKey = process.env.REACT_APP_API_KEY;

export const apiUrl = 'https://api.themoviedb.org/3';
export const imageUrl = 'https://image.tmdb.org/t/p';

export const getMovies = async (endpoint, query) => {
  try {
    const {data: {results}} = await axios.get(`${apiUrl}${endpoint}`, {
      params: {
        api_key: apiKey,
        query: query
      }
    });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};
