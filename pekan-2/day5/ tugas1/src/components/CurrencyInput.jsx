export default function CurrencyInput({label, value, onChange}) {
    return(
        <fieldset>
            <legend>{label}</legend>
            <input type="number" value={value} onChange={(e) => onChange(e.target.value)}/>
        </fieldset>
    )
}