import React from "react";
import MovieCart from "./MovieCard";
import { movies } from "./MovieData";

class MovieList extends React.Component {
  render() {
    console.log(this.props)
    const { movies,addHandler,decreaseHandler,addToCartHandler,favouriteHandler } = this.props;
    return (
      <>
        {movies.map((movie, index) => (
          <MovieCart
            movies={movie}
            key={index}
            increaseStar={addHandler}
            decreaseStar={decreaseHandler}
            addToCart={addToCartHandler}
            favourite={favouriteHandler}
          />
        ))}
      </>
    );
  }
}

export default MovieList;
