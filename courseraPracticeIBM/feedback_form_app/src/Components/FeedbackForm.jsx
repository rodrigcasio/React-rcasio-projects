import './FeedbackForm.css';
import {useState} from 'react';
const FeedbackForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', feedback: '', rating: ''});         // added variable key-value pair named rating

    // function to handle changes
    const handleChange = (event) => {
        const { name, value } = event.target;    // extracting name and value properties from the event object's target property
        setFormData({...formData, [name] : value});         // spreads the existing formData object and then updates the property specified by the 'name' variable with the new value
    };

    // function to hnadle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // constructing a confirmation message using the current data from the formData object (includes: name, email, feedback fields the user enters)
        const confirmationMessage = `   
            Name: ${formData.name}
            Email: ${formData.email}
            Rating: ${formData.rating}
            Feedback: ${formData.feedback}
            `;
        const isConfirmed = window.confirm(`Please confirm your details:\n${confirmationMessage}`); // displaying a confirmation dialogue presenting the current formData, if user confirms..user submits
        if(isConfirmed){
            console.log('Submitting feedback:', formData);
            setFormData({       // reseting the formData state to empty values, clearing form fields after submission
                name: '',
                email: '',
                feedback: ''
                
            });
            alert(`Thank you for your valuable feedback!`);
        }
    }
    

    return(
        <>
            <nav>Tell Us What You Think</nav>
            <form onSubmit={handleSubmit} className="feedback-form">
                <h2>We'd Love To Hear From You!</h2>
                <p>Please share your feedback with us.</p>
                <input 
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
                    <span>Rate Us: </span>
                    <p><input 
                        type="radio"
                        name="rating"
                        value="1"
                        onChange={formData.rating}
                    /> 1</p>
                    <p><input 
                        type="radio"
                        name="rating"
                        value="2"
                        onChange={formData.rating}
                    /> 2</p>
                    <p><input 
                        type="radio"
                        name="rating"
                        value="3"
                        onChange={formData.rating}
                    /> 3</p>
                    <p><input 
                        type="radio"
                        name="rating"
                        value="4"
                        onChange={formData.rating}
                    /> 4</p>
                    <p><input 
                        type="radio"
                        name="rating"
                        value="5"
                        onChange={formData.rating}
                    /> 5</p>
                </div>
                <textarea
                    name="feedback"
                    placeholder="Your Feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" >Submit Feedback</button>
            </form>
        </>
    );
}
export default FeedbackForm;



