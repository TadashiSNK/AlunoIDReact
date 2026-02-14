import "../conteudo.css"
import '../Pages/Cadastro.css'
import Bloco from "../Bloco"
import BlocoAnotacoes from "../BlocoAnotacoes"
import {  useState } from "react"
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
                <div className={tab == 'sala' ? 'option-selected' : 'option'} onClick={() => setTab('sala')} ><div className="optionTAB">Cadastro de Salas</div></div>
                <div className={tab == 'aluno' ? 'option-selected' : 'option'} onClick={() => setTab('aluno')} ><div className="optionTAB">Cadastro de Alunos</div></div>
                <div className={tab == 'func' ? 'option-selected' : 'option'} onClick={() => setTab('func')} ><div className="optionTAB">Cadastro de Funcionários</div></div>
                <div className={tab == 'resp' ? 'option-selected' : 'option'} onClick={() => setTab('resp')} ><div className="optionTAB">aa</div></div>
            </div>
                
            {tab == "sala" && <CadastroSALA/>}
            {tab == "aluno" && <CadastroAluno/>}
            {tab == "func" && <CadastroFuncionario/>}
            {tab == "resp" && <CadastroResponsavel/>}


        </div>
    )
}