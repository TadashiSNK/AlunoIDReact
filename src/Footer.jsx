
import './footer.css'
import logo from './assets/impressao-digital.png'
import notificacao from './assets/notificacao.png'
import pfp from './assets/jorge.png'



function Footer(){
    return(
        <div className='footerContainer'>
            <div className="footerBlock">
                <p className="font">Ajuda:</p>
                <br />
                <br />
                <br />
                <br />
                <p className="font">Requisição de Doação</p>
                <br />
                <p className="font">Informações de Contato</p>
            </div>
            <div className="footerBlock">
                <p className="font">FAQ</p>
                <br />
                <p className="font">Politica de privacidade</p>
                <br />
                <br />
                <p className="font">(11) 8922 4002</p>
                <br />
                <p className="font">Contato@AlunoID.com.br</p>
            </div>

            
        </div>
    )
}


export default Footer