import Avatar from "./Avatar"
function UserInfo(props) {
    return(
        <div>
            <Avatar user={props.user} />
            <p style={{padding:"0px", margin:"0px",marginLeft:"6px"}}>{props.user.name}</p>
        </div>
    )
}
export default UserInfo