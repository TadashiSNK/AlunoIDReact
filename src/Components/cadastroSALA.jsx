import '../index.css'
import '../Pages/Cadastro.css'
import InputNomeado from "./inputNomeado"
import icon from '../assets/informacoes da sala.png'


export default function cadastroSALA(){
    return(
        <div className='cadastroContainer flex-center'>
            <div className='blocoDeInfo' style={{height: '250px'}}>
                <div className='tituloBloco'><p>Informações da sala</p> <img className='titulo-icon' src={icon} />  </div>

                <InputNomeado titulo="Nome/Numero da sala:" espacodireita='50px' tamanhoBarra="300px" />
                <InputNomeado titulo="Tipo de sala:" espacodireita="50px" tamanhoBarra="200px" />
                <InputNomeado titulo="Andar:" espacodireita="300px" tamanhoBarra="120px" />

                <InputNomeado titulo="Capacidade" espacodireita='50px' />
                <InputNomeado titulo="Equipamentos disponiveis" espacodireita='50px' />
            </div>
            

            <button className='BotaoAdicionar'>ADICIONAR</button>
            
        </div>
    )
}