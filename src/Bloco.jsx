import { Link } from 'react-router-dom'

import './bloco.css'


function Bloco(props){
    return(
        <div className='bloco'> 
            <div className='imagem flex-center'>
                <img src={props.imagem} />
            </div>

            <div className='blocoInfo'>
                <div className='textContent'>
                    <p className='titulo bold '>{props.titulo} <span className='subtitulo bold'>{props.subtitulo}</span></p>
                </div>

            <Link className='bloco-a' to={props.urlClick}>{props.btnName}</Link>
            </div>




        </div>
    )
}

export default Bloco