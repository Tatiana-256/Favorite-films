import React from 'react';

const Button = ({filter, filterOnClick, setClassLink, sortMovies}) => {
    return <div className='nav-item'>
        <button onClick={filterOnClick(filter.filterAPI)}
                className={setClassLink(filter.filterAPI)}>{filter.nameFilter}
        </button>
    </div>
}

export default Button