import React from 'react'
import { useSelector } from 'react-redux';
import "../MovieListing/MovieListing.scss"
import MovieCard from "../MovieCard/Moviecard"
import { getAllMovies, getAllShows } from '../../features/movies/MovieSlice'
import {Row,Col} from "antd"

const MovieListing = () => {
  const movies=useSelector(getAllMovies)
  const shows=useSelector(getAllShows)
  console.log(shows,"shows")
  console.log(movies.Search,"movies")
 
  return (
    <div className="movies-wrapper">
      <div className="movie-list">
        <h2>Movie</h2>
        <div className="movie-container">
          <Row gutter={[20, 20]}>
            {movies.Search &&
              movies.Search.map((movie, i) => {
                return (
                  <>
                    <Col>
                      <MovieCard data={movie} key={i} />
                    </Col>
                  </>
                );
              })}
          </Row>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="show-container">
          <Row gutter={[20, 20]}>
            {shows.Search &&
              shows.Search.map((movie, i) => {
                return (
                  <>
                    <Col>
                      <MovieCard data={movie} key={i} />
                    </Col>
                  </>
                );
              })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default MovieListing