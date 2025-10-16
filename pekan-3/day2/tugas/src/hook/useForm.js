import { useState } from "react";

export function useForm(initialValue = {}) {
    const [values , setValues] = useState(initialValue)

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setValues((prev) => ({...prev, [name]:value}))
    }
    const resetChange = () => setValues(initialValue)

    return {values, handleChange, resetChange}
}