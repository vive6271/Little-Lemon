
const GridImage = (props) => {
    return (
        <div className = "gridImg" id={props.iName}>
            <img src={props.fImg} style={props.style}/>
            <img src={props.sImg} style={props.style}/>
        </div>
    );
}

export default GridImage;