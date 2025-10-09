export default function Status({isOnline}) {
    let teks =""

    if (isOnline) {
        teks = "sedang online"
    } else {
        teks = "sedang offline"
    }

    return(
        <div>
            <h1>{teks}</h1>
        </div>
    )
}