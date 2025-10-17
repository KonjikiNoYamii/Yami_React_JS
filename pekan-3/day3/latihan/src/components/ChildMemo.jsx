import { memo } from "react";

export const ChildMemo = memo(function ChildMemo({theme}) {
    console.log("tema telah di re render");

    return(
        <div style={{backgroundColor:theme === "light" ?"white":"black",color:theme === "light" ?"black":"white"}}>
            <p>tema saat ini{theme}</p>
        </div>
    )
    
})