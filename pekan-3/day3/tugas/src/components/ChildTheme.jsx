import { memo } from "react";

export const ChildTheme = memo(function ChildTheme({theme}) {
    console.log("child telah di render");
    
    return(
        <div style={{backgroundColor:theme === "light"?"white":"black", color:theme === "light"?"black":"white", width:"500px", height:"500px"}}>
            <p>mode {theme}</p>
        </div>
    )
})