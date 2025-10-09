export default function RenderList({list}) {
    return(
        <div>
            <h2>daftar tugas</h2>

            <ul>
                {list.map(item =>(
               <li key={item.id}>{item.nama}</li> 
            ))}
            </ul>
        </div>
    )
}