<<<<<<< HEAD

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
=======
import Filho from "./Filho";

export default function Pai(props) {
    return (
        <div>
            <h1>Família {props.familia}</h1>
            <Filho nome="Pedro" familia={props.familia} />
            <Filho nome="Joana" familia={props.familia} />
            <Filho {...props} nome="Gabriel" />
        </div>
    )
}
>>>>>>> ee8a5a98332c1acb6c9ce9ee3de7a64ce22608ea
