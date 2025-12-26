import '../index.css'
import '../Pages/Cadastro.css'
import InputNomeado from "./inputNomeado"
import icon from '../assets/informacoes da sala.png'
import { useState } from 'react'


export default function cadastroSALA(){



    const [nome, setNome] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [andar, setAndar] = useState(null)
    const [capacidade, setCapacidade] = useState(null) 
    const [equipamentos, setEquipamentos] = useState(null)


    const fetchCadastroSala = async () => {
        await fetch('http://localhost:3333/Cadastro/sala', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                tipo: tipo,
                andar: andar,
                capacidade: capacidade,
                equip: equipamentos
            })
        })
    }




    return(
        <div className='cadastroContainer flex-center'>
            <div className='blocoDeInfo' style={{height: '250px'}}>
                <div className='tituloBloco'><p>Informações da sala</p> <img className='titulo-icon' src={icon} />  </div>

                <InputNomeado titulo="Nome/Numero da sala:" espacodireita='50px' tamanhoBarra="300px" onChange={setNome} />
                <InputNomeado titulo="Tipo de sala:" espacodireita="50px" tamanhoBarra="200px" onChange={setTipo}/>
                <InputNomeado titulo="Andar:" espacodireita="300px" tamanhoBarra="120px" onChange={setAndar}/>

                <InputNomeado titulo="Capacidade" espacodireita='50px' onChange={setCapacidade}/>
                <InputNomeado titulo="Equipamentos disponiveis" espacodireita='50px' onChange={setEquipamentos}/>
            </div>
            

            <button className='BotaoAdicionar' onClick={fetchCadastroSala}>ADICIONAR</button>

            <p>{nome} {andar} {tipo} {capacidade} {equipamentos}</p>



            
        </div>
    )
}