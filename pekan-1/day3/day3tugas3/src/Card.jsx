function Card(props) {
    const boxStyle={
        border:"2px white solid",
        borderRadius:"20px",
        marginLeft:"400px",
        textAlign:"center",
        justifyContent:"center"
    }
    return(
        <div style={boxStyle}>
            {props.children}
        </div>
    )
}
export default Card