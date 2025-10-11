import PrintFetchAPI from "./components/PrintFetchAPI"
import PrintAxiosAPI from "./components/PrintAxiosAPI"
import LoadAPI from "./components/LoadAPI"
import AbortControl from "./components/AbortControl"
import DataFilter from "./components/DataFilter"
export default  function App() {
  return(
    <div>
      <h1>soal 1</h1>
      <PrintFetchAPI />
      <h1>soal 2</h1>
      <PrintAxiosAPI />
      <h1>soal 3</h1>
      <LoadAPI />
      <h1>soal 4</h1>
      <AbortControl />
      <h1>soal 5</h1>
      <DataFilter />
    </div>
  )
}