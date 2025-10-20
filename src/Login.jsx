import './Login.css'
import logoDigital from './assets/impressao-digital.png'


function Login(){
    return(
        <div className='loginContainer flex-center'>

            <div className='mainBox flex-center'>

                <div className='logoDiv flex-center'>

                    <div className='logoText'>
                        <h2 className='texto1'>Aluno<span style={{color:'black'}}>ID</span></h2>
                    </div>

                    <img src={logoDigital}></img>
                </div>
                <div className='CPF-Senha'>
                    
                <form action="http://localhost:8080/login" method="post" class="flex-center">
                    <input type="text" name="name" placeholder="E-mail/CPF" id="username"></input>
                    <input type="text" name="senha" placeholder="Senha" id="senha"></input>
                    <button type="submit">ENTRAR</button>
                    <a href="google.com" id="esqueci-senha">Esqueci minha senha</a>
                </form>

                </div>

            </div>

        </div>
    )
}



export default Login