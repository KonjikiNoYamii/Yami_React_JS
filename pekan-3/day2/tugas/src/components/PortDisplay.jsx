import { useFetch } from "../hook/useFetch";

export default function PortDisplay() {
    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/1")

    if(loading) return <p>sedang memuat...</p>
    if(error) return <p>gagal mengambil data!</p>

    return(
        <div>
            <p>{data.title}</p>
            <p>{data.body}</p>
        </div>
    )
}