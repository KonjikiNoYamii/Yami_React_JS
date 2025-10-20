import { useNavigate } from "react-router-dom";

export default function DashboardButton() {
    const navigate = useNavigate()

    const goToDashBoard = () => {
        navigate("/dashboard")
    }

    const goToHomeAndaReplace = () => {
        navigate("/", { replace:true })
    }

    const goBack = () => {
        navigate(-1)
    }

    return(
        <div>
            <button onClick={goToDashBoard}>pergi ke dashboard</button>

            <button onClick={goToHomeAndaReplace}>Pergi ke Home</button>

            <button onClick={goBack}>kembali</button>
        </div>
    )
}