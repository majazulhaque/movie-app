import React from "react";

class MovieCart extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avengers",
      plot: "Supernatural powers shown in this movie",
      price: 199,
      rating: 8.9,
      stars: 0,
      fav: true
    };
  }
  increaseStar=() => {
    if(this.state.stars >= 5){
        return;
    }
    // TYPE : 1
    // this.setState({       // if use setstate two many times but value is increase only once due to batching concept(batch them together,and it manupulate only based on last setstate()).
    //     stars: this.state.stars + 0.5
    // });

    // TYPE : 2
    this.setState((prevState) => {   // in this case: value changes as many times setstate call because it depend on prevState() but rerendering is only once.
        return {
            stars: prevState.stars + 0.5
        }
    },()=>{
        console.log("Stars:",this.state.stars);
    });
  }
  decreaseStar=() =>{
    if(this.state.stars <= 0){
        return;
    }
    this.setState((prevState) =>{   
        return {
            stars : prevState.stars - 0.5
        }
    },()=>{
        console.log("Stars:",this.state.stars);    // use callback because it is asynchronous.
    });
  }
  favourite = () =>{
    this.setState({
        fav: !this.state.fav
    });
  }
  render() {
    const { title, plot, price, rating,stars,fav } = this.state;
    return (
      <>
        <div className="main">
          <div className="movie-card">
            <div className="left">
              <img
                src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg"
                alt="Poster"
              />
            </div>
            <div className="right">
              <div className="title">{title}</div>
              <div className="plot">{plot}</div>
              <div className="price">Rs. {price}</div>

              <div className="footer">
                <div className="rating">{rating}</div>
                <div className="star-dis">
                  <img
                    className="str-btn"
                    src="https://cdn-icons-png.flaticon.com/128/43/43625.png"
                    alt="decrease"
                    onClick={this.decreaseStar}
                  />
                  <img
                    className="stars"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                    alt="star"
                  />
                  <img
                    className="str-btn"
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png"
                    alt="increase"
                    onClick={this.increaseStar}
                  />
                  <span>{stars}</span>
                </div>
                {/* {fav?<button onClick={this.favourite} className="unfavourite-btn">Unfavourite</button>:
                <button onClick={this.favourite} className="favourite-btn">Favourite</button>
                } */}
                <button className={fav?"unfavourite-btn":"favourite-btn"} onClick={this.favourite}>{fav?"Unfavorite":"Favourite"}</button>
                <button className="cart-btn">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MovieCart;
