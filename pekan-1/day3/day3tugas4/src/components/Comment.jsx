import UserInfo from "./UserInfo"
import CommentText from "./CommentText"
function Comment(props) {
    return(
        <div style={{border:"white 2px solid", margin:"40px", borderRadius:"30px", width:"700px"}}>
            <UserInfo user={props.user}/>
            <CommentText text={props.text}/>
            <small style={{fontWeight:"bold",margin:"0px", marginLeft:"550px"}}>{props.date}</small>
        </div>
    )
}
export default Comment