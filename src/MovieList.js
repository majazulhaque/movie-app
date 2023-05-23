import React from "react";
import MovieCart from "./MovieCard";

function MovieList(props) {
    const { movies,addHandler,decreaseHandler,addToCartHandler,favouriteHandler } = props;
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

export default MovieList;
