import './conteudoAnotacoes.css'
import './bloco.css'
import livroBig from './assets/livroBig.png'
import AnotationBlock from './AnotationBlock'





function conteudoAnotacoes() {
    return (
        <div className='conteudoContainer'>
            <div className='anotacoesConteudoContainer'>
                <div className='topRow'>
                    <h1 className='subtitulo'>Anotações: </h1>
                    <img src={livroBig}></img>
                </div>

                <div className='listaDeNotas'>
                    <AnotationBlock cor="#EA4335" titulo="teste" subtitulo="teste2"></AnotationBlock>
                    <AnotationBlock cor="#8245F4" titulo="teste" subtitulo="teste2"></AnotationBlock>
                    <AnotationBlock cor="#FBBC05" titulo="teste" subtitulo="teste2"></AnotationBlock>
                    <AnotationBlock cor="#8245F4" titulo="teste" subtitulo="teste2"></AnotationBlock>
                    <AnotationBlock cor="#FBBC05" titulo="teste" subtitulo="teste2"></AnotationBlock>
                    <AnotationBlock cor="#34A853" titulo="teste" subtitulo="teste2"></AnotationBlock>
                </div>

                <div className='addNotas'>
                    <p className='bold'>Adicionar notas</p> <p className='notasPlus flex-center'>+</p>
                </div>

            </div>
        </div>
    )
}

export default conteudoAnotacoes
