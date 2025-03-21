import React from 'react';
import './speakers.css';

const Speakers = () => {
  const speakers = [
    { id: 1, name: "CEO Ethio-Tech", image: "/images/speaker1.jpg" },
    { id: 2, name: "Co-founder Mereb-Tech", image: "/images/speaker2.jpg" },
    { id: 3, name: "CEO Ashewa-Tech", image: "/images/speaker3.jpg" },
    { id: 4, name: "CEO Walia-Tech", image: "/images/speaker4.jpg" },
  ];

  return (
    <section className="speakers">
      <div className="speakers-container">
        <h2>Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card">
              <img src={speaker.image} alt={speaker.name} className="speaker-image" />
              <p>{speaker.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;