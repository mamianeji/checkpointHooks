import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function MovieCard({el}) {

  return (
    <div className='body'>
    <div className="container"> 
    <Link to={`/trailer/${el.name}`} style={{ textDecoration:"none", color:"black"}} >
        <div className="item-list">
          <div className="item item-1">
        
            <div className="img">
            
                <a>
                <img src={el.posterurl} alt=''/>
                </a>
              <div className="img-content"/> </div>
            <div className="text-container">
              <h2 className="title"> {el.name} </h2>
              <div className="content">
                <p> {el.description} </p>
              </div>
              <div className="readmore">
              <h3>show more</h3>
                <ReactStars count={5} size={24} activeColor="#ffd700" value={el.rating}/>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
      </div>
   
  )
}

export default MovieCard