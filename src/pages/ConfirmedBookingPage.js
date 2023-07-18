import logo from "../images/confirm.png"

const ConfirmedBookingPage  = (props) => {
    return (
        <div className="booking">
            <img src={logo} alt="Logo" style={{display: 'flex', width: '10vw'}}/>
            <h1>Thanks for your Booking.</h1>
            <p>We are delighted to inform you that you successfully booked a table.</p>
        </div>
    );
}

export default ConfirmedBookingPage;