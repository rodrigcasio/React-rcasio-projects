import React from 'react';
import './EventPlanner.css';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>Plan and organize your events effortlessly with Event Planner. From birthdays to corporate meetings, we've got you covered.</p>
                <button className="get-started-button">Get Started</button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Social Events:</h2>
                    <li>Birthday parties</li>
                    <li>Anniversary celebrations</li>
                    <li>Wedding receptions</li>
                    <li>Baby Showers</li>
                    <li>Graduations parties</li>
                    <li>Family Reunions</li>
                </ul>
                <ul>
                    <h2>Entretainment Events:</h2>
                    <li>Concerts</li>
                    <li>Music Festivals</li>
                    <li>Film Screenings</li>
                    <li>Comedy Shows</li>
                    <li>Art Exhibitions</li>
                    <li>Cultural Events</li>
                </ul>
                <ul>
                    <h2>Community Events:</h2>
                    <li>Fundraising Events</li>
                    <li>Charity Galas</li>
                    <li>Volunteer Drives</li>
                    <li>Neighborhood block parties</li>
                    <li>Community Festivals</li>
                    <li>Cultural Cultural Celebrations</li>
                </ul>
            </section>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Easy event creation and management</li>
                    <li>Customizable event templates</li>
                    <li>Guest list management</li>
                    <li>Real-time collaboration</li>
                    <li>Reminders and notifications</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                    <p>"Event Planner made orginizing my wedding a breeze. Highly recommended!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Pork</p>
                </div>
                <div className="testimonial">
                    <p>"Event Planner helped me set up a huge birthday party for my moms's 60's birthday."</p>
                    <p className="author">- Rodrigo Casio</p>
                </div>
            </section>
            <section className="contact">

            </section>
        </div>

    );
}
export default EventPlanner;