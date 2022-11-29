<<<<<<< HEAD

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
=======
export default function Filho(props) {
    // 
    console.log(props.funcao)
    return (
        <div>
            <h1>Filho</h1>
            <button onClick={props.funcao}>Falar com o Pai #01</button>
            <button onClick={
                () => props.funcao("Passei no ENEM!", "Uhuuuu", 10)
            }>
                Falar com o Pai #02
            </button>
        </div>
    )
>>>>>>> ee8a5a98332c1acb6c9ce9ee3de7a64ce22608ea
}