import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import ConfirmedBookingPage from './pages/ConfirmedBookingPage';

const Routing = () => {
    return (
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/booking-page' element={<BookingPage/>} />
          <Route path='/online-order' element={<OrderPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/booking-confirmed' element={<ConfirmedBookingPage/>} />
       </Routes>
    );
}

export default Routing;