import './conteudo.css'
import Bloco from './Bloco'
import carteirinhaBig from './assets/carteirinhaBig.png'
import catracaBig from './assets/catracaBig.png'
import BlocoCalendario from './BlocoCalendario'
import BlocoAnotacoes from './BlocoAnotacoes'
import { useState, useEffect } from 'react'
import aluno from '../Server/entities/aluno'
import Flex from 'react-calendar/dist/Flex.js'
import masculino from '../src/assets/masculino.png'
import feminino from '../src/assets/feminino.png'
import { Column } from 'typeorm'
import InputRadio from './Components/inputRadio'


function Conteudo(){

    const [alunos, setAlunos] = useState([])
    const [senha, setSenha] = useState('')
    const [pesquisa, setPesquisa] = useState('213')

    const deleteUser = async (userID) => {
        const deletar = await fetch('http://localhost:3333/cadastro/aluno', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID
            })
        })
        console.log(`Usuario ${userID} deletado`)
        fetchAlunos()
    }




    const updateSenha = async (userID) => {
        const attsenha = await fetch('http://localhost:3333/cadastro/aluno', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID,
                novaSenha: senha
            })
        })
        fetchAlunos()
    }


    useEffect(() => {
        fetchAlunos()
    }, [])


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

    const queryDeBusca = async () => {
            const alunos = await fetch(`http://localhost:3333/controle/busca/${pesquisa}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const data = await alunos.json()
            console.log(data)
            setAlunos(data)
        }

    return(
        <div className='conteudoContainer' style={{backgroundColor:"lightblue", borderRadius:10, alignItems:"start"}}>

            <div>BARRA DE PESQUISA <input type='text' onChange={(e) => setPesquisa(e.target.value)}></input> <button onClick={queryDeBusca}>teste</button> </div>

            <div className='containerDaLista' style={{backgroundColor:"#F5F5F5"}}>
                {alunos?.map((aluno)=> {
                    return(
                        <div className='linhaIndividual' onClick={() => alert(`${aluno.turno}`)} key={aluno.id_usuario}>
                                <div className='genderIcon'>
                                    {aluno.sexo == "H" && <img src={masculino}></img>}
                                    {aluno.sexo == "M" && <img src={feminino}></img>}
                                </div>

                                <p style={{margin:10,}}>{aluno.nome}</p>
                                <p style={{margin:10,}}>{aluno.senha}</p>
                                <p style={{margin:10,}}>{aluno.cpf}</p>
                                <p style={{margin:10,}}>{aluno.modalidade_ensino}</p>
                                <p style={{margin:10,}}>{aluno.data_nasc}</p>
                                <p style={{margin:10,}}>{aluno.email}</p>
                                <p style={{margin:10,}}>{aluno.rg}</p>
                                <p style={{margin:10,}}>{aluno.sexo}</p>
                                <p style={{margin:10,}}>{aluno.turno}</p>
                                <button style={{width:50}} onClick={() => deleteUser(aluno.id_usuario)}>Del</button>
                                <button style={{width:50}} onClick={() => updateSenha(aluno.id_usuario)}>Att Senha</button>
                                <input placeholder='nova senha' onChange={(e) => setSenha(e.target.value)}></input>

                        </div>

                    )
                })}
                
            </div>

        </div>
    )
}

export default Conteudo