function Avatar(props) {
    return(
        <img 
        src={props.user.avatarUrl} 
        alt={props.user.name} 
        style={{width:"50px", height:"50px",borderRadius:"50%", border:"white solid 2px"}}/>
    )
}
export default Avatar