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

            </section>
            <section className="testimonials">

            </section>
            <section className="contact">

            </section>
        </div>

    );
}
export default EventPlanner;