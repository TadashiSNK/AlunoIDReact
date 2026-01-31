import './conteudo.css'
import Bloco from './Bloco'
import carteirinhaBig from './assets/carteirinhaBig.png'
import catracaBig from './assets/catracaBig.png'
import BlocoCalendario from './BlocoCalendario'
import BlocoAnotacoes from './BlocoAnotacoes'
import { useState } from 'react'
import aluno from '../Server/entities/aluno'
import Flex from 'react-calendar/dist/Flex.js'


function Conteudo(){

    const [alunos, setAlunos] = useState([])

    const fetchAlunos = async () => {
    const alunos = await fetch('http://localhost:3333/controle/alunos', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    const data = await alunos.json()
    console.log("alunos retornados")
    const toArray = [...data]
    setAlunos(toArray)
    console.log(toArray)

}

    return(
        <div className='conteudoContainer'>
            <div>
                <button onClick={fetchAlunos}>baixar alunos</button>
                {alunos.map((aluno)=> {
                    return(
                        <div style={{display:'flex', flexDirection:"row", backgroundColor:"#F0F0F0", margin:5}} key={aluno.id_usuario}>
                            <p style={{margin:10,}}>{aluno.aluno.id_aluno}</p>
                            <p style={{margin:10,}}>{aluno.nome}</p>
                            <p style={{margin:10,}}>{aluno.cep}</p>
                            <p style={{margin:10,}}>{aluno.cpf}</p>
                            <p style={{margin:10,}}>{aluno.modalidade_ensino}</p>
                            <p style={{margin:10,}}>{aluno.data_nasc}</p>
                            <p style={{margin:10,}}>{aluno.email}</p>
                            <p style={{margin:10,}}>{aluno.rg}</p>
                            <p style={{margin:10,}}>{aluno.sexo}</p>
                            <p style={{margin:10,}}>{aluno.turno}</p>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Conteudo