import '../Pages/cadastro.css'





export default function InputNomeado(props){
    return(
        <div className='inputComNome'>
            <p>{props.titulo}</p>
            <input onChange={(e) => props.onChange(e.target.value)} style={{marginRight: props.espacodireita, width: props.tamanhoBarra}}></input>
        </div>
    )
}





