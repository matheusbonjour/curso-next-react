

export default function Repeticao1() {
    const listaAprovados = [
        'João',
        'Maria',
        'Pedro',
        'Ricardo',
        'Jean',
        'Matheus', 
        'Danilo',
        'Rodrigo',
    ]

    function renderizarLista() {
        const itens = []

        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)
        }

        return (
            itens
        )
    }

    function renderizar2Lista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    function renderizar3Lista() {
        return listaAprovados.map(function(nome, i) {
            return <li key={i}>{nome}</li> 
        }) // fecha map aq
    }

    return (
        <ul>
            {renderizar3Lista()}
        </ul>
    )
}