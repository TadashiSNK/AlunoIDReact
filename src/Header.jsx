
import './header.css'
import logo from './assets/impressao-digital.png'
import notificacao from './assets/notificacao.png'
import pfp from './assets/jorge.png'
import kevin from './assets/kevin.jpg'
import { useNavigate } from 'react-router-dom'


function Header(){

    const navigate = useNavigate();

    const goToHome = () => {navigate('/')}

    return(
        <div className="headerContainer">
            <div onClick={goToHome} className='logoContainer'>
                <img src={logo} className='logoHome' />
                <h2><span className="blueFontLogo">Aluno</span>ID</h2>
            </div>

            <p>teste</p>

            <div className='userMenu'>
                <img src={notificacao} className='notificacao' />

                <div class="userinfo">
                    <p class="bold">Seja Bem vindo!</p>
                    <p class="bold">Chupeta</p>
                </div>

                <img src={kevin} className='profilePicture'/>

            </div>
        </div>
    )
}

export default Header