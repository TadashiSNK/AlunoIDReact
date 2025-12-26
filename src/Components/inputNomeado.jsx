import '../Pages/cadastro.css'





export default function InputNomeado(props){
    return(
        <div className='inputComNome'>
            <p>{props.titulo}</p>
            <input type={props.tipo} placeholder='. . .' onChange={(e) => props.onChange(e.target.value)} style={{marginRight: props.espacodireita || "50px", width: props.tamanhoBarra}}></input>
        </div>
    )
}





