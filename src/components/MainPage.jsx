import React from 'react';
import Movie from "./Movie";
import {moviesData} from "../MovieState";
import {API_KEY_3, API_URL} from "../utils/utils";
import MovieTabs from "../MovieTabs";

class MainPage extends React.Component {
    state = {
        movies: [],
        movieWillWatch: [],
        sort_by: 'popularity.desc'
    };


    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by) {
            return this.getMovies()
        }
    }


    getMovies = () => {
        fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({movies: data.results})
        })
    }

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

    sortMovies = filter => {
        this.setState({sort_by: filter})
    }

    render() {
        console.log(this.state.sort_by)
        return (<div className='container'>
            <div className="row">
                <div className="col-9">
                    <div className="row mb-4">
                        <div className="col-12">
                            <MovieTabs sort_by={this.state.sort_by} sortMovies={this.sortMovies}/>
                        </div>
                    </div>
                    <div className='row'>

                        {this.state.movies.map(movie => <div className='col-6 mb-4'>
                            <Movie movie={movie}
                                   key={movie.id}
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