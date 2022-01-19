import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './style.css';


export default function WatchMovie() {
  const params = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=e2127d4a47fa26db35b4b3333e597d25`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="container">
      <h2 className="head">Movie Details:</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`} style={{ width: 150 }} className=" card-img-top" alt="..." />
      <div>
        <h4 className="fw-bold">Name :</h4>
        <p className="fw-light">{details.title}</p>
      </div>
      <div>
        <h4 className="fw-bold">OverView : </h4>
        <p className="fw-light">
          {details.overview}
        </p>
      </div>
    </div>
  );
}
