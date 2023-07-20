import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import BookingPage from './pages/BookingPage';
import OrderPage from './pages/OrderPage';
import LoginPage from './pages/LoginPage';
import ConfirmedPage from './pages/ConfirmedPage';

const Routing = (props) => {
    return (
        <Routes>
          <Route exact path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/booking-page' element={<BookingPage/>} />
          <Route path='/online-order' element={<OrderPage/>} />
          <Route path='/login' element={<LoginPage value={props.value} setValue={props.setValue}/>} />
          <Route path='/booking-confirmed' element={<ConfirmedPage title={"Thanks for your Booking."} description={"We are delighted to inform you that you successfully booked a table."}/>}/>
          <Route path='/online-order-confirmed' element={<ConfirmedPage title={"Thanks for your Online Order."} description={"We are delighted to inform you that you successfully placed your order."}/>} />
       </Routes>
    );
}

export default Routing;