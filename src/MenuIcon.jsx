
import './sidemenu.css'
import { Link } from 'react-router-dom'

function MenuIcon(props){
    return (
        <Link className='noDecor' to={props.targetLink}>
            <div>
                <li><img className='menuIcon' src={props.image} /><p className='sideBarFont'>{props.name}</p></li>
            </div>
        </Link>
    )
}

export default MenuIcon