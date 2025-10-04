function ProfileBox({foto , name, desk}) {
    const boxStyle ={
        marginTop:"100px",
        display:"grid",
        border:"2px solid red",
        width:"500px",
        height:"500px",
        textAlign:"center",
        borderRadius:"50px",
        backgroundColor:"black",
        color:"white",
        fontFamily:"Arial"
        
    }

    const nameStyle={
        textAlign:"center",
    }
    const imageStyle={
        marginTop:"20px",
        width:"300px",
        height:"300px",
        marginLeft:"100px",
        borderRadius:"50%",
        border:"red 2px solid"
        

    }

    return(
        <div style={boxStyle}>
            <img src={foto} alt="" style={imageStyle}/>
            <h2 style={nameStyle}>{name}</h2>
            <p>{desk}</p>
        </div>
    )

}
export default ProfileBox