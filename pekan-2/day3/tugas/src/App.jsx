import SimpleEffect from "./components/SimpleEffect"
import ChangeName from "./components/ChangeName"
import ChangeWindow from "./components/ChangeWindow"
import DoubleEffect from "./components/DoubleEffect"
import FetchSimulation from "./components/FetchSimulation"
export default function App() {
  return(
    <div>
      <SimpleEffect />
      <ChangeName />
      <ChangeWindow />
      <DoubleEffect />
      <FetchSimulation />
    </div>
  )
}