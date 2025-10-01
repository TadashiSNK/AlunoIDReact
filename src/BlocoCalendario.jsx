import './blocoCalendario.css'
import './bloco.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Anotacoes from './Pages/Anotacoes'

function BlocoCalendario(){
    const days = []
    const date = new Date(2025, 0, 1)
    while (date.getFullYear())

    return(

        <div className='bloco'>
            <Calendar 
            minDate={new Date("2025-12-01")}
            />
        </div>
    )
}


export default BlocoCalendario