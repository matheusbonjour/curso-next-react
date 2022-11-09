import Estilo from "../../components/Estilo"


export default function usandoEstilo() {
    return (
        <div>
            <Estilo numero={3} color="#000" direita/>

            <Estilo numero={-13} color="#FFF" direita={true}/>
        </div>
    )
}

// nao precisa usar o true, só de chamar ele ja entende 