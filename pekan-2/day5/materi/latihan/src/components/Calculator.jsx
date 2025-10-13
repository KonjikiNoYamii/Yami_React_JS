import { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import { toCelsius, toFahrenheit, tryConvert } from "../utils/convertFunction";

export default function Calculator() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleScaleChange = (temp) =>{
    setTemperature(temp)
    setScale("c")
  }

  const handleFahrenheitChange= (temp)  =>{
    setTemperature(temp)
    setScale("f")
  }
  const celcius = scale === "f" ? tryConvert(temperature, toCelsius ) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
  return (
    <div>
      <TemperatureInput scale="c" temperature={celcius} onTemperatureChange={handleScaleChange}/>
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange}/>
    </div>
  );
}
