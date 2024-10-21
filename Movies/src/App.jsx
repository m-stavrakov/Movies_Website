import { useState, useEffect } from 'react';
import './App.css';
import SearchIcon from './search.svg';

// e64a1b71

const API_URL = 'http://www.omdbapi.com?apikey=e64a1b71';

const movie1 = {
  Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NjU5MTg5OF5BMl5BanBnXkFtZTgwOTkyMzQxMDE@._V1_SX300.jpg",
  Title: "Scream",
  Type: "movie",
  Year: "1996",
  imdbID: "tt0117571"}

function App() {

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  }
  
  // fetching movies
  useEffect(() => {
    searchMovies('Scream');
  }, [])

  return (
    <div className="app">
      <h1>MovieWorld</h1>

      <div className="search">
        <input 
          type="text"
          placeholder='Find a movie'
          value="Superman"
          onChange={() => {

          }} />
        <img 
          src={SearchIcon} 
          alt="search"
          onClick={() => {

          }} />
      </div>

      <div className="container">
          <div className="movie">
            <div>
              <p>{movie1.Year}</p>
            </div>

            <div>
              <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
            </div>

            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
