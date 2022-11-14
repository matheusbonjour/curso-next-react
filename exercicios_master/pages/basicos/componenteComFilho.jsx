import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function componenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item 3"></Item>     
                <Item conteudo="Item 4"></Item>     
                <Item conteudo="Item 5"></Item>     
                <Item conteudo="Item 8"></Item>     
                <Item conteudo="Item 9"></Item>     
                <Item conteudo="Item 11"></Item>     
                <Item conteudo="Item 12"></Item>     
                <Item conteudo="Item 13"></Item>     
            </Lista>
        </div>
    )
}