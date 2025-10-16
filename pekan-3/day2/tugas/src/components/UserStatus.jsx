import { useState } from "react";
import { useFriendStatus } from "../hook/useFriendStatus";

export default function UserStatus() {
    const [friendId, setFriendId] = useState(1)
     const isOnline = useFriendStatus(friendId)
    const switchStatus = () => {
        setFriendId((prev) => prev === 1? 2: 1)
    }
    return(
        <div>
            <p>status anda saat ini {isOnline? "online":"offline"}</p>

            <button onClick={switchStatus}>klik untuk mengubah status</button>
        </div>
    )
}