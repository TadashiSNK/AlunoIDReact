import './barraNotinhasBloco.css'
import notinhaIcone from './assets/notinhasIcone.png'

function BarraNotinhasBloco(props){
    return(
        <div className='estilo' style={{backgroundColor: props.cor, width: props.tamanho}}> <img className='notinhaIcone' src={notinhaIcone}></img> <p className='texto bold'>{props.textContent}</p></div>
    )
}

export default BarraNotinhasBloco