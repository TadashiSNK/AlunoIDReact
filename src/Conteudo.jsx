import './conteudo.css'
import Bloco from './Bloco'
import carteirinhaBig from './assets/carteirinhaBig.png'
import catracaBig from './assets/catracaBig.png'


function Conteudo(){
    return(
        <div className='conteudoContainer'>
            <Bloco btnName="Acessar Agora" imagem={carteirinhaBig} titulo="Acesse sua" subtitulo="Carteira de Estudante"></Bloco>
            <Bloco btnName="Acessar Agora" imagem={catracaBig} titulo="Registro" subtitulo="Entrada e Saida"></Bloco>
            <Bloco btnName="Acessar Agora" imagem={catracaBig} titulo="Registro" subtitulo="Entrada e Saida"></Bloco>
            <Bloco btnName="Acessar Agora" imagem={catracaBig} titulo="Registro" subtitulo="Entrada e Saida"></Bloco>

        </div>
    )
}

export default Conteudo