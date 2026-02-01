import './conteudo.css'
import Bloco from './Bloco'
import carteirinhaBig from './assets/carteirinhaBig.png'
import catracaBig from './assets/catracaBig.png'
import BlocoCalendario from './BlocoCalendario'
import BlocoAnotacoes from './BlocoAnotacoes'
import { useState, useEffect } from 'react'
import aluno from '../Server/entities/aluno'
import Flex from 'react-calendar/dist/Flex.js'


function Conteudo(){

    const [alunos, setAlunos] = useState([])
    const [senha, setSenha] = useState('')

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

    return(
        <div className='conteudoContainer'>
            <div>
                <button onClick={fetchAlunos}>Atualizar</button>
                {alunos?.map((aluno)=> {
                    return(
                        <div style={{display:'flex', flexDirection:"row", backgroundColor:"#F0F0F0", margin:5}} key={aluno.id_usuario}>
                            <button style={{width:50}} onClick={() => deleteUser(aluno.id_usuario)}>Del</button>
                            <button style={{width:50}} onClick={() => updateSenha(aluno.id_usuario)}>Att Senha</button>
                            <input placeholder='nova senha' onChange={(e) => setSenha(e.target.value)}></input>
                            <p style={{margin:10,}}>{aluno.nome}</p>
                            <p style={{margin:10,}}>{aluno.senha}</p>
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