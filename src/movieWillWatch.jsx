import React from 'react';


const MovieWillWatch = (props) => {
    return <div className='row-cols-md-1'>
        <ul className='list-group list-group-flush'>
            <li className="card-header">Title: {props.movie.title} </li>
            <img className='card-img-top'
                 src={`http://image.tmdb.org/t/p/w500${props.movie.backdrop_path || props.movie.poster_path}`} alt=''/>
            <li className='list-group-item'>Rating: {props.movie.vote_average}</li>
        </ul>
    </div>
}

export default MovieWillWatch