
import './sidemenu.css'

function MenuIcon(props){
    return (
        <div>
            <li><img className='menuIcon' src={props.image} /><a className='noDecor' href={props.targetLink} target="_blank"><p className='sideBarFont'>{props.name}</p></a></li>
        </div>
    )
}

export default MenuIcon