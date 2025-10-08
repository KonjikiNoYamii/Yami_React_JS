import { useState } from "react";

export default function TodoList() {
    const [todos, setTodos] = useState([]) // nilai awal todos
    const [newTodosText, setNewTodosText] =useState("") // variabel input 

    const addTodos = (e) =>{
        e.preventDefault()
        if(newTodosText.trim() === "") return

        const newTodo ={ // setiap event submit akan menambahkan variabel baru
            id:Date.now(), //krusial
            text: newTodosText // memprint text.. text diambil dari value input
        }
        setTodos((prevTodos) => [...prevTodos, newTodo]) // menambahkan nilai awal todos dengan variabel newTodo
        setNewTodosText("") // setelah submit input akan dikosongkan
    }
    const deleteTodo = (id) =>{
        setTodos((prevTodos) => prevTodos.filter((todo) =>todo.id !== id))
    }
    return(
        <div>
            <h2>TodoList</h2>
            <form onSubmit={addTodos}>
                <input type="text" value={newTodosText} onChange={(e) => setNewTodosText(e.target.value)} /> {/** menggunakan setNewTodosText karena akan mengambil value newTodosText */}
                <button type="submit">Tambah</button>
            </form>
            <ul>
                {todos.length === 0?(
                    <li>belum ada tugas</li>
                ):(
                    todos.map((todo) =>(
                        <li key={todo.id}>{todo.text}{""}
                        <button onClick={() => deleteTodo(todo.id)}>Hapus</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    )
}