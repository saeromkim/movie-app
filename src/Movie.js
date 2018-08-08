import React from 'react';
import propTypes from 'prop-types';
import './Movie.css';


function Movie({title, poster}){
    return(
        <div classname="">
                <MoviePoster poster={poster}/>
                <h1>{title}</h1>
            </div> 
    )
}

function MoviePoster({poster}){
    return(
        <img src={poster} alt="Movie Poster" />
    )
}

Movie.propTypes={
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired
}

MoviePoster.propTypes={
    poster : propTypes.string.isRequired
}


export default Movie;