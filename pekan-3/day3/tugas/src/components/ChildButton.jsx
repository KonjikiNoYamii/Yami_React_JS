import { memo } from "react";

export const ChildButton = memo(function ChildButton({onClick, label}) {
    console.log(`childbutton ${label} telah berubah`);

    return(
        <div>
            <button onClick={onClick}>{label}</button>
        </div>
    )
    
})