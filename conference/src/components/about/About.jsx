import React from 'react';
import './about.css'

const About = () => {
  const events = [
    {
      id: 1,
      image: "/images/event1.jpg",
      description:
        "The digital startup event that brings together the key players in the ecosystem – this year the theme is AI XL, so expect the disruptors of the moment exploring the outer limits of AI.",
    },
    {
      id: 2,
      image: "/images/event2.jpg",
      description:
        "A unique showcase of what Industry 4.0 can achieve now and what it will look like in the future – with sessions that deep dive into specific industries including manufacturing, fintech, and smart mobility.",
    },
    {
      id: 3,
      image: "/images/event3.jpg",
      description:
        "Unlock the full potential of diversity, equity, and inclusiveness for your business, as research shows DE&I is essential for innovation, talent retention, and market relevance.",
    },
  ];

  return (
    <section className="about">
      <div className="about-container">
        <h2>About The Event</h2>
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <img src={event.image} alt={`Event ${event.id}`} className="event-image" />
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;