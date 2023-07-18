
const GridImage = (props) => {
    return (
        <div className = "gridImg">
            <img src={props.fImg} style={props.style}/>
            <img src={props.sImg} style={props.style}/>
        </div>
    );
}

export default GridImage;