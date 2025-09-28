


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

            <button className='bloco-button'>{props.btnName}</button>
            </div>




        </div>
    )
}

export default Bloco