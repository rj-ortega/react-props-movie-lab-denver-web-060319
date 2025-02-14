import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    return movieData.map((movie, index) => {
      return (
        <li key={index}>
          <MovieCard
            title={movie.title}
            IMDBRating={movie.IMDBRating}
            genres={movie.genres}
            poster={movie.poster} />
        </li>
      )
    })
  }

  render() {
    return (
      <div id="movie-showcase">
        <ul>{this.generateMovieCards()}</ul>
      </div>
    )
  }
}
