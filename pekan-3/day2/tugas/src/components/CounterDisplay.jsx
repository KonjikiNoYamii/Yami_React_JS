import { useCounterWithToggle } from "../hook/useCounterWithToggle";

export default function CounterDisplay() {
    const {count, tambah, kurang,reset, value,toggle } = useCounterWithToggle()

    return(
        <div>
            <h4>hook count</h4>
            <p>hitungan saat ini {count}</p>
            <button onClick={tambah}>tambah</button>
            <button onClick={kurang}>kurang</button>
            <button onClick={reset}>reset</button>

            <h4>hook toggle</h4>
            <div style={{backgroundColor:value?"black":"white", width:"500px",height:"500px"}}></div>
            <button onClick={toggle}>ubah warna</button>
        </div>
    )
}