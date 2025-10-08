import { useRef } from "react";

export default function App() {
  const nameRef = useRef(null)

  const handleSubmit = (e) =>{
    e.preventDefault()

    const nama = nameRef.current?.value??"" //mengambil nameRef dari input lalu disimpan pada variabel nama untuk ditampilkan

    alert(`nama anda ${nama}`) // variabel nama yg berisi nameRef ditampilkan

  }
  return(
    <div>
      <form action="" onSubmit={handleSubmit}>
        masukan nama:
        <input type="text" ref={nameRef} /> {/** nameRef sebagai ref dari input */}
        <button type="submit">submit</button>
      </form>
    </div>
  )
}