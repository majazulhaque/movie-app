import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import { movies } from "./MovieData";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }
  addHandler = (movie) => {
    const { movies } = this.state;
    const idx = movies.indexOf(movie);
    if (movies[idx].stars >= 5) {
      return;
    }
    movies[idx].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };
  decreaseHandler = (movie) => {
    const { movies } = this.state;
    const idx = movies.indexOf(movie);
    if (movies[idx].stars <= 0) {
      return;
    }
    movies[idx].stars -= 0.5;
    this.setState({
      movies: movies,
    });
  };
  addToCartHandler = (movie) => {
    let { movies,cartCount } = this.state;
    const idx = movies.indexOf(movie);
    if(movies[idx].isInCart){
      cartCount -= 1;
    }
    else{
      cartCount += 1;
    }
    movies[idx].isInCart = !movies[idx].isInCart;
    this.setState({
      movies: movies,
      cartCount:cartCount
    });
  };
  favouriteHandler = (movie) => {
    const { movies } = this.state;
    const idx = movies.indexOf(movie);
    movies[idx].fav = !movies[idx].fav;
    this.setState({
      movies: movies,
    });
  };
  render() {
    const {movies,cartCount} = this.state;
    return (
      <div className="App">
        <Navbar cartCount={cartCount} />
        <MovieList
          movies={movies}
          addHandler={this.addHandler}
          decreaseHandler={this.decreaseHandler}
          favouriteHandler={this.favouriteHandler}
          addToCartHandler={this.addToCartHandler}
        />
      </div>
    );
  }
}

export default App;
