import FocusInput from "./components/FocusInput";
import LocalPortal from "./components/ParentPortal";
import ParentsHOC from "./components/ParentsHOC";
import ParentsMouse from "./components/ParentsMouse";
export default function App() {
  return(
    <div>
      <h3>soal 1</h3>
      <FocusInput />
      <h3>soal 2</h3>
      <LocalPortal />
      <h3>soal 3</h3>
      <ParentsHOC />
      <h3>soal 4</h3>
      <ParentsMouse />
    </div>
  )
}