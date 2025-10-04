import ProfileBox from "./components/ProfileBox";
function App() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", justifyContent:"center",marginLeft:"300px"}}>
      <ProfileBox
        foto="/yamiyami.png"
        name="Konjiki No Yami"
        desk="Alien biologic weapons"
      />
      <ProfileBox
        foto="/atri.jpeg"
        name="Atri"
        desk="Robot"
      />
    </div>
  );
}
export default App;
