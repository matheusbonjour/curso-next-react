<<<<<<< HEAD
import Filho from "./Filho"


export default function Pai(props) {

    function falarComigo(param1, param2, param3) {
        console.log(param1, param2, param3)
        
    }

    return (
        <div>
            <Filho funcao={falarComigo}  />

        </div>
    )
=======
import Filho from "./Filho";

export default function Pai(props) {

    function falarComigo(param1, param2, param3) {
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Filho funcao={falarComigo} />
        </div>
    )
>>>>>>> ee8a5a98332c1acb6c9ce9ee3de7a64ce22608ea
}