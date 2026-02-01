import axios from 'axios';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const searchUsers = async (username, location, minRepos) => {
  try {
    let query = username || '';
    
    if (location && location.trim()) {
      query += ` location:"${location.trim()}"`;
    }
    
    if (minRepos) {
      query += ` repos:>${minRepos}`;
    }
    
    console.log("Searching for:", query); // Debug log
    
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=5`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("GitHub API Error:", error.response?.data || error.message);
    throw error;
  }
};