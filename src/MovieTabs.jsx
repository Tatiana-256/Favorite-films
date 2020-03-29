import React from 'react';
import Button from "./button";

class MovieTabs extends React.Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.sort_by !== this.props.sort_by ? true : false
    }

// , popularity.asc, popularity.desc, release_date.asc, release_date.desc, revenue.asc, revenue.desc, primary_release_date.asc, primary_release_date.desc, original_title.asc, original_title.desc, vote_average.asc, vote_average.desc, vote_count.asc, vote_count.desc

    render() {
        const filtersAPI = ['popularity.desc', 'revenue.desc', 'vote_average.desc', "release_date.desc"]
        const filtersName = ['Popular', 'Revenue', 'Vote average', 'Release date']
        const filter = filtersAPI.map((f, i) => ({filterAPI: f, nameFilter: filtersName[i]}))


        const filterOnClick = event => {
            return (filter) => {
                this.props.sortMovies(event)
            }
        }

        const setClassLink = (filter) => {
            return `nav-link ${this.props.sort_by === filter ? 'active' : ''}`
        }

        return <div className='tabs nav nav-pills'>
            <li className='nav-item'>
                <div className='list-group list-group-horizontal-md'>
                    {filter.map(btn => <Button filter={btn} filterOnClick={filterOnClick}
                                               setClassLink={setClassLink}/>)}
                </div>
            </li>
        </div>
    }
}

export default MovieTabs




