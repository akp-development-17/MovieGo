import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchShows } from '../apiService';
import './css/ShowList.css'; 

const ShowList = () => {
  const [shows, setShows] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const data = await searchShows(searchQuery);
      setShows(data);
    } catch (error) {
    }
  };

  return (
    <div className="show-list-container">
      <h1 className="show-list-title">Movies & Series</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search shows"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
      <ul className="show-list">
        {shows.map((show) => (
          <li key={show.show.id} className="show-item">
            <Link className="show-link" to={`/show/${show.show.id}/${encodeURIComponent(show.show.name)}`}>
              {show.show.name}
            </Link>
            <p className="show-premiered">{show.show.premiered}</p>
            <p className="show-language">{show.show.language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
