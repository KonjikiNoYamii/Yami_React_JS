function Greeting(props) {
    return(
        <div style={{marginLeft:"700px"}}>
            <img src={props.foto} alt=""  style={{width:"500px", height:"300px", borderRadius:"50px"}}/>
            <p style={{textAlign:"center"}}>kenalkan ini istriku {props.name}</p>
        </div>
    )
}
export default Greeting