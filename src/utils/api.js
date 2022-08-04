import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = process.env.REACT_APP_API_KEY;

export const getMovies = async () => {
  try {
    const {data: {results}} = await axios.get(`${apiUrl}/movie/popular`, {
      params: {
        api_key: apiKey
      }
    });
    return results;
  } catch (error) {
    throw new Error(error);
  }
};
