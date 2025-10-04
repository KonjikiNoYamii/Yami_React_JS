import GalleryWaifu from "./Components/GalleryWaifu";
import "./App.css"
function App() {
  return (
    <div className="container">
      <GalleryWaifu foto="./Angelica.jpeg" nama="Angelica" />
      <GalleryWaifu foto="./Chitoge.jpeg" nama="Chitoge Kirisaki" />
      <GalleryWaifu foto="./koshitan.jpeg" nama="Torako Koshi"/>
      <GalleryWaifu foto="./Victorique.jpeg" nama="Victorique De Blois"/>
      <GalleryWaifu foto="./Yami.jpeg" nama="Konjiki No Yami"/>
      <GalleryWaifu foto="./Yue.jpeg" nama="Yue"/>
    </div>
  );
}
export default App