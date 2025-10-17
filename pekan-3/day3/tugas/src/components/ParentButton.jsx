import { useCallback, useState } from "react";
import { ChildButton } from "./ChildButton";

export default function ParentButton() {
    const [count, setCount] = useState(0)
    
    const handleAdd = useCallback(() => {
        setCount((prev) => prev + 1)
    })
    return(
        <div>
            <h2>{count}</h2>
            <ChildButton onClick={handleAdd} label={"tambah angka"}/>
        </div>
    )
}