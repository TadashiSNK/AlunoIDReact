import './blocoCalendario.css'
import './bloco.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Anotacoes from './Pages/Anotacoes'
import DiaItem from './DiaItem'

const data = new Date("2025-2-13")
const dia = data.getDate() // dia começa no 1
const mes = data.getMonth() // começa no 0
const ano = data.getFullYear() // ano é equivalente ao ano atual
const weekDay = data.getDay()
const diasMesMain = diasNoMes(ano, (mes+1))
const diasMesAnterior = diasNoMes(ano, mes)
const diasProxMes = diasNoMes(ano, mes+2)
const primeiroDiaMes = new Date(ano, mes, 1).getDay()

let nomeDoMes = data.toLocaleString('default', { month: 'long' });
nomeDoMes = nomeDoMes.charAt(0).toUpperCase() + nomeDoMes.slice(1);





function diasNoMes(ano, mes){ /// me diz quantos dias tem em certo mês
    return new Date(ano, mes, 0).getDate()
}

//debug string
console.log(`data:${data.toLocaleDateString()} ${dia}/${mes}/${ano}-${weekDay}
        / dias em ${nomeDoMes}: ${diasMesMain} 
        dias mes anterior:${diasMesAnterior} 
        dias prox mes ${diasProxMes}
        primeiro dia da semana do mes de ${nomeDoMes}: ${primeiroDiaMes}
        `)


let arrayDeDias = Array.from({length: diasMesMain}, (item, i) => i + 1)

console.log(`${arrayDeDias}`)

function fillCalender(){

}




function BlocoCalendario(){
    return(
        <div className='bloco flex-bloco' style={{backgroundColor: "rgba(0, 116, 217, 0.8)"}}>
            {/* <div>data:{data.toLocaleDateString()} {dia}/{mes}/{ano}-{weekDay} dias em {nomeDoMes}: {diasMesMain} dias anterior:{diasMesAnterior}{}</div> */}
            <div className='tituloCalendario'>
                <p className='nomeMes bold'>{nomeDoMes}</p>
                <p className='numeroAno bold'>2025</p>
            </div>

            <div className='diasDaSemana'>
                <p className='diaString bold'>Dom.</p>
                <p className='diaString bold'>Seg.</p>
                <p className='diaString bold'>Ter.</p>
                <p className='diaString bold'>Qua.</p>
                <p className='diaString bold'>Qui.</p>
                <p className='diaString bold'>Sex.</p>
                <p className='diaString bold'>Sab.</p>
            </div>

            <div className='calendarioDisplay'>
                {Array.from({length:primeiroDiaMes}).map((item, index)=>{
                    return(
                        <DiaItem key={index} diaNum={(diasMesAnterior - primeiroDiaMes)+(index+1)} color="rgba(255, 255, 255, 0.6)"></DiaItem> 
                    )
                })}


                {arrayDeDias.map((dia) => {
                    return(
                    <DiaItem key={dia} diaNum={dia} color="white"></DiaItem> 
                )
                })}
                


            </div>
        </div>
    )
}


export default BlocoCalendario