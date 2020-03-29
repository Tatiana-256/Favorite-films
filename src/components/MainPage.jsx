import React from 'react';
import Movie from "./Movie";
import {API_KEY_3, API_URL} from "../utils/utils";
import MovieTabs from "../MovieTabs";
import MovieWillWatch from "../movieWillWatch";

class MainPage extends React.Component {
    state = {
        movies: [],
        movieWillWatch: [],
        sort_by: 'popularity.desc',
        pages: 1
    };


    componentDidMount() {
        this.getMovies()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.sort_by !== this.state.sort_by || prevState.pages !== this.state.pages) {
            return this.getMovies()
        }
    }


    getMovies = () => {
        fetch(`${API_URL}/discover/movie?page=${this.state.pages}&api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`).then((response) => {
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

    nextPage = () => {
        this.setState({pages: this.state.pages + 1})
    }

    previousPage = () => {
        if (this.state.pages > 1) {
            this.setState({pages: this.state.pages - 1})
        } else (alert('This is first page'))

    }

    render() {
        console.log(this.state.sort_by)
        return (<div className='container-fluid'>
            <h1 className='p-3 mb-2 bg-warning text-dark'>List of movies</h1>
            <div className="row m-3">
                <div className="col-9">
                    <div className="row mb-4">
                        <div className="col-12">
                            <h2>Filters</h2>
                            <MovieTabs sort_by={this.state.sort_by} sortMovies={this.sortMovies}/>
                        </div>
                    </div>
                    <div className='row m-5 ml-auto'>
                        <div className="list-group">
                            <h2>Pages</h2>
                            <div className='list-group list-group-horizontal '>

                                <button onClick={() => {
                                    this.previousPage()
                                }}>
                                    Previous page
                                </button>
                                <div>{this.state.pages - 1}</div>
                                <h3>{this.state.pages}</h3>
                                <div>{this.state.pages + 1}</div>
                                <button onClick={() => {
                                    this.nextPage()
                                }}>
                                    Next page
                                </button>

                            </div>

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
                                return <div className='col-6 mb-4'><MovieWillWatch movie={movie}/></div>
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>)

    }
}

export default MainPage