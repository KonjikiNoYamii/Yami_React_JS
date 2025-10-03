import Comment from "./components/Comment"
function App() {
  const user={
    name:"Herta",avatarUrl:"/gab.jpeg"
  }
  return(
    <div style={{marginLeft:"600px"}}>
      <h1>Riwayat Komen</h1>
      <Comment user={user} text="Indonesia mna mungkin bubar" date="25 november 2025" />
      <Comment user={user} text="Beneran bubar wak" date="17 agustus 2030"/>
    </div>
  )
}

export default App