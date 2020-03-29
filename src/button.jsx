import React from 'react';

const Button = ({filter, filterOnClick, setClassLink, sortMovies}) => {
    return <li className='nav-item'>
        <button onClick={filterOnClick(filter)}
                className={setClassLink(filter)}>{filter}
        </button>
    </li>
}

export default Button