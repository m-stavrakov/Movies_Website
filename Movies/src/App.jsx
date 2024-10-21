import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=e64a1b71';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }
  
  // fetching movies
  useEffect(() => {
    searchMovies('');
  }, [])

  return (
    <div className="app">
      <h1>MovieWorld</h1>

      <div className="search">
        <input 
          type="text"
          placeholder='Find a movie'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
        <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
        <button onClick={() => setSearchTerm('')}>X</button>
      </div>

      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}
    </div>
  )
}

export default App
