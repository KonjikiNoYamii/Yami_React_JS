import Parents from "./components/Parents"

export default function App() {
  const data ={
    name:"Yami",
    message:"ini istri saya"
  }
  return(
    <div>
      <h1>ini dari App</h1>
      <Parents data={data} />
    </div>
  )
}