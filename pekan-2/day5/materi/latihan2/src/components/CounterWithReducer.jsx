import { useReducer } from "react"

export function CounterReducer(state,action) {
    switch (action.type) {
        case "tambah":
            return {count: state.count + 1}
        case "kurang":
            return {count: state.count - 1}
        case "reset" :
            return {count: 0}    
    }
}

export default function CounterWithReducer() {
    const [counterState, dispatch] =useReducer(CounterReducer,{count: 0})

    return(
        <div>
            <h2>hitungan saat ini: {counterState.count}</h2>
            <button onClick={() => dispatch({ type: "tambah"})}>tambahkan</button>
            <button onClick={() => dispatch({ type: "kurang"})}>kurangi</button>
            <button onClick={() => dispatch({ type: "reset"})}>reset</button>
        </div>
    )
}
