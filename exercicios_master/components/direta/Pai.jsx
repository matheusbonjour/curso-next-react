
import Filho from "./Filho"

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho {...props} nome="Matheus" />
            <Filho {...props} nome="Adrieli" />
            <Filho nome="Adenilson" {...props}/>
        </div>
    )
}   