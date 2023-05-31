import React from 'react'
import MovieCard from './MovieCard'
import AddMovies from './AddMovies'

function MovieList({movies, setmovies, text, rate}) {
  return (
    <div> 
       <iframe width="100%" height="500" src="https://www.youtube.com/embed/328sDexhpo0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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