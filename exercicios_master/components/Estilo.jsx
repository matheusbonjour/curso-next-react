import propsSomenteLeitura from "../pages/basicos/propsSomenteLeitura";

export default function Estilo(props) {
    
    //const classeAplicada = 

    return (
        <div>
            <h1 style={{
                backgroundColor: props.numero >= 0 ? "#2D2": "#D22",
                color: props.color,
                textAlign: props.direita ? "right" : "left",
            }}>
                Texto #01
            </h1>
            <h2 className={props.numero >= 0 ? "azul" :"vermelho"}> 
            Texto #02
            </h2>
        </div>
    )
}





//export default function Estilo(props) {
//    return (
//        <div>
//            <h1 style={ {nome: "Theu", idade:25} }>
//                Texto
//            </h1>
//        </div>
//    )
//}