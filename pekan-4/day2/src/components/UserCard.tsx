import React from "react";

interface UserCardProps{
    name:string;
    age:number;
    isOnline:boolean;
    hobbies?:string[];
    onSendMessage:(username: string) => void;
}

export const UserCard: React.FC<UserCardProps> = ({
    name,
    age,
    isOnline,
    hobbies,
    onSendMessage
}) =>{
    return(
        <div>
            <h3>nama: {name}</h3>
            <p>umur {age}</p>
            <p>{isOnline?"online":"offline"}</p>
            <p>{hobbies?.join(", ")}</p>
            <button onClick={() => onSendMessage(name)}>kirim pesan</button>
        </div>
    )
}