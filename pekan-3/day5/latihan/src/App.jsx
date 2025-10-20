import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DashboardButton from "./components/DashboardButton";
import Dashboard from "./pages/Dasboard";
import CurrentLocationInfo from "./components/CurrentLocationInfo";

export default function App() {
  return (
    <div>
      {/* Tombol dashboard tampil di semua halaman */}
      <DashboardButton /> 
              <CurrentLocationInfo />


      {/* Semua definisi rute */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={ <Dashboard/> }/>
      </Routes>
    </div>
  );
}
