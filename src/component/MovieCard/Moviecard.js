import React from 'react'
import {Link} from 'react-router-dom'
import "../MovieCard/Moviecard.scss"

const MovieCard = (props) => {
  const {data}=props;
 // console.log(data,"data")
  return (
    <>
      <div>
        <Link to={`/movie/${data.imdbID}`}>
          <div className="cards">
            <img
              className="cards__img"
              src={data ? data.Poster : ""}
              alt="img"
            />
            <div className="cards__overlay">
              <div className="card__title">{data ? data.Title : ""}</div>
              <div className="card__runtime">{data ? data.Year : ""}</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default MovieCard