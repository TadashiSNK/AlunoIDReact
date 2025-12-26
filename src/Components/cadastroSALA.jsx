import '../index.css'
import '../Pages/Cadastro.css'
import InputNomeado from "./inputNomeado"
import icon from '../assets/informacoes da sala.png'
import { useState } from 'react'
import InputRadio from './inputRadio'


export default function cadastroSALA(){



    const [nome, setNome] = useState(null)
    const [tipo, setTipo] = useState(null)
    const [andar, setAndar] = useState(null)
    const [capacidade, setCapacidade] = useState(null) 
    const [equipamentos, setEquipamentos] = useState(null)
    const [temAr, setTemAr] = useState(false);
    const [temComputador, setTemComputador] = useState(false);
    const [temAcessibilidade, setTemAcessibilidade] = useState(false);


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
                equip: equipamentos,
                tem_ar: temAr,
                tem_pc: temComputador,
                tem_acess: temAcessibilidade
            })
        })
    }




    return(
        <div className='cadastroContainer flex-center'>
            <div className='blocoDeInfo' style={{height: '400px'}}>
                <div className='tituloBloco'><p>Informações da sala</p> <img className='titulo-icon' src={icon} />  </div>

                <InputNomeado titulo="Nome/Numero da sala:" espacodireita='50px' tamanhoBarra="300px" onChange={setNome} />
                <InputNomeado titulo="Tipo de sala:" espacodireita="50px" tamanhoBarra="200px" onChange={setTipo}/>
                <InputNomeado titulo="Andar:" espacodireita="300px" tamanhoBarra="120px" onChange={setAndar}/>

                <InputNomeado titulo="Capacidade" espacodireita='50px' onChange={setCapacidade}/>
                <InputNomeado titulo="Equipamentos disponiveis" espacodireita='150px' onChange={setEquipamentos}/>

                <InputRadio value={temAr} onChange={setTemAr} titulo="Tem Ar-Condicionado?:" funcao="tem_ar" espacodireita="150px"/>
                <InputRadio value={temComputador} onChange={setTemComputador} titulo="Tem Computadores?:" funcao="tem_comp" espacodireita="60px" />
                <InputRadio value={temAcessibilidade} onChange={setTemAcessibilidade} titulo="Tem Acessibilidade?:" funcao="tem_acessi" />
            </div>
            

            <button className='BotaoAdicionar' onClick={fetchCadastroSala}>ADICIONAR</button>

            {/* {temAr? "ss" : "nn"} {temAcessibilidade? "ss" : "nn"} {temComputador? "ss" : "nn"} STATES DEBUG */}




            
        </div>
    )
}