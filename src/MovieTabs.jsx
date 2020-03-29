import React from 'react';
import Button from "./button";

const MovieTabs = (props) => {
    const filters = ['popularity.desc', 'revenue.desc', 'vote_average.desc']

    const filterOnClick = event => {
        return (filter) => {
            props.sortMovies(event)
        }
    }

    const setClassLink = (filter) => {
        return `nav-link ${props.sort_by === filter ? 'active' : ''}`
    }

    return <ul className='tabs nav nav-pills'>
        <li className='nav-item'>
            {filters.map(btn => <Button filter={btn} filterOnClick={filterOnClick}
                                        setClassLink={setClassLink}/>)}
        </li>
    </ul>
}
export default MovieTabs




