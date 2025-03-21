import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import './signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success alert
    Swal.fire({
      title: 'Registered Successfully!',
      text: 'Thank you for signing up.',
      icon: 'success',
      confirmButtonText: 'OK',
      customClass: {
        popup: 'custom-swal-popup', // Add custom class for styling
      },
    });

    // Clear the form
    setFormData({
      name: '',
      email: '',
      password: '',
    });
  };

  return (
    <section className="signup">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Signup;