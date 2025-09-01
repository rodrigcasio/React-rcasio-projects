import React, { Component } from 'react';
import './ContentRating.css'

// modified with standard way to implement methods

class ContentRating extends Component {
    constructor(){
        super();
        this.state = { likes: 0, dislikes: 0};     // this.state is a property | { likes: 0, dislikes: 0 } object with a collection of key-value pair.
    }
    // methods
    handleLikes = () => {           // returning an object implicitly, that is why we use this ({ likes: preState.likes + 1 }) inner parenthesis.
        this.setState((prevState) => ({ likes: prevState.likes + 1 }));
    }
    handleDislikes = () => {
        this.setState((prevState) => ({ dislikes: prevState.dislikes + 1}));
    }

    render(){
        return(
            <>
            <div className="content-rating"> 
                <p>
                    
                </p>
                <div className="rating-buttons">
                    <button className="like-button" onClick={this.handleLikes}>Like ({this.state.likes})</button>
                    <button className="dislike-button" onClick={this.handleDislikes}>Dislike ({this.state.dislikes})</button>
                </div>
            </div>
            </>
        );
    }
}
export default ContentRating;