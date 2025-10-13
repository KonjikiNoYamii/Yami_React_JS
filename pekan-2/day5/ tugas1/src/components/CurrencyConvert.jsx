import { useState } from "react";
import { toDollar, toRupiah, tryConvert } from "../utils/convertFunction";
import CurrencyInput from "./CurrencyInput";

export default function CurrencyConvert() {
    const [value, setValue] = useState(0)
    const [label, setLabel] = useState("")

    const handleRupiahChange = (val) =>{
        setValue(val)
        setLabel("rupiah")
    }
    const handleDollarChange = (val) =>{
        setValue(val)
        setLabel("dollar")
    }

    const rupiah = label === "dollar" ? tryConvert(value, toRupiah): value;
    const dollar = label === "rupiah" ? tryConvert(value, toDollar): value;
    
    return(
        <div>
            <CurrencyInput label={"rupiah"} value={rupiah} onChange={handleRupiahChange} />
            <CurrencyInput  label={"dollar"} value={dollar} onChange={handleDollarChange}/>
        </div>
    )
}