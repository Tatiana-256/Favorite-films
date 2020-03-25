import React from "react";
import * as PropTypes from "prop-types";
import './Movie.css'

class Movie extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showOverview: false,
            like: false,
            movie: this.props.movie,
            willSee: false
        }
    }

    showHideOverview = () => {
        this.setState({showOverview: !this.state.showOverview})
    }

    addLike = () => {
        this.setState({like: !this.state.like})
    }

    deleteMovieOnClick = () => {
        this.props.deleteMovie(this.state.movie)

    }

    addMovieWillWatch = () => {
        this.props.addMovieWillWatch(this.state.movie)
        this.setState({willSee: true})
    }

    removeMovieWillWatch = () => {
        this.props.deleteMovieWillWatch(this.state.movie)
        this.setState({willSee: false})
    }

    render() {
        let {movie: {title, vote_average, overview, backdrop_path, poster_path}} = this.props;

        return <div className='card'>
            <img className='card-img-top' src={`http://image.tmdb.org/t/p/w500${backdrop_path || poster_path}`} alt=''/>
            <div className='card-body'>
                <div className='card-title'>
                    {title}
                </div>
                <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0'>Rating: {vote_average}</p>
                    {this.state.showOverview
                        ? <p>{overview}</p>
                        : null}
                    {this.state.willSee ?
                        <button type='button' className='btn btn-success' onClick={this.removeMovieWillWatch}>Remove
                            from list</button> :
                        <button type='button' className='btn btn-secondary' onClick={this.addMovieWillWatch}>
                            Will watch
                        </button>}
                </div>
                <button type='button' onClick={this.addLike}
                        className={this.state.like ? "btn-like" : null}
                >Like
                </button>
                <button type='button'
                        onClick={this.showHideOverview}> {this.state.showOverview ? 'Hide' : 'Show'}</button>
                <button type='button' onClick={this.deleteMovieOnClick}>Delete movie</button>
            </div>
        </div>
    }
}

Movie.propTypes = {movie: PropTypes.any}

export default Movie