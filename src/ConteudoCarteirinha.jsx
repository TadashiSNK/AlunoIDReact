import './conteudoCarteirinha.css'
import './conteudo.css'
import Bloco from './Bloco'
import carteirinhaBig from './assets/carteirinhaBig.png'
import catracaBig from './assets/catracaBig.png'
import kevin from './assets/kevin.jpg'


function ConteudoCarteirinha(){
    return (
        <div className='conteudoContainer'>
            <div className='blocoCarta flex-center'>
                <img className='cartaFoto' src={kevin}></img>

                <div className='cartaInfo'>
                    <ul>
                        <li><p className='infoTexts'>Chupeta da Silva</p></li>
                        <li><p className='infoTexts'>ETEC Embu - Centro paula dentro</p></li>
                        <li><p className='infoTexts'>CPF: 123.456.789.01</p></li>
                        <li><p className='infoTexts'>RG: 123123123</p></li>
                        <li><p className='infoTexts'>Data de Nascimento: 01/01/0001</p></li>
                        <li><p className='infoTexts'>Matricula: 42144</p></li>
                    </ul>
                </div>
            </div>

            <div className='blocoCarta flex-center'>


            </div>
        </div>
    )
}

export default ConteudoCarteirinha