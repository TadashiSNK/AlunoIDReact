import '../Pages/Cadastro.css'
import iconDados from '../assets/dadosPessoais.png'
import iconEndereco from '../assets/enderecoecontato.png' 
import iconInfo from '../assets/dadosEscolares.png' 
import InputNomeado from './inputNomeado'
import InputRadio from './inputRadio'
import { useState } from 'react'

export default function cadastroAluno(){




    const [nome, setNome] = useState(null)
    const [nasc, setNasc] = useState(null)
    const [cpf, setCpf] = useState(null)
    const [rg, setRg] = useState(null)
    const [sexo, setSexo] = useState("Masculino")


    const [cep, setCep] = useState(null)
    const [rua, setRua] = useState(null)
    const [numero, setNumero] = useState(null)
    const [bairro, setBairro] = useState(null)
    const [cidade, setCidade] = useState(null)
    const [complemento, setComplemento] = useState(null)

    const [serie, setSerie] = useState(null)
    const [turma, setTurma] = useState(null)
    const [modalidade, setModalidade] = useState(null)
    const [turno, setTurno] = useState(null)
    const [necesidades, setNecessidade] = useState(false)
    const [necessidades_desc, setNecessidade_desc] = useState(null)


    const fetchCadastroAluno = async () => {
        await fetch('http://localhost:3333/cadastro/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                nasc,
                cpf,
                rg,
                sexo,
                cep,
                rua,
                numero,
                bairro,
                cidade,
                complemento,
                serie,
                turma,
                modalidade,
                turno,
                necesidades,
                necessidades_desc
            })
        })
    }



    return(
        <div className='cadastroContainer flex-center'>

                    {/* DADOS PESSOAIS */}
                    <div className='blocoDeInfo' style={{height: '300px'}}>
                        <div className='tituloBloco'><p>Dados Pessoais</p> <img className='titulo-icon' src={iconDados} />  </div>
        
                        <InputNomeado onChange={setNome} titulo="Nome Completo:" espacodireita='50px' tamanhoBarra="580px" />
                        <InputNomeado onChange={setNasc} tipo="date" titulo="Data de Nasc.:" espacodireita='150px' tamanhoBarra="300px" />
                        <InputNomeado onChange={setCpf} titulo="C.P.F.:" espacodireita='50px' tamanhoBarra="300px" />
                        <InputNomeado onChange={setRg} titulo="R.G." espacodireita='50px' tamanhoBarra="300px" />


                        <InputRadio onChange={setSexo} val={sexo} option1="Feminino" option2="Masculino" titulo="Sexo:" funcao="sexo" espacodireita="1px" tamanhoBarra="" />

                        
                    </div>





                    {/* ENDEREÇO E CONTATO */}
                    <div className='blocoDeInfo' style={{height: '350px'}}>
                        <div className='tituloBloco'><p>Endereço e contato</p> <img className='titulo-icon' src={iconEndereco} />  </div>
        
                        <InputNomeado onChange={setCep} titulo="CEP:" espacodireita="50px" />
                        <InputNomeado onChange={setRua} titulo="Rua:" espacodireita="50px" tamanhoBarra="500px"/>
                        <InputNomeado onChange={setNumero} titulo="Numero:" espacodireita="50px" tamanhoBarra="110px"/>
                        <InputNomeado onChange={setBairro} titulo="Bairro:" espacodireita="50px" tamanhoBarra="300px"/>
                        <InputNomeado onChange={setCidade} titulo="Cidade:" espacodireita="50px" tamanhoBarra="300px"/>
                        <InputNomeado onChange={setComplemento} titulo="Complemento:" espacodireita="50px" tamanhoBarra="200px"/>
                    </div>

                    





                    {/* DADOS ESCOLARES */}
                    <div className='blocoDeInfo' style={{height: '300px'}}>
                        <div className='tituloBloco'><p>Dados Escolares</p> <img className='titulo-icon' src={iconInfo} />  </div>
        
                        <InputNomeado onChange={setSerie}  titulo="Serie:" />
                        <InputNomeado onChange={setTurma}  titulo="Turma:" tamanhoBarra="250px"/>
                        <InputNomeado onChange={setModalidade}  titulo="Modalidade de ensino:" tamanhoBarra="300px" />
                        <InputNomeado onChange={setTurno}  titulo="Turno:" />

                        <InputRadio value={necesidades} onChange={setNecessidade}  titulo="Necessidades especiais?:" />

                        <InputNomeado onChange={setNecessidade_desc} titulo="Se sim, Quais:" tamanhoBarra="450px" espacodireita="0px"/>
                    </div>



                    
        
                    <button className='BotaoAdicionar' onClick={fetchCadastroAluno} >ADICIONAR</button>
        </div>
    )
}