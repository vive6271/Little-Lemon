import React, { useState, useEffect, useReducer } from 'react';
import GridImage from '../components/GridImage';
import res1 from '../images/res1.jpg';
import res2 from '../images/res2.jpg';
import BookingForm from '../components/BookingForm';
import bookingAPI from '../api/bookingAPI';
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const [data, setData] = useState({
    name:'',
    email:'',
    date: '',
    time: '',
    guest: '',
    loc: '',
    occasion: '',
    requirement: '',
  });


  const navigate = useNavigate();

  const initializeTimes = {
    availableTimes: [],
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'SET_AVAILABLE_TIMES':
        return { ...state, availableTimes: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  useEffect(() => {
    const times = bookingAPI.fetchAPI(data.date);
    dispatch({ type: 'SET_AVAILABLE_TIMES', payload: times });
  }, [data.date]);

  const submitForm = (formData) => {
    bookingAPI.submitAPI(formData);
    const confirm = bookingAPI.submitAPI(formData);
    if (confirm) {
      navigate('/booking-confirmed');
    }
  };

  const { availableTimes } = state;

  return (
    <div className="reservation">
      <div className="res-info">
        <div className="txt">
          <h1>Feel The Authentic & Original Taste From Us</h1>
          <p>
            We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern
            twist. Just book your table today and enjoy delicious food.
          </p>
        </div>
        <GridImage fImg={res1} sImg={res2} style={{ display: 'flex', width: '30vw', height: '20vw' }} />
      </div>
      <BookingForm data={data} availableTimes={availableTimes} submitForm={submitForm} setData={setData} />
    </div>
  );
};

export default BookingPage;