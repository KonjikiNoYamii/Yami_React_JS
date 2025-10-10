import SimpleEffect from "./components/SimpleEffect"
import ChangeName from "./components/ChangeName"
import ChangeWindow from "./components/ChangeWindow"
import DoubleEffect from "./components/DoubleEffect"
import FetchSimulation from "./components/FetchSimulation"
export default function App() {
  return(
    <div style={{justifySelf:"center"}}>
      <h1>soal 1</h1>
      <SimpleEffect />
      <hr />
      <h1>soal 2</h1>
      <ChangeName />
      <hr />
      <h1>soal 3</h1>
      <ChangeWindow />
      <hr />
      <h1>soal 4</h1>
      <DoubleEffect />
      <hr />
      <h1>soal 5</h1>
      <FetchSimulation />
    </div>
  )
}