import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function AdvancedSearch() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await searchUsers(username, location, minRepos);
      setResults(data.items || []);
    } catch {
      setError('Search failed. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub Search</h1>
      
      <form onSubmit={handleSearch} className="mb-6">
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Username (optional)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Min Repos (optional)"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
        <button 
          type="submit"
          disabled={loading}
          className="mt-3 bg-blue-500 text-white p-2 rounded w-full"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}

      {error && <p className="text-red-500 text-center">{error}</p>}

      {results.length > 0 && (
        <div>
          <h2 className="text-xl font-bold mb-3">Results ({results.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((user) => (
              <div key={user.id} className="border p-3 rounded">
                <img 
                  src={user.avatar_url} 
                  alt={user.login}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="font-bold text-center">{user.login}</h3>
                <a 
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-500 mt-2"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {!loading && results.length === 0 && !error && (
        <p className="text-gray-500 text-center mt-4">
          Enter search criteria above
        </p>
      )}
    </div>
  );
}

export default AdvancedSearch;