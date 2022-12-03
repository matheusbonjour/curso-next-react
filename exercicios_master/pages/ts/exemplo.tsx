import Pessoa from "../../components/Pessoa";

export default function exemploTS() {
    return (
        <div>
            <Pessoa nome="João" idade={25} />
            <Pessoa nome="Maria" idade={25} />
            <Pessoa nome="Matheus" idade={22} /> 
        </div>
    )
}