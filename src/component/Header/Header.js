import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from "../Header/user.png";
import logo from "../Header/imdb.png";
import "../Header/Header.scss"
import { Input } from "antd";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice';
const { Search } = Input;


const Header = () => {
  const [term,setterm]=useState("")
  const dispatch=useDispatch()
  
    console.log(term,"term")
   const onSearch=()=>{
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setterm(" ")
   }
  
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={logo} />
          <div className="app-name">Movieee</div>
        </div>
      </Link>

      <div className="Search-box">
        <Search
          placeholder="input search text"
          allowClear
          size="large"
          onSearch={onSearch}
          onChange={(e) => setterm(e.target.value)}
        />
      </div>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header