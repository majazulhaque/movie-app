import React from "react";
import MovieCart from "./MovieCard";

class MovieList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
          title: "The Avengers",
          plot: "Supernatural powers shown in this movie",
          price: 199,
          rating: 8.9,
          stars: 0,
          fav: true,
          isInCart: true,
        },
        {
          title: "Matrix",
          plot: "Caracter is entering into machine code and run in infinite loop",
          price: 299,
          rating: 8.0,
          stars: 0,
          fav: false,
          isInCart: false,
        },
        {
          title: "Final Destination",
          plot: "Virus is spreading in city and some people is still fighting with virus",
          price: 599,
          rating: 7.5,
          stars: 0,
          fav: false,
          isInCart: true,
        },
      ],
    };
  }
  addHandler = (movie) => {
    const { movies } = this.state;
    const idx = movies.indexOf(movie);
    if(movies[idx].stars >= 5){
        return;
    }
    movies[idx].stars += 0.5;

    this.setState({
      movies: movies,
    });
  };
  decreaseHandler = (movie) => {
    const {movies} = this.state;
    const idx = movies.indexOf(movie);
    if(movies[idx].stars <= 0){
        return;
    }
    movies[idx].stars -= 0.5;
    this.setState({
        movies:movies
    });
  };
  addToCartHandler = (movie) =>{
    const {movies} = this.state;
    const idx = movies.indexOf(movie);
    movies[idx].isInCart = !movies[idx].isInCart
    this.setState({
        movies:movies
    });
  }
  favouriteHandler = (movie) =>{
    const {movies} = this.state;
    const idx = movies.indexOf(movie);
    movies[idx].fav = ! movies[idx].fav;
    this.setState({
        movies:movies
    })
  }
  render() {
    const { movies } = this.state;
    console.log(this.state);
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCart
            movies={movie}
            key={index}
            increaseStar={this.addHandler}
            decreaseStar={this.decreaseHandler}
            addToCart={this.addToCartHandler}
            favourite={this.favouriteHandler}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
