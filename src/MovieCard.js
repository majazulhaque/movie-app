import React from "react";

class MovieCart extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "The Avengers",
            plot:"Supernatural powers shown in this movie",
            price: 199,
            rating: 8.9,
        }
    }
    render (){
        const {title,plot,price,rating} = this.state;
        return (
            <>
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg" alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" alt="minus" />
                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="star" />
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" alt="plus" />
                                <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default MovieCart;