import axios from 'axios';

const API_URL = 'https://api.tvmaze.com';

export const searchShows = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search/shows?q=${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows:', error);
    throw error;
  }
};

export const getShowSummary = async (showId) => {
  try {
    const response = await axios.get(`${API_URL}/shows/${showId}`);
    return response.data.summary;
  } catch (error) {
    console.error(`Error fetching summary for show ${showId}:`, error);
    throw error;
  }
};
