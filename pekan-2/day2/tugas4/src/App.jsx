import { useState } from "react";
import RenderList from "./components/RenderList";
export default function App() {
  const adaKegiatan =[
    {id:1 , nama:"tidur"},
    {id:2, nama:"ngoding"}
  ] 
  return(
    <div>
      <RenderList list={adaKegiatan}/>
    </div>
  )
}