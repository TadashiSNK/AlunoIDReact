



export default function DivisaoDeLinha(props){
    return(
        <div style={{backgroundColor:"transparent", 
        height:"auto", 
        display:"flex", 
        alignItems:"center", 
        marginRight:5, 
        marginLeft:5, 
        fontSize:17, 
        fontWeight:"bold", 
        padding:5, 
        paddingLeft:2}}>
            <>{props.desc}{props.texto}</>
        </div>
    )
}
