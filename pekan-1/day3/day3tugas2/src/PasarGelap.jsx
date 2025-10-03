function PasarGelap(props) {
    return(
        <div style={{display:"grid", gridTemplateColumns:"1fr", gridTemplateRows:"1/2", textAlign:"center", border:"2px white solid", padding:"30px", width:"400px", borderRadius:"30px", margin:"30px" , marginLeft:"750px"}}>
            <h2>{props.nameProduct}</h2>
            <p>Dengan harga: {props.price}</p>
            <p>stok saat ini: {props.stok}</p>
            {props.isAvaiable?(
                <p>Tersedia</p>
            ):(
                <p>Habis</p>
            )}
        </div>
    )
}
PasarGelap.default={
    nameProduct:"unknown",
    price:0,
    stok:0,
    isAvaiable:false
}
export default PasarGelap