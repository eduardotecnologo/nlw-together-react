type ButtonProps = {
    text?: String;// ? deixa a propriedade opcional
}

export function Button(props: ButtonProps){
    return(
        <button>{props.text}</button>
    )
}
