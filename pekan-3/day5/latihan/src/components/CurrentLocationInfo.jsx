import { useLocation } from "react-router-dom"

export default function CurrentLocationInfo() {
    const location = useLocation()
    return(
        <div>
            <h2>info halaman saat ini{location.pathname}</h2>
        </div>
    )
    
}