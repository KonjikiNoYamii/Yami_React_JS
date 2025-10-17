import LazySimulation from "./components/LazySimulation";
import ParentButton from "./components/ParentButton";
import ParentTheme from "./components/ParentTheme";
import PhainonLooping from "./components/PhainonLooping";

export default function App() {
  return(
    <div>
      <h1>soal 1</h1>
      <ParentTheme />
      <h1>soal 2</h1>
      <PhainonLooping />
      <h1>soal 3</h1>
      <ParentButton />
      <h1>soal 4</h1>
      <LazySimulation />
      <h1>soal 5</h1>
      <img src="/devTools.png" alt="" style={{height:"300px", width:"600px"}}/>
    </div>
  )
}