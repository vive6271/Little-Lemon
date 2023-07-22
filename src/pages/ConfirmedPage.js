import logo from "../images/confirm.png"

const ConfirmedPage  = (props) => {
    return (
        <div className="booking">
            <img src={logo} alt="Logo"/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
}

export default ConfirmedPage;