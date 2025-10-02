import Istri from "./Istri.jsx"

function App() {
  const istri = ["Herta","Atri","Yami","Romontis"]

  return(
    <div>
      <h1>Istri-istri saya</h1>
      <Istri item ={istri}/>
    </div>
  )
}
export default App