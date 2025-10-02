function Istri(props) {
return(
        <div>
        <ul>
            {props.item.map((item,index)=>{
               return <li key={index}>{item}</li>
            })}
        </ul>
    </div>
)
}
export default Istri