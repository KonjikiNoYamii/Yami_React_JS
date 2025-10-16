import { useEffect } from "react";
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
    const [values, setValues] = useState(() => {
        const savedValue = localStorage.getItem(key)
        return savedValue !== null ? JSON.parse(savedValue): initialValue

    })
    useEffect(() =>{
        localStorage.setItem(key, JSON.stringify(values))
    },[key,values])

    return [ values, setValues ]
}