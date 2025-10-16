import { useEffect } from "react";
import { useState } from "react";

export function useFriendStatus(friendId) {
    const [isOnline, setIsOnline] = useState(null)

    useEffect(()=>{
        const status = friendId % 2 === 0
        setIsOnline(status)
    },[friendId])

    return isOnline;
}