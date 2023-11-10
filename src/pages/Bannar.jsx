import React, { useEffect, useState } from "react";
import './banner.css'
import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import MovieSwiper from "../components/MovietSwiper";

const Banner = () => {
  const [movies, setMovies] = useState([])
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then(respones => respones.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    fetchData()
  }, [])

  const clickHandler =id=>{

    const newMovies = movies.map((movie)=>{
      movie.active = false
      if (movie._id === id){
        movie.active = true
      }
      return movie
    });

    console.log("updated..!")
    setMovies(newMovies)
  }

  return (
   
      <div className="banner">
      {movies && movies.length > 0 && movies.map(movie => (
        <div className="movie" key={movie._id}>
          <img src={movie.bgImg} alt="backgroundImage" className={`bgImg ${movie.active ? 'active' : undefined}`} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={movie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={movie} />
              </div>
            </div>

          </div>
        </div>
      ))}
      {movies && movies.length > 0 && <MovieSwiper slides={movies} click={clickHandler} />}
      </div>

  );
}

export default Banner