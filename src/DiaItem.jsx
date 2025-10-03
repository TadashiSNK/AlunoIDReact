
import "./diaItem.css"



function DiaItem(props){
    return(
        <div className="diaDiv bold" ><p style={{color: props.color}}>{props.diaNum}</p></div>
    )
}


export default DiaItem