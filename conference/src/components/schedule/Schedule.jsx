import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import './schedule.css';

const Schedule = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate('/signup'); // Redirect to the signup page
  };

  return (
    <section className="schedule">
      <div className="schedule-container">
        <h2>Schedule</h2>
        <div className="schedule-details">
          <div className="schedule-item">
            <FaCalendarAlt className="schedule-icon" />
            <p><strong>Date:</strong> 29 FEB 2025</p>
          </div>
          <div className="schedule-item">
            <FaClock className="schedule-icon" />
            <p><strong>Time:</strong> 8:00 AM - 5:00 PM</p>
          </div>
          <div className="schedule-item">
            <FaMapMarkerAlt className="schedule-icon" />
            <p><strong>Venue:</strong> Millennium Hall, Addis Ababa</p>
          </div>
        </div>
        <h3>Book Your Seat Today</h3>
        <button className="register-button" onClick={handleRegisterClick}>
          Register Now
        </button>
      </div>
    </section>
  );
};

export default Schedule;