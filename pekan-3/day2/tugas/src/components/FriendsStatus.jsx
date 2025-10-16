import { useFriendStatus } from "../hook/useFriendStatus";

export default function FriendStatus({friendId}) {
    const isOnline = useFriendStatus(friendId) // hook custom diisi valuenya oleh props nya FriendStatus

    if(isOnline === null) return <p>sedang memuat...</p>
    return(
        <div>
            <p>Teman {friendId} sedang {isOnline? "online": "offline"}</p>
        </div>
    )
}