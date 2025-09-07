import './FeedbackForm.css';

const FeedbackForm = () => {
    
    return(
        <>
            <nav>Tell Us What You Think</nav>
            <form className="feedback-form">
                <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                />
                <textarea
                    name="feedback"
                    placeholder="Your Feedback"
                ></textarea>
                <button type="submit">Submit Feedback</button>

                <h2>We'd Love To Hear From You!</h2>
                <p>Please share your feedback with us.</p>
            </form>
        </>
    );
}
export default FeedbackForm;



