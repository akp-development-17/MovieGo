import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode.react';
import './css/BookingSummary.css';

const BookingSummary = () => {
  const [bookingData, setBookingData] = useState('');

  useEffect(() => {
    const data = localStorage.getItem('bookingData');
    setBookingData(data);
  }, []);

  return (
    <div className="booking-summary-container">
      <h2 className="booking-summary-title">Booking Summary</h2>
      <div className="booking-summary-invoice">
        <div className="booking-summary-details">
          <p className="booking-summary-data">{bookingData}</p>
        </div>
        <div className="booking-summary-qr-code">
          <QRCode value={bookingData} size={120} />
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
