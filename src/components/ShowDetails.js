import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getShowSummary } from '../apiService';
import { useHistory } from 'react-router-dom';
import './css/ShowDetails.css';

const ShowDetails = () => {
  const history = useHistory();
  const { showId } = useParams();
  const [summary, setSummary] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    movie: '',
    showTime: '',
  });

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const data = await getShowSummary(showId);
        setSummary(data);
        setFormData((prevFormData) => ({
          ...prevFormData,
          movie: data.name,
        }));
      } catch (error) {
        console.error(`Error fetching summary for show ${showId}:`, error);
      }
    };

    fetchSummary();
  }, [showId]);

  const handleFormChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();


    const screenNumber = Math.floor(Math.random() * 10) + 1;


    const ticketPrice = Math.floor(Math.random() * 100) + 50;


    const totalPrice = ticketPrice * 1; // Assuming 1 ticket

 
    const bookingSummary = `Movie: ${formData.movie}
Time: ${formData.showTime}
Screen Number: ${screenNumber}
Ticket Price: $${ticketPrice}
Total Price: $${totalPrice}`;

    // Store booking data in local storage
    localStorage.setItem('bookingData', bookingSummary);

    // Navigate to BookingSummary page
    history.push('/booking-summary');
  };

  return (
    <div className="show-details-container">
      <h2 className="show-details-title">Show Details</h2>
      {summary}
      <Link to="/" className="back-link">Back to Show List</Link>
      <form onSubmit={handleFormSubmit}>
        <h3>Book Movie Ticket</h3>
        <label htmlFor="movie" className="form-label">Movie:</label>
        <input
          type="text"
          id="movie"
          name="movie"
          value={formData.movie}
          onChange={handleFormChange}
          className="form-input"
          required
        />
        <label htmlFor="showTime" className="form-label">Show Time:</label>
        <select
          id="showTime"
          name="showTime"
          value={formData.showTime}
          onChange={handleFormChange}
          className="form-select"
          required
        >
          <option value="">Select Show Time</option>
          <option value="9:30">9:30 AM</option>
          <option value="12:30">12:30 PM</option>
          <option value="15:30">3:30 PM</option>
          <option value="18:30">6:30 PM</option>
        </select>
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleFormChange}
          className="form-input"
          required
        />
        <label htmlFor="email" className="form-label">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
          className="form-input"
          required
        />
        <label htmlFor="contact" className="form-label">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleFormChange}
          className="form-input"
          required
        />
        <button type="submit" className="form-button">Book Ticket</button>
      </form>
    </div>
  );
};

export default ShowDetails;

