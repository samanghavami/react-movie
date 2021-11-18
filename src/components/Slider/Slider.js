import React from "react";
import { Link } from "react-router-dom";
import "./Slider.scss";

const Slider = (props) => {
  const { data } = props;
  return (
    <div className="card-item2">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          {/* <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div> */}
        </div>
      </Link>
    </div>
  );
};

export default Slider;