import React from 'react';
import Movie from "./Movie";
import {moviesData} from "../MovieState";

class MainPage extends React.Component {
    state = {
        movies: moviesData,
        movieWillWatch: []
    };

    deleteMovie = (movie) => {
        let updateMovie = this.state.movies.filter(m => m.id !== movie.id)
        this.setState({movies: updateMovie})
    }

    addMovieWillWatch = (movie) => {
        let willWatch = [...this.state.movieWillWatch, movie];
        this.setState({movieWillWatch: willWatch})
    }

    deleteMovieWillWatch = (movie) => {
        let updateMovie = this.state.movieWillWatch.filter(m => m.id !== movie.id)
        this.setState({movieWillWatch: updateMovie})
    }

    render() {
        return (<div className='container'>
            <div className="row">
                <div className="col-9">
                    <div className='row'>
                        {this.state.movies.map(movie => <div className='col-6 mb-4'>
                            <Movie movie={movie} key={movie.id}
                                   deleteMovie={this.deleteMovie}
                                   addMovieWillWatch={this.addMovieWillWatch}
                                   deleteMovieWillWatch={this.deleteMovieWillWatch}
                            />
                        </div>)}
                    </div>
                </div>
                <div className='col-3'>
                    <div className='row'>
                        {this.state.movieWillWatch.map(movie => {
                                return <div className='col-6 mb-4'><Movie movie={movie}/></div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>)

    }
}

export default MainPage