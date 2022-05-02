import React, {Component} from 'react';
import axios from 'axios';


class MovieList extends Component {
    constructor(props){
        super(props);
        this.state = { movies: [] };

    }


    componentDidMount() {
        const BEST_SELLER_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed`;

        const getMovies = async () => {
            await axios.get(BEST_SELLER_URL).then(response =>{
                this.setState({movies: response.data.results});
            }).catch((err) =>{
                console.log("Fetch Error: " + err)
            });
        }
        getMovies();
    }

    render() {
        return (
            <div className="row row-cols-sm-2 row-cols-md-5 row-cols-xxl-6">
                {
                    this.state.movies.map((movie) => {
                        let movieURL = "https://image.tmdb.org/t/p/w500" + movie["poster_path"];



                        return (
                            <div className="col mb-3">

                                    <div className="card h-100 position-relative">
                                        <div class="container">
                                            <img className="card-img-top book-mg mx-auto pt-1" src={movieURL} alt=""/>
                                            <div className="overlay overlayTop">
                                                <div className="text">
                                                    <h5 className="card-title book-title">{movie.title}</h5>
                                                    <p>This movie was originally released on {movie["release_date"]} in {movie["original_language"]}.</p>
                                                    <p>With {movie["vote_count"]} votes in total, this movie received a {movie["vote_average"]} out of 10 rating.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body book-card-details">
                                            <h5 className="card-title book-title">{movie.title}</h5>
                                            <h5 className="card-title on-list"></h5>
                                            <h6 className="card-subtitle mb-2 text-muted book-author">
                                                <div id="toggle">Hover over the picture for more information.</div>
                                            </h6>
                                            <p className="card-text">{movie.overview}</p>
                                        </div>
                                    </div>



                            </div>

                        );
                    })
                }
            </div>

        );
    }
}

export default MovieList;