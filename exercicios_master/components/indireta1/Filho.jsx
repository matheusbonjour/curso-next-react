
// Passei no ENEM! 

export default function Filho(props) {
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            
            <button onClick={
                () => props.funcao("Passei no Enem", "Uhuul", "Deu Bom")}>
                Falar com o Pai
            </button>
            
            <button onClick={props.funcao}>Falar com o Pai #2</button>
        </div>
    )
}