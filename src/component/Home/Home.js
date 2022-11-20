import React, { useEffect } from 'react'

import MovieListing from "../MovieListing/MovieListing"

import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, fetchForCar, getAllCar, getAllMovies } from '../../features/movies/MovieSlice';
import { Carousel } from "antd";
import "../Home/Home.scss"

const Home = () => {
  const dispatch=useDispatch()
  const movies=useSelector(getAllMovies);
  const cars=useSelector(getAllCar)
  console.log(cars,"carsss")
  const movieText="Harry";
  const ShowText="Friends";
  
  useEffect(()=>{
    
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(ShowText));
    dispatch(fetchForCar())
  },[dispatch])
  return (
    <div>
      <div className="banner-img">
        <Carousel autoplay>
          <div>
            
          </div>
        </Carousel>
      </div>

      <MovieListing />
    </div>
  );
}

export default Home