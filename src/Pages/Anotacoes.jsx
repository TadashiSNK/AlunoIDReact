import './anotacoes.css'
import '../index.css'
import Header from '../Header'
import Footer from '../Footer'
import SideMenu from '../SideMenu'
import ConteudoCarteirinha from '../ConteudoCarteirinha'
import ConteudoAnotacoes from '../ConteudoAnotacoes'


function Anotacoes() {
    return (
        <div className='anotacoesContainer'>
            <Header subtitle="Anotações"/>
            <SideMenu />
            <ConteudoAnotacoes />
            <Footer />
        </div>
    )
}

export default Anotacoes
