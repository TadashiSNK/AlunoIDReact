import './anotationBlock.css'
import notasIcon from './assets/notinhasIcone.png'

function AnotationBlock(props){
    return(
        <div className='itemListaNota' style={{backgroundColor: props.cor}}> 
            <img className='notinhaIcon' src={notasIcon}></img>
            
            <div className='textos'>
                <p className='tituloNota bold'> {props.titulo} </p>
                <p className='subtituloNota bold' > {props.subtitulo} </p>
            </div>
        </div>
    )
}

export default AnotationBlock