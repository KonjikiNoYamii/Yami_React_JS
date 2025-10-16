import { useState } from "react";

export function useCounter() {
    const [count, setCount] = useState(0)

    const tambah = () =>{
        setCount(prev => prev + 1)
    }

    const kurang = () =>{
        setCount(prev => prev > 0 ? prev -1:0)
    }
    const reset = () =>{
        setCount(0)
    }

    return { count, tambah, kurang, reset }
}