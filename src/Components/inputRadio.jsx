import '../Pages/Cadastro.css'




export default function InputRadio(props){
    return(
        <div style={{marginRight: props.espacodireita}} className='inputRadio'>
            <p style={{width: "100%"}}>{props.titulo}</p>

            {/* OPCOES TRUE */}
            {props.option1 ? <label><input type='radio' checked={props.value === true || props.val == 'Feminino'} onChange={() => props.onChange(props.option1)} value={true} name={props.funcao} style={{width: props.tamanhoBarra}}></input><p>{props.option1 || "Sim"}</p></label>
            : <label><input type='radio' checked={props.value === true || props.val == 'Feminino'} onChange={() => props.onChange(true)} value={true} name={props.funcao} style={{width: props.tamanhoBarra}}></input><p>{props.option1 || "Sim"}</p></label>}
            



            {/* OPCOES FALSE */}
            {props.option1 ? <label><input type='radio' checked={props.value === false || props.val == 'Masculino'} onChange={() => props.onChange(props.option2)} value={false} name={props.funcao} style={{width: props.tamanhoBarra}}></input><p>{props.option2 || "Não"}</p></label>
            : <label><input type='radio' checked={props.value === false || props.val == 'Masculino'} onChange={() => props.onChange(false)} value={false} name={props.funcao} style={{width: props.tamanhoBarra}}></input><p>{props.option2 || "Não"}</p></label>}
        </div>
    )
}