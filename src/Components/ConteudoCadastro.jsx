import "../conteudo.css"
import '../Pages/Cadastro.css'
import Bloco from "../Bloco"
import BlocoAnotacoes from "../BlocoAnotacoes"
import { useState } from "react"
import CadastroSALA from "./cadastroSALA"
import CadastroFuncionario from "./CadastroFuncionario"
import CadastroResponsavel from "./CadastroResponsavel"
import CadastroAluno from "./CadastroAluno"
import InputNomeado from "./inputNomeado"


export default function ConteudoCadastro(){

    const [tab, setTab] = useState('sala')




    return(
        <div className="conteudoContainer align-start">
            <div className='cadastroHeader flex-center'>
                <div className='option' onClick={() => setTab('sala')} >Cadastro de Salas</div>
                <div className='option' onClick={() => setTab('aluno')} >Cadastro de Alunos</div>
                <div className='option' onClick={() => setTab('func')} >Cadastro de Funcionários</div>
                <div className='option' onClick={() => setTab('resp')} >Cadastro de Responsáveis</div>
                <div className='option' onClick={() => setTab('resp')} > {tab} -</div>
            </div>
                
            {tab == "sala" && <CadastroSALA/>}
            {tab == "aluno" && <CadastroAluno/>}
            {tab == "func" && <CadastroFuncionario/>}
            {tab == "resp" && <CadastroResponsavel/>}


        </div>
    )
}