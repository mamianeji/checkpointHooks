import React from 'react'
import MovieCard from './MovieCard'
import AddMovies from './AddMovies'

function MovieList({movies, setmovies, text, rate}) {
  return (
    <div> 
    <div className='addmovie'> 
    <AddMovies movies={movies} setmovies={setmovies} />
    </div>
    <div className='container'>
    {movies .filter((el)=> el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate ).map((el)=>(

    <MovieCard el={el} />

    )).reverse()}


</div>
    </div>
  )
}

export default MovieList