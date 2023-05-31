import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";

function Trailer({ movies }) {
    const parameter= useParams();
 
    const movie= movies.filter((el)=> el.name == parameter.name)[0];
    console.log(movie)
  return (
    <div>
         <img style={{width:'650px', height:'550px', marginTop:'25px', marginLeft:'400px'}} src={movie.posterurl} />
         <h1 style={{textAlign:'center', color:'red'}}> {movie.name} </h1>
         <p style={{textAlign:'center'}}> {movie.description} </p>
         <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}> <ReactStars count={5} size={24} activeColor="#ffd700" value={movie.rating} />   </div>
    </div>
  )
}

export default Trailer