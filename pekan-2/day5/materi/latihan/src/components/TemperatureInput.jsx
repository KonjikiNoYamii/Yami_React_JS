export default function TemperatureInput({temperature, onTemperatureChange, scale}) {
    const scalesName = {
        c: "Celcius",
        f: "Fahrenheit"
    }

    return(
        <fieldset>
        <legend>masukan suhu ke dalam {scalesName[scale]}</legend>
        <input type="number" value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
        </fieldset>
    )
}