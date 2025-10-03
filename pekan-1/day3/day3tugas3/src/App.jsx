import Card from "./Card";

function App() {
  return (
    <div style={{fontSize:"30px", marginLeft:"400px" }}>
      <Card>
        <h2>Istri Pertama</h2>
        <img src="/yamiyami.png" alt="" style={{width:"400px", height:"400px"}} />
        <p>Nasib punya istri Alien</p>
      </Card>
      <Card>
        <h2>IStri Kedua</h2>
        <img src="/Atri.jpg" alt="" style={{width:"400px", height:"400px"}}/>
        <p>Nasib punya istri Robot</p>
      </Card>
    </div>
  );
}
export default App