import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import BookingPage from './components/BookingPage';
import Online from './components/Online';
import Login from './components/Login';
import ConfirmedBooking from './components/ConfirmedBooking';

const Routing = () => {
    return (
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/booking-page' element={<BookingPage/>} />
          <Route path='/online-order' element={<Online/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/booking-confirmed' element={<ConfirmedBooking/>} />
       </Routes>
    );
}

export default Routing;