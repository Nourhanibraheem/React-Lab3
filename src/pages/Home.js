import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './style.css';

export default function MoviesDetails() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.themoviedb.org/3/movie/popular?api_key=e2127d4a47fa26db35b4b3333e597d25")
            .then((res) => setMovies(res.data.results))
            .catch((err) => console.log(err));
    }, []);
    console.log(movies)
    return (
        <div className="container ">
            <h1 className="head">Movies</h1>
            <div className="row">
                {movies.map((movie) => {
                    return (
                        <div className="Mov card col-3" key={movie.id} >
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
                            <div className=" card-body">
                                <h6 className="fw-bold card-title">{movie.title}</h6>
                                <Link to={`/watchMovies/${movie.id}`} className="btn btn-danger">Watch Movie</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div >
    );

}



