import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null);
    
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const userDetails = userData ? [
    { label: 'Name', value: userData.name || userData.login },
    { label: 'Bio', value: userData.bio },
    { label: 'Followers', value: userData.followers },
    { label: 'Following', value: userData.following },
  ] : [];

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Filter by location (optional)"
          style={{ marginLeft: '10px' }}
        />
        
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {userData && !loading && !error && (
        <div>
          <img 
            src={userData.avatar_url} 
            alt={userData.name} 
            width="100"
          />
          
          {userDetails.map((detail, index) => (
            detail.value && (
              <div key={index}>
                <strong>{detail.label}:</strong> {detail.value}
              </div>
            )
          ))}
          
          <a 
            href={userData.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;