import Child from "./Child";

export default function Parents({data}) {
    return(
        <div>
            <h1>ini dari Parents</h1>
            <Child data={data}/>
        </div>
    )
}