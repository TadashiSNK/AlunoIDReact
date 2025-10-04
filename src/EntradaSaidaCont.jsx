import HorarioBlock from './HorarioBlock'
import './Pages/entradaSaida.css'



function EntradaSaidaCont(props){
    return(
        <div className='horariosContainer'>
            <div className='titulos'>
                    <h2>Registro</h2> SEMANAS

            </div>
            <div className='listaDeHorarios'>
                
                {Array.from({length:7}).map((item, index)=>{
                    return(
                        <HorarioBlock text={index}/>
                    )
                })}
            </div>

        </div>
    )
}


export default EntradaSaidaCont