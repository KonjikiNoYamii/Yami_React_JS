import { lazy, Suspense, useState } from "react";
const Home = lazy(() => import("./Home"))
const Contact = lazy(() => import("./Contact"))

export default function LazySimulation() {
    const [page, setPage] = useState("home")

    
    return(
        <div>
            <button onClick={() => setPage("home")}>Home</button>
            <button onClick={() => setPage("contact")}>Contact</button>
            
            <Suspense fallback={ <p>sedang memuat halaman...</p> }>
                {page === "home" && <Home /> }
                {page === "contact" && <Contact /> }

            </Suspense>
        </div>
    )
}