import React, { Component } from 'react';
import './ContentRating.css'

// modified with standard way to implement methods

class ContentRating extends Component {
    constructor(){
        super();
        this.state = { likes: 0, dislikes: 0, totalRatings: 0 };     // this.state is a property | { likes: 0, dislikes: 0 } object with a collection of key-value pair.
    }                                                                // totalRatings key-value pair added for extra-practice to show the sum of likes and dislikes
    // methods
    handleLikes = () => {           // returning an object implicitly, that is why we use this ({ likes: preState.likes + 1 }) inner parenthesis.
        this.setState((prevState) => ({ likes: prevState.likes + 1, totalRatings: prevState.totalRatings + 1 }));      // added for practice totalRatings: prevState.totalRatings + 1
    }                                                                                                                  
    handleDislikes = () => {
        this.setState((prevState) => ({ dislikes: prevState.dislikes + 1, totalRatings: prevState.totalRatings + 1 }));
    }

    render(){
        return(
            <>
            <div className="content-rating"> 
                <p>
                    My name is Rodrigo Casio and I'll become a great software engineer                   
                </p>
                <div className="rating-buttons">
                    <button className="like-button" onClick={this.handleLikes}>Like ({this.state.likes})</button>
                    <button className="dislike-button" onClick={this.handleDislikes}>Dislike ({this.state.dislikes})</button>
                    <p>Total Ratings ({this.state.totalRatings})</p>
                </div>
            </div>
            </>
        );
    }
}
export default ContentRating;

/*
        handleDislikes = () => {
        this.setState((prevState) => ({ dislikes: prevState.dislikes + 1, totalRatings: prevState.totalRatings + 1 }));
    }
        Explanation of using the parameter (prevState)

        prevState parameter is a snapshot of a component's state "just before" the setState operation takes place.
        It's a way for React to garantee that your update is based on the most accurate state value, preventing bugs that can arise from asynchronous updates
       a "snapshot of the component's state" is a copy of the this.state object at the exact moment before React is about to process your update. 

       in short terms:

        A snapshot of the state before an update.
        Use prevState to avoid stale data because setState is asynchronous.
        It guarantees that you're working with the most recent values for a consistent and correct count.

*/