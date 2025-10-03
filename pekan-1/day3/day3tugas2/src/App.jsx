import PasarGelap from "./PasarGelap"
function App() {
  return(
    <div>
      <PasarGelap nameProduct="Jantung" stok={0} price={1600000000} isAvaiable={false}/>
      <PasarGelap nameProduct="Ginjal" stok={8} price={2600000000} isAvaiable={true}/>
      <PasarGelap/>
    </div>
  )
}
export default App